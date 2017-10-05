const test = require('ava')
const m = require('.')

test('returns the meaning of life', async t => {
  t.is(m(), 42)
})
