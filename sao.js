const { promises: fs } = require('fs')
const path = require('path')
const gravatarUrl = require('gravatar-url')
const isValidNpmName = require('is-valid-npm-name')

const testFiles = ['.github/worflows/test.yml', 'test.js']

module.exports = {
  enforceNewFolder: true,
  move: {
    gitignore: '.gitignore',
    editorconfig: '.editorconfig',
    'eslintrc.yml': '.eslintrc.yml',
    'workflow.yml': '.github/workflows/test.yml'
  },
  prompts: {
    name: {
      message: 'Name of your project',
      default: ':folderName:',
      validate: isValidNpmName
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
      default: answers =>
        `https://github.com/${answers.githubUsername}/${answers.name}`
    },
    authorImg: {
      message: 'Your profile picture (link)',
      default: answers => gravatarUrl(answers.email, { size: 100 }),
      store: true
    },
    keywords: {
      message: 'Write some keywords related to your project',
      default: answers => `miny ${answers.name}`
    },
    test: {
      type: 'list',
      message: 'Do you want unit tests?',
      default: 'myass',
      choices: [
        'ava (full featured framework)',
        'myass (fast and lightweight)',
        'none'
      ]
    }
  },
  data({ test }) {
    return {
      test: test.split(' ')[0]
    }
  },
  gitInit: true,
  npmInstall: true,
  showTip: true,
  post: async ({ answers, folderPath }) => {
    if (answers.test === 'none') {
      testFiles.forEach(fileToRemove =>
        fs.unlink(path.join(folderPath, fileToRemove))
      )
    }
  }
}
