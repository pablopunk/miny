# 💁🏻 miny

<p align="center">
  <a href="https://github.com/pablopunk/miny"><img src="https://img.shields.io/badge/made_with-miny-1eced8.svg" /> </a>
  <a href="https://www.npmjs.com/package/miny"><img src="https://img.shields.io/npm/dt/miny.svg" /></a>
</p>

<p align="center">
  <i>The minimal module generator that generated itself</i>
</p>
<p align="center">
  <img src="https://github.com/pablopunk/art/raw/master/miny/miny.jpg" />
</p>

> This module is a very easy way of getting started in nodejs, npm modules, TDD and CI.

[Look at miny's awesome features](#features)

## Install

```bash
npm install -g miny
```

## Usage

### Generate a new project

```bash
$ miny my-awesome-project
```

<p align="center">
  <img src="https://file-rkejrchiww.now.sh" alt="Screencast" width="450px">
</p>

You can also use de option `-y` to skip all the questions and use the defaults:

```bash
$ miny my-awesome-project -y
Creating package in my-awesome-project
warning The yes flag has been set. This will automatically answer yes to all questions which may have security implications.
(...)
```

## Features

### Tests. _optional_

_miny_ provides [ava](https://github.com/avajs/ava) or [myass](https://github.com/pablopunk/myass) to test your code. By default you get a `test.js` with a test example. Running `npm test` will execute all your tests.

### CI

It includes [github actions](https://github.com/features/actions) that will automatically run tests on every push and pull request.

### Code style

_miny_ comes with `prettier` built-in to automatically format your code on every commit, so you can forget about code inconsistencies across your codebase.

It's also useful to use an actual linter for catching some bugs or not used code, so it also includes `eslint` to lint all your code and help you fixing potential bugs.

You can customize the rules it follows by modifying the section `prettier` in `package.json`. By default, it will use _2 spaces as tabs_, remove unnecessary semicolons and convert double quoutes to _single quoutes_. You can add/remove [all of these rules](https://prettier.io/docs/en/options.html). You can also edit the `eslint` rules in `.eslintrc.yml`. Take a look at [eslint docs](https://eslint.org/docs/user-guide/configuring). Runnning `npm run lint` will run both prettier and eslint in your project. There's also a `lint-fix` npm script that can help fixing trivial errors.

### Offline

Also, **_miny_ works offline**!

## Examples

- _miny_ itself was created with miny. Yes.
- [nuup](https://github.com/pablopunk/nuup)
- [npm-name-exists](https://github.com/pablopunk/npm-name-exists)
- [prepend-url](https://github.com/pablopunk/prepend-url)
- [microfetch](https://github.com/pablopunk/microfetch)
- [microsoccer](https://github.com/pablopunk/microsoccer)
- [myass](https://github.com/pablopunk/myass)
- _Add yours here_... 😊

## Related

- [lass](https://lass.js.org): Nodejs boilerplate
- [nuup](https://github.com/pablopunk/nuup): `npm publish` with superpowers

## License

MIT

## Author

| ![me](https://gravatar.com/avatar/fa50aeff0ddd6e63273a068b04353d9d?size=100) |
| ---------------------------------------------------------------------------- |
| [Pablo Varela](https://pablo.pink)                                           |
