'use strict';

var grunt = require('grunt');

/*
 ======== A Handy Little Nodeunit Reference ========
 https://github.com/caolan/nodeunit

 Test methods:
 test.expect(numAssertions)
 test.done()
 Test assertions:
 test.ok(value, [message])
 test.equal(actual, expected, [message])
 test.notEqual(actual, expected, [message])
 test.deepEqual(actual, expected, [message])
 test.notDeepEqual(actual, expected, [message])
 test.strictEqual(actual, expected, [message])
 test.notStrictEqual(actual, expected, [message])
 test.throws(block, [error], [message])
 test.doesNotThrow(block, [error], [message])
 test.ifError(value)
 */

exports.less_imports = {
	setUp: function(done) {
		// setup here if necessary
		done();
	},
	test_src_dest: function(test) {
		test.expect(1);

		var actual = grunt.file.read('tmp/test_src_dest/imports.less');
		var expected = grunt.file.read('test/expected/default/imports.less');
		test.equal(actual, expected, 'create a correct imports.less from src/dest configuration.');

		test.done();
	},
	test_files: function(test) {
		test.expect(1);

		var actual = grunt.file.read('tmp/test_files/imports.less');
		var expected = grunt.file.read('test/expected/default/imports.less');
		test.equal(actual, expected, 'create a correct imports.less from a files configuration.');

		test.done();
	},
	test_inline_css_false: function(test) {
		test.expect(1);

		var actual = grunt.file.read('tmp/inline_css_false/imports.less');
		var expected = grunt.file.read('test/expected/inline_css_false/imports.less');
		test.equal(actual, expected, 'create a correct imports.less with inlineCSS==false.');

		test.done();
	},
	test_default_compilation: function(test) {
		test.expect(1);

		var actual = grunt.file.read('tmp/compiled/test_default.css');
		var expected = grunt.file.read('test/expected/default/output.css')
		test.equal(actual, expected, 'compile imports.less to css');

		test.done();
	},
	test_inline_css_compilation: function(test) {
		test.expect(1);

		var actual = grunt.file.read('tmp/compiled/inline_css_false.css');
		var expected = grunt.file.read('test/expected/inline_css_false/output.css')
		test.equal(actual, expected, 'compile imports.less to css');

		test.done();
	}
};
