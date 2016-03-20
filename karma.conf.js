var path = require('path');
//var _ = require('lodash');

module.exports = function(config) {
  config.set({
	basePath: '../',
    browsers: ['PhantomJS'],
    frameworks: ['jasmine'],
	plugins: [
		'phantomjs-prebuilt',
		'karma-phantomjs-launcher', 
		'karma-jasmine'
	],
    files: [
	  'node_modules/lodash/index.js',
	  'node_modules/jquery/dist/jquery.js',
      'src/*.js',
	  'test/*.js'
    ]
  });
};