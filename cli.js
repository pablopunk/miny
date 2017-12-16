#!/usr/bin/env node

const path = require('path')
const mri = require('mri')
const sao = require('sao')
const chalk = require('chalk')

const args = mri(process.argv.slice(2))

const log = msg => console.log(chalk.blue(msg))

const name = args._[0] || '.'
log(`Creating package in ${name}`)

sao({
  template: __dirname,
  targetPath: path.resolve(name),
  mockPrompts: Boolean(args.y)
})
