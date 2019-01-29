<% if (test === 'ava') { %>const test = require('ava')<% } else { %>const test = require('myass')<% }%>
const m = require('.')

test('returns the meaning of life', t => {
  t.is(m(), 42)
})
