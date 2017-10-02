const test = require('ava')
const sao = require('sao')

const template = __dirname

const defaults = {
  name: 'my-really-awesome-project',
  description: 'Awesome project',
  author: 'Pablo Varela',
  email: 'pablovarela182@gmail.com',
  website: 'https:/pablo.life',
  githubUser: 'pablopunk',
  keywords: 'boilerplate, generator,, npm   package ,,,  miny'
}

test('Invalid name', async t => {
  const err = await t.throws(
    sao.mockPrompt(
      template,
      Object.assign({}, defaults, { name: 'foo' })
    )
  )
  t.regex(err.message, /That name already exists on npm/)
})
