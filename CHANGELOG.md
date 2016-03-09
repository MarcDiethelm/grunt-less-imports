# 1.3.0 – 2016-03-09

- Automatically skip destination file name, should it accidentally be included with source pattern.

# 1.2.2 – 2016-02-25

- Removes my previous fix for import paths on Windows using `path.posix`, which is not supported in Node 0.10.x
- Integrates fix by vsa, which uses [slash](https://github.com/sindresorhus/slash). [Thanks vsa!]

# 1.2.1 – 2016-02-23

- Smaller distro, improved docs
- Fixed test build
- No global dependencies for contributors

# 1.2.0 – 2016-02-23

- Fixes import URIs on Windows by using Node's' `path.posix.relative`, thus preventing the use of backslashes.
- Updates devDependencies


# 1.1.0 – 2014-11-06

- `options.import` accepts a function for dynamic setting of imports keyword. [thanks gymglish!]

# 1.0.0 – 2014-09-27

- Handle `files` option with multiple entries correctly. [thanks panta82!]
- Simple implementation of [Less import options](https://github.com/MarcDiethelm/grunt-less-imports#options). Import keyword is applied to all `@import` statements in task target.
- No longer tested on Node.js 0.8.x. Because Node is unwilling to backport npm fixes.
- Dev: Test with Mocha instead of Nodeunit

# 0.9.1 – 2014-01-18

- Fix documentation for the banner option.
- Add advisory about the potentially breaking change in 0.9.0.

# 0.9.0 – 2014-01-18

- This release contains a potentially breaking change, see below. Everything is expected to work fine though.
- Fix: Correctly resolve a relative path from dest to the file to be imported for import statements. Importing files outside of project root wasn't working.
- Output file now has a customizable banner.
- More tests.

# 0.8.8 – 2013-08-23

- Adds this changelog.
- Add a bitcoin donation address to readme.
- Fixes some embarrassing typos in the readme.
