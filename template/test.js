const test = require('ava')
const m = require('.')

test('returns the meaning of life', t => {
  t.is(m(), 42)
})
