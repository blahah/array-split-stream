var test = require('tape')

var makeSplitter = require('./index')

test('splits input arrays', function (t) {
  t.plan(1)

  var count = 0
  var splitter = makeSplitter()

  splitter.on('data', function(entry) {
    count += 1
  })

  splitter.write([1, 2, 3])
  splitter.write(['orange', 'apple', 'tomato'])
  splitter.end()

  splitter.on('end', function () {
    t.equal(count, 6, 'should emit 6 data events')
  })
})

test('errors if input is not array', function (t) {
  t.plan(1)

  var splitter = makeSplitter()

  function passNonArray () {
    splitter.write('not an array')
    splitter.end()

    splitter.on('error', function (error) {
      throw error
    })
  }

  t.throws(passNonArray)
})
