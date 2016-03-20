// include gulp
var gulp = require('gulp'); 

// include plug-ins
var jshint = require('gulp-jshint');

var jasmine = require('gulp-jasmine-phantom');
var Server = require('karma').Server;

// JS hint task
gulp.task('jshint', function() {
  gulp.src('./src/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('test1', function () {
  return gulp.src(['src/**/*.js', 'test/**/*_spec.js'])
          .pipe(jasmine());
});

gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});