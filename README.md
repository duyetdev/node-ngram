# node-ngram

Ngram for Nodejs.

<img src="https://img.shields.io/github/forks/duyetdev/node-ngram.svg" />
<img src="https://img.shields.io/twitter/url/https/github.com/duyetdev/node-ngram.svg?style=social" />

# Instalation 

```sh
npm install node-ngram
```

# Example

```js
var Ngram = require('node-ngram');

var ngram = new Ngram({
	n: 2
});

console.log(ngram.ngram("Le Van Duyet"));
// => [["Le", "Van"], ["Van", "Duyet"]]

console.log(ngram.ngram("Le Van Duyet", 3));
// => [ [ 'le', 'van', 'duyet' ], [ 'van', 'duyet' ], [ 'duyet' ] ]

console.log(ngram.trigram("Van-Duyet Le Developer from Vietnam"));
// => [ [ 'van-duyet', 'le' ],
//  [ 'le', 'developer' ],
//  [ 'developer', 'from' ],
//  [ 'from', 'vietnam' ],
//  [ 'vietnam' ] ]

console.log(ngram.ngram("Neque porro quisquam est quitur, adipisci velit."));
// => [ [ 'neque', 'porro' ],
//  [ 'porro', 'quisquam' ],
//  [ 'quisquam', 'est' ],
//  [ 'est', 'quitur' ],
//  [ 'quitur', 'adipisci' ],
//  [ 'adipisci', 'velit' ],
//  [ 'velit' ] ]

```

# Test
```sh
npm test
```

# How to contribute
1. Fork the project on Github
2. Create a topic branch for your changes
3. Ensure that you provide documentation and test coverage for your changes (patches won’t be accepted without)
4. Create a pull request on Github (these are also a great place to start a conversation around a patch as early as possible)

# License
MIT License

Copyright (c) 2015 Van-Duyet Le

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/duyetdev/node-ngram/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

