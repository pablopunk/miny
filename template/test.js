const test = require('ava')
const m = require('.')

test('Simple test', async t => {
  t.is(m(), 42)
})
