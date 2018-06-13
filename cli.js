#!/usr/bin/env node
var lib = require('./index')

function main() {
  if (process.argv.length !== 3) {
    console.error('expect 1 argument of gif filename')
    return process.exit(1)
  }
  var filename = process.argv[2]
  lib(filename)
    .catch(console.error.bind(console))
}

main()
