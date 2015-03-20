var gulp = require('gulp');
var karma = require('karma').server;
var connect = require('gulp-connect');
var protractor = require("gulp-protractor").protractor;
var webdriver_update = require("gulp-protractor").webdriver_update;
var webdriver_standalone = require("gulp-protractor").webdriver_standalone;

gulp.task('tests', ['karma', 'protractor']);

gulp.task('karma', function (done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done);
});

gulp.task('protractor', function (done) {
  webdriver_update({}, function () {
    webdriver_standalone(runTests);
  });

  function runTests() {
    connect.server({
      port: 8888
    });

    gulp.src(['./e2e/*.js'])
      .pipe(protractor({
          configFile: './protractor.conf.js',
          args: ['--baseUrl', 'http://127.0.0.1:8888']
      }))
      .on('error', function(e) {
        connect.serverClose();
        throw e;
      })
      .on('end', function () {
        connect.serverClose();
        done();
      });
  }
});