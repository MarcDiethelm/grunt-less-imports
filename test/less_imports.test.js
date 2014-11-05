'use strict';

var grunt = require('grunt');
var assert = require('assert');


describe('grunt-less-imports', function() {

	describe('Generation of imports file', function() {

		it('should create a correct imports.less from src/dest configuration', function() {
			var actual = grunt.file.read('tmp/test_src_dest/imports.less');
			var expected = grunt.file.read('test/expected/default/imports.less');
			assert.equal(actual, expected);
		});

		it('should create a correct imports.less from a files configuration', function() {
			var actual = grunt.file.read('tmp/test_files/imports.less');
			var expected = grunt.file.read('test/expected/default/imports.less');
			assert.equal(actual, expected);
		});

		it('should create a correct imports.less from a files configuration with multiple entries', function() {
			var actual1 = grunt.file.read('tmp/test_more_files/deeper.less');
			var expected1 = grunt.file.read('test/expected/more_files/deeper.less');
			assert.equal(actual1, expected1);
			var actual2 = grunt.file.read('tmp/test_more_files/default.less');
			var expected2 = grunt.file.read('test/expected/more_files/default.less');
			assert.equal(actual2, expected2);
		});

		it('should create a correct imports.less with inlineCSS==false', function() {
			var actual = grunt.file.read('tmp/inline_css_false/imports.less');
			var expected = grunt.file.read('test/expected/inline_css_false/imports.less');
			assert.equal(actual, expected);
		});

		it('should create a correct imports.less with a custom banner', function() {
			var actual = grunt.file.read('tmp/test_custom_banner/imports.less');
			var expected = grunt.file.read('test/expected/test_custom_banner/imports.less');
			assert.equal(actual, expected);
		});

		it('should set import keyword from options', function() {
			var actual = grunt.file.read('tmp/import_options/imports.less');
			var expected = grunt.file.read('test/expected/import_options/imports.less');
			assert.equal(actual, expected);
		});

		it('should set import keyword from options using callback', function() {
			var actual = grunt.file.read('tmp/import_options_callback/imports.less');
			var expected = grunt.file.read('test/expected/import_options_callback/imports.less');
			assert.equal(actual, expected);
		});

	});

	describe('Compilation of generated imports file', function() {

		it('should compile imports.less to css', function() {
			var actual = grunt.file.read('tmp/compiled/test_default.css');
			var expected = grunt.file.read('test/expected/default/output.css');
			assert.equal(actual, expected);
		});

		it('should compile imports.less to css (don\'t inline CSS files)', function() {
			var actual = grunt.file.read('tmp/compiled/inline_css_false.css');
			var expected = grunt.file.read('test/expected/inline_css_false/output.css');
			assert.equal(actual, expected);
		});

	});

});
