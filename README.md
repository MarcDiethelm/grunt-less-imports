# grunt-less-imports

> A grunt task to create @import statements from a collection of stylesheet files.

Why use this? To get useful error messages from the LessCSS parser, that tell you what file the error was encountered!
LessCSS uses @import statements to aggregate files and will tell you about parsing errors in those files.
But maintaining these statemants by hand is a pain. In order to automatically aggregate all the style files in a project,
a method of first concatenating the files before parsing is widely used. This works but you loose the valuable
information about where to fix your mistakes.

So, automate @import creation with this plugin and use the resulting file as the source for the LessCSS parser.

By default any .css source files are inlined in the output before the @import statements for the less files start.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the
[Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a
[Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with
that process, you may install this plugin with this command:

```shell
npm install grunt-less-imports --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

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
    },
  },
})
```

### Options

---

### Usage Examples

#### Using src and dest
In this example, `src` and `dest` properties are used to specify input files and the output file.

```js
grunt.initConfig({
  less_imports: {
    options: {
      inlineCSS: true
    },
    src: [ 'styles/*.css', 'styles/*.less'],
    dest: 'dist/imports.less'
  },
})
```

#### Using 'files' shorthand notation
In this example, a `files` shorthand is used to specify input files and the output file.

```js
grunt.initConfig({
  less_imports: {
    options: {
    },
    files: {
      'dist/imports.less': ['styles/styles.css', 'styles/styles.less']
    },
  },
})
```

#### Option
By default any .css source files are inlined in the output before the @import statements for the less files start.
LessCSS itself will generate CSS from .less @import statements, but any .css @imports are left as is. If that's the behavior
you want, set `inlineCSS` to false. The @imports will be created in order of the provided files.

```js
grunt.initConfig({
  less_imports: {
    options: {
      inlineCSS: false // default: true
    },
    src: [ 'styles/*.css', 'styles/*.less'],
    dest: 'dist/imports.less'
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed
functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
