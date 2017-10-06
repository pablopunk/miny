const test = require('ava')
const sao = require('sao')

const template = __dirname

const defaults = {
  name: 'my-really-awesome-project',
  description: 'Awesome project',
  author: 'Pablo Varela',
  email: 'pablovarela182@gmail.com',
  website: 'https:/pablo.life',
  githubUsername: 'pablopunk',
  keywords: 'boilerplate, generator,, npm   package ,,,  miny'
}

test('Invalid npm name', async t => {
  const err = await t.throws(
    sao.mockPrompt(
      template,
      Object.assign({}, defaults, { name: 'ñ' })))
  t.regex(err.message, /package name had non-URL-safe characters/)
})

test('Name already exists on npm', async t => {
  const err = await t.throws(
    sao.mockPrompt(
      template,
      Object.assign({}, defaults, { name: 'foo' })))
  t.regex(err.message, /That name already exists on npm/)
})

test('Defaults', async t => {
  const stream = await sao.mockPrompt(
    template,
    {
      name: 'no-way-this-exists-already',
      email: 'pablovarela182@gmail.com',
      author: 'Pablo Varela',
      githubUsername: 'foo'
    }
  )
  const answers = stream.meta.answers
  t.deepEqual(
    answers,
    Object.assign(
      {},
      defaults,
      {
        name: 'no-way-this-exists-already',
        description: 'My new npm module',
        githubUsername: 'foo',
        website: 'http://foo.com',
        githubRepo: 'https://github.com/foo/no-way-this-exists-already',
        authorImg: 'https://gravatar.com/avatar/fa50aeff0ddd6e63273a068b04353d9d?size=100',
        keywords: 'miny no-way-this-exists-already'
      }
    )
  )
})
