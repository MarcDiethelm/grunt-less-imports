/*
 * grunt-less-imports
 * https://github.com/MarcDiethelm/grunt-less-imports
 *
 * Copyright (c) 2013 Marc Diethelm
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');

module.exports = function(grunt) {
	// Please see the Grunt documentation for more information regarding task
	// creation: http://gruntjs.com/creating-tasks

	grunt.registerMultiTask('less_imports', 'A grunt task to create @import statements from a collection of stylesheet files.', function() {
		var css = '',
			lessImports = '',
			// Merge task-specific and/or target-specific options with these defaults.
			options = this.options({
				inlineCSS: true
			}),
			dest = this.files[0].dest,
			relRoot = path.dirname(dest),
			resolved
		;

		// Iterate over all specified file groups.
		this.files.forEach(function(f) {

			f.src.forEach(function(filepath) {
				var extension;
				// Warn on and ignore invalid source files (e.g. if nonull was set).
				if (!grunt.file.exists(filepath)) {
					grunt.log.warn('Source file "' + filepath + '" not found.');
				} else {
					extension = filepath.split('.').pop();
					if (options.inlineCSS === true && extension === 'css') {
						grunt.log.debug(filepath.green+ ' appending css'.magenta);
						css += grunt.file.read(filepath) + '\n\n';
					}
					else {
						resolved = path.relative(relRoot, filepath);
						grunt.log.debug(resolved.green + ' @import created'.magenta);
						lessImports += '@import "' + resolved + '";\n';
					}
				}
			});
		});

		// Write the destination file.
		grunt.file.write(dest, css + lessImports);
		grunt.log.writeln('File "' + this.files[0].dest.cyan + '" created.');
	});

};
