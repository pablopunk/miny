#!/usr/bin/env node

const path = require('path')
const mri = require('mri')
const sao = require('sao')
const chalk = require('chalk')

const log = msg => console.log(chalk.blue(msg))
const err = msg => console.log(chalk.red(msg))

function cli (args) {
  if (!args._[0]) {
    err('You must provide a name')
    return
  }

  const name = args._[0]
  log(`Creating package in ${name}`)

  sao({
    template: __dirname,
    targetPath: path.resolve(name),
    mockPrompts: Boolean(args.y)
  })
}

cli(mri(process.argv.slice(2)))
