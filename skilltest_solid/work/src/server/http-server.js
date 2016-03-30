/**
 * Created by yuriy.horobey on 2016-01-24.
 */
    //configuration:
DEBUG_MODE = true;

var DB_NAME = 'db';
// MongoDB Connection URL
var DB_URL = 'mongodb://localhost:27017/' + DB_NAME;

var WWW_ROOT = '../build/www';
var WWW_PORT = '8080';
var FS_BUFFER_SIZE = 4;//4096;
/////////////////////////////
var http = require('http');
//var fs = require('fs-extra');
var fs = require('fs');
var url = require('url');

// Use connect method to connect to the Server
var MongoClient = require('mongodb').MongoClient

http.createServer(function (request, response) {
    var url = request.url;

    var idxQuery = url.indexOf('?')
    var path = idxQuery !== -1 ? url.substring(0, idxQuery) : url;
    var action = path.toLocaleLowerCase().split('/')[1];
    _log(action, 'Serving');
    try {
        switch (action) {
            case '':
            case 'index.html':
                actIndex(request, response);
                break;
            case 'js':
            case 'vendor':
            case 'assets':
            case 'templates':
                _serveFile(request, response, path);
                break;
            case 'favicon.ico':
                _serveFile(request, response, '/favicon.ico');
                break;
            case 'load':
                actLoadEntries(request, response);
                break;
            case 'add':
                if (request.method !== 'POST') {
                    throw new Error('Wrong method to add items. Expecting "POST", received: "' + request.method + '"');
                }
                actAddEntry(request, response);
                break;
            default:
                actErr404(request, response);
                break;
        }
        //   response.end();
    } catch (e) {
        actErr500(request, response, e);
    }

}).listen(WWW_PORT);

function actLoadEntries(request, response) {
    var requestParams = require('url').parse(request.url, true);
    var lastMessageTimestamp = parseInt(requestParams.query.timestamp);
    MongoClient.connect(DB_URL, function (err, db) {
        if (err) {
            _handleError(err, 'DB');
            return;
        }

        try {

            var conn = db.collection(DB_NAME, function (err, res) {

                res.find({"timestamp": {$gt: lastMessageTimestamp}}).toArray(function (err, items) {
                    //  res.find({"timestamp": {$gt:2}}).toArray(function (err, items) {

                    _log(res, items, 'found items');
                    response.end(JSON.stringify(items));
                    db.close();
                });
            });

        } catch (err) {
            db.close();
            _handleError(err);
        }
    });

}
function actAddEntry(request, response) {
    MongoClient.connect(DB_URL, function (err, db) {
        if (err) {
            _handleError(err, 'DB');
            return;
        }

        db.close();
    });
}
function actIndex(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    _serveFile(request, response, '/index.html')
}
function actErr404(request, response) {
    response.setStatus(404);
    _serveFile(request, response, '/404.html');
}
function actErr500(request, response, e) {
    _log(e, 'SERVER ERROR', 'error');
    response.write(
        '<h1>Server Panic</h1>'
        + '<p>Since this is demo server we will disclose the error:<hr><pre>'
        + e
        + '</pre><hr></p>');
}
function _serveFile(request, response, path) {
    if (!path) {
        //TODO pay attention here: in async mode exception can never be cought!
        throw new Error('Unable to server file without "path" argument!');
    }
    path = String(path).trim();
    if (path.substr(0, 1) !== '/') {
        path = '/' + path;
    }
    path = WWW_ROOT + path;
    _log(path, 'File');

    var readStream = fs.createReadStream(path);
    readStream.on('open', function () {
        readStream.pipe(response);
    });


    readStream.on('error', function (err) {
        _handleError(err, 'FILE');
        response.end();
        return;
    });

}
function _handleError(err, label) {
    //TODO implement real error handling!
    _log(err, label, 'error');
}
function _log(data, label, mode) {
    if (DEBUG_MODE) {

        mode = ('' + mode).trim();
        mode = mode && typeof console[mode] === 'function' ? mode : 'log';
        label = (label || mode.toUpperCase()) + ': ';
        console[mode](label, data);
    }
}