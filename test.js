const test = require('ava')
const sao = require('sao')

const template = __dirname

const mock = {
  name: 'my-project',
  description: 'Awesome project',
  author: 'Pablo Varela',
  email: 'pablovarela182@gmail.com',
  website: 'https:/pablo.pink',
  githubUsername: 'pablopunk',
  keywords: 'boilerplate, generator,, npm   package ,,,  miny',
  test: 'none'
}

test('Invalid npm name', async t => {
  const err = await t.throws(
    sao.mockPrompt(template, Object.assign({}, mock, { name: 'ñ' }))
  )
  t.regex(err.message, /package name had non-URL-safe characters/)
})

test('Defaults', async t => {
  const stream = await sao.mockPrompt(template, {
    name: 'my-project',
    email: 'pablovarela182@gmail.com',
    author: 'Pablo Varela',
    githubUsername: 'foo',
    test: 'none'
  })
  const { answers } = stream.meta
  t.deepEqual(answers, {
    ...mock,
    name: 'my-project',
    description: 'My new npm module',
    githubUsername: 'foo',
    website: 'http://foo.com',
    githubRepo: 'https://github.com/foo/my-project',
    authorImg:
      'https://gravatar.com/avatar/fa50aeff0ddd6e63273a068b04353d9d?size=100',
    keywords: 'miny my-project',
    test: 'none'
  })
})
