---

<div align="center">
  <h1>array-split-stream</h1>
  <h2>a nodeJS transform stream that splits incoming arrays</h2>
  <p>
    <a href="https://npmjs.com/packages/array-split-stream" alt="npm package">
      <img src="https://img.shields.io/npm/v/array-split-stream.svg?style=flat-square">
    </a>
    <a href="https://github.com/blahah/array-split-stream/blob/master/LICENSE" alt="CC0 license">
      <img src="https://img.shields.io/badge/license-CC0-ff69b4.svg?style=flat-square">
    </a>
  </p>
</div>

---

A nodeJS [through2](https://github.com/rvagg/through2) transform stream that splits incoming arrays, emitting each array entry as a separate data event to.

## Install

```
npm install array-split-stream
```

## Usage

``` js
var splitter = require('array-split-stream')

splitter.on('data', function(entry) {
  console.log('entry:', entry)
})

splitter.on('end', function() {
  console.log('done')
})

splitter.write([1, 2, 3])
splitter.write(['orange', 'apple', 'tomato'])
splitter.end()

// entry: 1
// entry: 2
// entry: 3
// entry: orange
// entry: apple
// entry: tomato
// done
```

## License

To the extent possible by law, we transfer any rights we have in the this code to the public domain. Specifically, we do so using the [CC0 1.0 Universal Public Domain Dedication](https://creativecommons.org/publicdomain/zero/1.0/).

You can do whatever you want with this code. No need to credit us, link to us, include any license, or anything else. But if you want to do those things, you're free to do that too.
