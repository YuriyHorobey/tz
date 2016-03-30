/**
 * Gulpfile
 */


/**
 * Configuration.
 *
 * The only point where all the configuration should be placed.
 *
 * @type {{DIR: {SRC: string, DST: string, DB: string, DOCS: string}}}
 */
var CFG = {
    //Directories
    DIR: {
        //Paths to source files
        SRC:  {
            CLIENT: './src/client',
            SERVER: './src/server',
            VENDOR: './vendor'
        },
        //Path to destination
        DST:  {
            CLIENT: '../build/www',
            SERVER: '../build/server',
            VENDOR: '../build/www/vendor'
        },
        //Database folder
        DB:   '../db',  //must match 'database.sample' file
        //API docs folder
        DOCS: '../docs'
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                              Dependencies
var gulp = require('gulp');
var fs = require('fs-extra');
var mongo = require('mongodb').MongoClient;
var markdown = require('gulp-markdown');
var sass = require('gulp-sass');
var exec = require('child_process').exec;
var args = require('yargs').argv;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                              Common [big] tasks

//gulp.task('default', ['db:init', 'db:start', 'db:import','css:build', 'srv:run', 'watch']);
gulp.task('default', ['demo']);
gulp.task('demo', ['build:clean', 'build:all']);

/**
 * Standard developer's task.
 *
 * Cleans all destination the directories, builds all the project and watches on the sources
 * launching appropriate builder.
 *
 * Currently it is equivalent to running: 'build:clean', 'build:all', 'watch'
 */
gulp.task('dev', ['build:clean', 'build:all', 'watch']);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                              Build

/**
 * Builds entire project.
 *
 * Currently it executes:
 * 'build:clean', 'build:css' and 'build:html'
 */
gulp.task('build:all', ['build:js', 'build:css', 'build:html', 'build:copy']);

/**
 * Build all JavaScripts.
 *
 * Runs 'build:js:client', 'build:js:server', 'build:js:server'
 */
gulp.task('build:js', ['build:js:client', 'build:js:server', 'build:js:vendor']);

/**
 * Build client-side JavaScripts.
 *
 * Currently we do not use any preprocessors, so this is just copy from {CFG.DIR.SRC.?} to {CFG.DIR.DST.?} folders.
 * ..but in future..
 */
gulp.task('build:js:client', function () {
    return gulp.src(CFG.DIR.SRC.CLIENT + '/js/**/*.js').pipe(gulp.dest(CFG.DIR.DST.CLIENT + '/js/'));
});

/**
 * Build vendor JavaScripts.
 *
 * Currently we do not use any preprocessors, so this is just copy from {CFG.DIR.SRC.?} to {CFG.DIR.DST.?} folders.
 * ..but in future..
 */
gulp.task('build:js:vendor', function () {
    return gulp.src(CFG.DIR.SRC.VENDOR + '/**/*.js').pipe(gulp.dest(CFG.DIR.DST.VENDOR));
});


/**
 * Build all JavaScripts.
 *
 * Currently we do not use any preprocessors, so this is just copy from {CFG.DIR.SRC.?} to {CFG.DIR.DST.?} folders.
 * ..but in future..
 */
gulp.task('build:js:server', function () {
    return gulp.src(CFG.DIR.SRC.SERVER + '/**/*.js').pipe(gulp.dest(CFG.DIR.DST.SERVER));
});


/**
 * Build CSS.
 *
 * Compiles CSS files out of SCSS and copies to {CFG.DIR.DST}/assets/css folder.
 */
gulp.task('build:css', function () {
    return gulp.src(CFG.DIR.SRC + "/assets/scss/index.scss")
        .pipe(sass())
        .pipe(gulp.dest(CFG.DIR.DST + '/assets/css'));
});

/**
 * Build HTML files.
 *
 * Currently we do not use any preprocessors, so this is just copy from {CFG.DIR.SRC} to {CFG.DIR.DST} folders.
 * ..but in future..
 */
gulp.task('build:html', function () {
    return gulp.src(CFG.DIR.SRC.CLIENT + '/html/**/*.html').pipe(gulp.dest(CFG.DIR.DST.CLIENT));
});


/**
 * Copy some binary files.
 *
 * Stuff like images, fonts etc
 */
gulp.task('build:copy', function () {
    console.log(CFG.DIR.DST + '/img/', 'img');
    return gulp.src(CFG.DIR.SRC + '/assets/img/+(*.png|*.jpg|*.gif)')//(*.png|*.gif|*.jpg|*.jpeg)')
        .pipe(gulp.dest(CFG.DIR.DST + '/assets/img/'));
});

/**
 * Cleans all the destination directories.
 *
 * @see CFG
 */
gulp.task('build:clean', function (cb) {
    /*
     fs.emptyDirSync(CFG.DIR.DB, function () {
     });
     */
    fs.emptyDirSync(CFG.DIR.DST.CLIENT, function () {
    });
    fs.emptyDirSync(CFG.DIR.DST.SERVER, function () {
    });
    fs.emptyDirSync(CFG.DIR.DOCS, function () {
    });
    return cb();
});

/**
 * Watches source files and launches appropriate builders
 */
gulp.task('watch', function (cb) {
    gulp.watch(CFG.DIR.SRC.CLIENT + '/html/**/*.html', ['build:html']);
    gulp.watch(CFG.DIR.SRC.CLIENT + '/js/**/*.js', ['build:js']);
    gulp.watch(CFG.DIR.SRC.CLIENT + '/assets/img/*.*', ['build:copy']);
    gulp.watch(CFG.DIR.SRC.CLIENT + '/assets/scss/**/*.scss', ['build:css']);

    return cb();
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                              Database tasks

gulp.task('db:start', function () {
    fs.mkdir(CFG.DIR.DB);
    var command = 'mongod --dbpath "' + CFG.DIR.DB + '"';
    runCommand(command);
});

gulp.task('db:import', function () {
    var dbFile = (args && args.file) ? args.file : './database.sample';
    var command = 'mongo < ' + dbFile;
    runCommand(command);
});

gulp.task('db:stop', function () {
    var command = 'mongo admin --eval "db.shutdownServer();"'
    runCommand(command);
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                              All the other tasks and utilities
/**
 * Read gulp.md and display it in console.
 * TODO: find some normal markdown plugin for Gulp.
 */
gulp.task('help', function () {
    return gulp.src('../gulp.md')
        .pipe(markdown())
        .pipe(gulp.dest('./xx'));
    /*
     .on('datadd',function(){
     console.log(111111111111111111111111);
     }) ;
     */
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
function runCommand(command) {
    exec(command, function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        if (err !== null) {
            console.log('exec error: ' + err);
        }
    });
}
