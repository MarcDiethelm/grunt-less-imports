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
