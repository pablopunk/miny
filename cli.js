#!/usr/bin/env node

const path = require('path')
const sao = require('sao')
const chalk = require('chalk')

const log = msg => console.log(chalk.blue(msg))

const name = process.argv[2] || '.'
log(`Creating package in ${name}`)

sao({
  template: __dirname,
  targetPath: path.resolve(name)
})
