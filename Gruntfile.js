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
		// Expose package.json on grunt config
		package: grunt.file.readJSON('package.json'),

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
				src: ['test/fixtures/*.less', 'test/fixtures/*.css', 'test/fixtures/deeper/*.less', 'test/fixtures/deeper/*.css'], // test using incorrect order, because we handle this
				dest: 'tmp/test_src_dest/imports.less'
			},
			test_files: {
				options: {
				},
				files: {
					'tmp/test_files/imports.less': ['test/fixtures/styles.less', 'test/fixtures/styles.css', 'test/fixtures/deeper/styles.less', 'test/fixtures/deeper/styles.css']
				}
			},
			test_more_files: {
				options: {
				},
				files: {
					'tmp/test_more_files/default.less': ['test/fixtures/styles.less', 'test/fixtures/styles.css'],
					'tmp/test_more_files/deeper.less': ['test/fixtures/deeper/styles.less', 'test/fixtures/deeper/styles.css']
				}
			},
			inline_css_false: {
				options: {
					inlineCSS: false
				},
				src: ['test/fixtures/*.less', 'test/fixtures/*.css', 'test/fixtures/deeper/*.less', 'test/fixtures/deeper/*.css'],
				dest: 'tmp/inline_css_false/imports.less'
			},
			test_custom_banner: {
				options: {
					banner: '// Banner for <%= package.name %>'
				},
				src: ['test/fixtures/*.less', 'test/fixtures/*.css'],
				dest: 'tmp/test_custom_banner/imports.less'
			},
			import_option: {
				options: {
					import: 'reference'
				},
				src: ['test/fixtures/*.less', 'test/fixtures/*.css'],
				dest: 'tmp/import_options/imports.less'
			},
			import_function_option: {
				options: {
					import: function(filepath, extension) {
						if (filepath === 'test/fixtures/styles.less') {
							return 'reference';
						}
						else return 'once';
					}
				},
				files: {
					'tmp/import_options_callback/imports.less': ['test/fixtures/styles.less', 'test/fixtures/styles.css', 'test/fixtures/deeper/*.less']
				}
			}
		},

		// Unit tests.
		mochaTest: {
			test: {
				options: {
					reporter: 'spec'
				},
				src: ['test/*.test.js']
			}
		},

		less: {
			compile: {
				files: {
					'tmp/compiled/test_default.css': 'tmp/test_src_dest/imports.less',
					'tmp/compiled/inline_css_false.css': 'tmp/inline_css_false/imports.less'
				}
			}
		}

	});

	// Actually load this plugin's task(s).
	grunt.loadTasks('tasks');

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-mocha-test');

	// Whenever the "test" task is run, first clean the "tmp" dir, then run this
	// plugin's task(s), then test the result.
	grunt.registerTask('test', ['clean', 'less_imports', 'less', 'mochaTest']);

	// By default, lint and run all tests.
	grunt.registerTask('default', ['jshint', 'test']);

};
