gdoc
========

`gdoc` is a documentation generator based on [Dox](https://github.com/visionmedia/dox) and Markdown with support for JavaScript.

It can be used from the terminal via the `gdoc` command or programmatically  NodeJS with `var gdoc = require('gdoc')`.

Examples can be found under `examples/` directory.

`gdoc` is a refactoring of [markdox][mdox].

[mdox]: https://github.com/cbou/markdox

Installation
---

    $ npm install -g gdoc

Usage
---

```terminal
$ gdoc myfile.js
# or
$ gdoc myfile1.js myfile2.js
```

Programmatically:

```javascript
gdoc.process(files, 'output.md', function(){
  console.log('Documentation generated');
});
```

<!--or with the [gulp plugin](https://github.com/gberger/gulp-markdox) -->

Quick Start
---
  
    $ gdoc test/fixtures/a.js test/fixtures/b.js

Here is the list of supported tags:

 * @author author name <email@example.com>
 * @version 0.0.1
 * @deprecated
 * @param {type} name Message
 * @return {type} Message
 * @throws {type} Message
 * @see something
 * @name name
 * @method name
 * @class name
 * @function name

Javascript comments should be like this:

```javascript
/**
 * Escape the given `html`.
 *
 * ### Examples:
 *
 *     utils.escape('<script></script>')
 *     // => '&lt;script&gt;&lt;/script&gt;'
 *
 * @param {String} html string to be escaped
 * @return {String} escaped html
 * @api public
 */
```


Notice that the Markdown titles `##`, `####` (and the next titles too) inside a Coffeescript comment won't work, because `###`  is the multiline comment. But it works for Javascript.

In replacement to `#`, `###` (until `######`) it is possible to write `h1`, `h2` (until `h6`), there will be replaced by `#`, `###` ...

<!--More examples can be found in [examples/fixtures/](https://github.com/cbou/markdox/tree/master/examples/fixtures) and the results are in [examples/docs](https://github.com/cbou/markdox/tree/master/examples/docs). -->

Advanced Usage
---

Template, Formater and Compiler of `gdoc` can be overriden.

Nevertheless default formatter, template and compiler are available under `gdoc.defaultFormatter`, `gdoc.defaultCompiler`, `gdoc.defaultTemplate`.

```javascript
var gdoc = require('gdoc');

var options = {
  output: 'output.md'
  , formatter: function(docfile){return docfile;}
  , compiler: function(filepath, data){
    return myCustomCompiler(data);
  }
  , template: 'output.ejs'
};

gdoc.process(fixtures, options, function(){
  console.log('File `all.md` generated with success');
});
```

Documentation
---

Documentation is [here](https://github.com/goliatone/gdoc/blob/master/doc/api.md) and can be generate with:

    $ npm run-script documentation

License
--------

(The MIT License)

Copyright (c) 2014 goliatone

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.