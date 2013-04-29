/*
 * grunt-less-imports
 * https://github.com/MarcDiethelm/grunt-less-imports
 *
 * Copyright (c) 2013 Marc Diethelm
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({
		jshint: {
			all: [
				'Gruntfile.js',
				'tasks/*.js',
				'<%= nodeunit.tests %>',
			],
			options: {
				jshintrc: '.jshintrc'
			}
		},

		// Before generating any new files, remove any previously-created files.
		clean: {
			tests: ['tmp']
		},

		// Configuration to be run (and then tested).
		less_imports: {
			test_src_dest: {
				options: {
				},
				src: [ 'test/fixtures/*.less', 'test/fixtures/*.css'], // test using incorrect order, because we handle this
				dest: 'tmp/test_src_dest/imports.less'
			},
			test_files: {
				options: {
				},
				files: {
					'tmp/test_files/imports.less': ['test/fixtures/styles.less', 'test/fixtures/styles.css']
				}
			},
			inline_css_false: {
				options: {
					inlineCSS: false
				},
				src: ['test/fixtures/*.css', 'test/fixtures/*.less'],
				dest: 'tmp/inline_css_false/imports.less'
			}
		},

		// Unit tests.
		nodeunit: {
			tests: ['test/*_test.js']
		}

	});

	// Actually load this plugin's task(s).
	grunt.loadTasks('tasks');

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');

	// Whenever the "test" task is run, first clean the "tmp" dir, then run this
	// plugin's task(s), then test the result.
	grunt.registerTask('test', ['clean', 'less_imports', 'nodeunit']);

	// By default, lint and run all tests.
	grunt.registerTask('default', ['jshint', 'test']);

};
