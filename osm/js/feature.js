/**
 * Created by yuriy.horobey on 25-Apr-16.
 */

function Feature(json) {
    var _mag;
    var _place;
    var _time;
    var _updated;
    var _tz;
    var _url;
    var _detail;
    var _felt;
    var _cdi;
    var _mmi;
    var _alert;
    var _status;
    var _tsunami;
    var _sig;
    var _net;
    var _code;
    var _ids;
    var _sources;
    var _types;
    var _nst;
    var _dmin;
    var _rms;
    var _gap;
    var _magType;
    var _type;
    var _title;
    var _id;
    var _coordinates;
    var _description;

    this.getLongitude = function () {
        return Number(_coordinates[0]);
    }

    this.getLatitude = function () {
        return Number(_coordinates[1]);
    }

    this.getDescription = function () {

        return _description;
    }

    this.getMarker = function () {
        //todo: replace hardcode
        return {
            externalGraphic: 'img/marker.png',
            graphicHeight: 25,
            graphicWidth: 21,
            graphicXOffset: -12,
            graphicYOffset: -25
        };
    }

    function _initFromJson(json) {
        _mag = json['properties']['mag'];
        _place = json['properties']['place'];
        _time = json['properties']['time'];
        _updated = json['properties']['updated'];
        _tz = json['properties']['tz'];
        _url = json['properties']['url'];
        _detail = json['properties']['detail'];
        _felt = json['properties']['felt'];
        _cdi = json['properties']['cdi'];
        _mmi = json['properties']['mmi'];
        _alert = json['properties']['alert'];
        _status = json['properties']['status'];
        _tsunami = json['properties']['tsunami'];
        _sig = json['properties']['sig'];
        _net = json['properties']['net'];
        _code = json['properties']['code'];
        _ids = json['properties']['ids'];
        _sources = json['properties']['sources'];
        _types = json['properties']['types'];
        _nst = json['properties']['nst'];
        _dmin = json['properties']['dmin'];
        _rms = json['properties']['rms'];
        _gap = json['properties']['gap'];
        _magType = json['properties']['magType'];
        _type = json['properties']['type'];
        _title = json['properties']['title'];
        _id = json['id'];
        _coordinates = json['geometry']['coordinates'];
        //todo: replace hardcode with configurable template
        _description = _title + '<br><a href="' + _url + '" target="_blank">see more</a>';
    }

    if (json) {
        _initFromJson(json)
    }
}