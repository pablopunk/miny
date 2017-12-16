const exists = require('npm-name-exists')
const gravatarUrl = require('gravatar-url')
const isValidNpmName = require('is-valid-npm-name')
const isOnline = require('is-online')

module.exports = {
  enforceNewFolder: true,
  prompts: {
    name: {
      message: 'Name of your project',
      default: ':folderName:',
      validate: async v => {
        const isValid = isValidNpmName(v)
        if (isValid !== true) {
          return isValid
        }
        /* istanbul ignore if */
        if (!await isOnline()) {
          return true
        }
        return (await exists(v)) ? 'That name already exists on npm' : true
      }
    },
    description: {
      message: 'Description',
      default: 'My new npm module'
    },
    author: {
      message: 'What is your full name',
      default: ':gitUser:',
      store: true
    },
    email: {
      message: 'What is your email',
      default: ':gitEmail:',
      store: true
    },
    githubUsername: {
      message: 'What is your username on github',
      default: ':gitUser:',
      store: true
    },
    website: {
      message: 'What is your personal website',
      default: answers => `http://${answers.githubUsername}.com`,
      store: true
    },
    githubRepo: {
      message: 'What is going to be the github repo',
      default: answers => `https://github.com/${answers.githubUsername}/${answers.name}`
    },
    authorImg: {
      message: 'Your profile picture (link)',
      default: answers => gravatarUrl(answers.email, {size: 100}),
      store: true
    },
    keywords: {
      message: 'Write some keywords related to your project',
      default: answers => `miny ${answers.name}`
    }
  },
  gitInit: true,
  npmInstall: true,
  showTip: true
}
