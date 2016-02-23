[![Build status](https://img.shields.io/travis/MarcDiethelm/grunt-less-imports.svg)](https://travis-ci.org/MarcDiethelm/grunt-less-imports) &nbsp; ![npm version](https://img.shields.io/npm/v/grunt-less-imports.svg) &nbsp; ![npm version](https://img.shields.io/badge/license-MIT-blue.svg)

---

# grunt-less-imports

A grunt task to create LessCSS @import statements from a collection of stylesheet files.

```less
@import (once) "filename"; // <-- these. in a file.
```

Why use this? To get useful error messages from the LessCSS parser, that tell you in what file the error was encountered!
LessCSS uses @import statements to aggregate files and will tell you about parsing errors in those files.
But maintaining these statements by hand is a pain. In order to automatically aggregate all the style files in a project,
a method of first concatenating the files before parsing is widely used. This works but you loose the valuable
information about where to fix your mistakes.

So, automate @import creation with this plugin and use the resulting file as the source for the LessCSS parser.

By default any .css source files are inlined in the output before the @import statements for the less files start.

## Getting Started
This plugin requires Grunt `^0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the
[Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a
[Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with
that process, you may install this plugin with this command:

```shell
npm install grunt-less-imports --save-dev
```

`--save-dev` adds the plugin to your devDependencies.

Once the plugin has been installed, load it in your `Gruntfile.js` like so:

```js
grunt.loadNpmTasks('grunt-less-imports');
```

## The "less_imports" task

### Overview
In your project's Gruntfile, add a section named `less_imports` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
	less_imports: {
		options: {
			// Task-specific options go here.
		},
		your_target: {
			// Target-specific file lists and/or options go here.
		}
	}
})
```

### Options

- **options.inlineCSS** `{Boolean} true`  
By default any `.css` source files are inlined in the output before the `@import` statements for the less files start.
  LessCSS itself will generate CSS from `.less` @import statements, but any `.css` @imports are left as is. If that's the behavior
  you want, set `inlineCSS` to false. The @imports will be created in order of the provided files.

- **options.banner** `{String} "// This file was generated by grunt-less-imports"`  
This option contains the banner that is added to the beginning of the generated output file.

- **options.import** `{String|Function} "once"`  
Set Less [import option keyword](http://lesscss.org/features/#import-options).  
  String: Set the keyword for all `@import` statements in the task target.  
  Function: Dynamically set the `@import` keyword with a callback. The path and extension of the current file are passed as arguments. The function must return a string.


#### Examples
Basic example with options

```js
grunt.initConfig({
	less_imports: {
		options: {
			inlineCSS: false, // default: true
			import: 'reference' // default: once
		},
		src: [ 'styles/*.css', 'styles/*.less'],
		dest: 'temp/imports.less'
	}
})
```

---

### More Examples

#### Using 'files' shorthand notation
In this example, a `files` shorthand is used to specify input files and the output file instead of `src` and `dest`.

```js
grunt.initConfig({
	less_imports: {
		options: {
		},
		files: {
			'dist/imports.less': ['styles/styles.css', 'styles/styles.less']
		}
	}
})
```

#### Using multiple task targets

```js
grunt.initConfig({
	less_imports: {
		options: { // general task options
			inlineCSS: false
		},
		project: {
			src: [ 'styles/*.css', 'styles/*.less'],
			dest: 'dist/project.less'
		},
		vendor: {
			options: { // target-specific options
				import: 'reference'
			},
			src: [ 'styles/vendor/*.css', 'styles/vendor/*.less'],
			dest: 'dist/vendor.less'
		}
	}
})
```

#### Example with a options.import callback

```js
grunt.initConfig({
	less_imports: {
		options: {
			import: function(filepath, extension) {
				if (filepath === 'styles/helpers.less')
					return 'reference';
				else
					return 'once';
			}
		},
		src: [ 'styles/*.css', 'styles/*.less'],
		dest: 'temp/imports.less'
	}
})
```

## Troubleshooting

Run the task with the debug and verbose options. This will give you a lot of info about what's going on.

```bash
grunt less_imports --debug --verbose
```

To just run a specific task target

```bash
grunt less_imports:target-name --debug --verbose
```

Debug will make grunt-less-imports print out more info, and verbose is used by grunt to be, well, really quite verbose.

## Contributing
[How to contribute to a project on Github](https://github.com/MarcDiethelm/contributing/blob/master/README.md)

## Release History
see [CHANGELOG.md](CHANGELOG.md)
