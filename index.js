var construct = require('through2').ctor

module.exports = construct({ objectMode: true }, function(data, enc, done) {
  if (!(data instanceof Array)) {
    var err = new Error('data passed to array-split-stream must be a stream of Array objects')
    return done(err)
  }

  var stream = this
  data.forEach(function(entry) {
    stream.push(entry)
  })

  done()
})
