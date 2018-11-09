# 💁🏻 miny

<p align="center">
  <a href="https://travis-ci.org/pablopunk/miny"><img src="https://img.shields.io/travis/pablopunk/miny.svg" /> </a>
  <a href="https://codecov.io/gh/pablopunk/miny"><img src="https://img.shields.io/codecov/c/github/pablopunk/miny.svg" /> </a>
  <a href="https://standardjs.com/"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" /> </a>
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

### Tests

*miny* provides [ava](https://github.com/avajs/ava) or [myass](https://github.com/pablopunk/myass) to test your code. By default you get a `test.js` with a test example. Running `npm test` will execute [the linter](#code-style) and other [code coverage tools](#code-coverage).

### CI

If you activate [travis-ci](https://travis-ci.org/) for your project, it will automatically run tests for you in every push. The build status is shown by default on your `README.md` file.

### Code coverage

With `npm run coverage` it will run all tests and you'll get a report of what lines of code are covered by the tests, thanks to [nyc](https://github.com/istanbuljs/nyc) and [codecov](https://codecov.io/). This is very useful to catch some bugs and by default it shows the coverage percentage in your `README.md` after every push (just right after *travis* runs all tests).

### Code style

It comes with [StandardJS](https://standardjs.com/) as the code style. `npm test` will always check the style of your code and check for syntax errors.

### Offline

Also, **_miny_ works offline**!


## Examples

* miny itself was created with miny. Yes.
* [nuup](https://github.com/pablopunk/nuup)
* [npm-name-exists](https://github.com/pablopunk/npm-name-exists)
* [prepend-url](https://github.com/pablopunk/prepend-url)
* [microfetch](https://github.com/pablopunk/microfetch)
* [microsoccer](https://github.com/pablopunk/microsoccer)
* [myass](https://github.com/pablopunk/myass)
* _Add yours here_... 😊

## Related

* [lass](https://lass.js.org): Nodejs boilerplate
* [nuup](https://github.com/pablopunk/nuup): `npm publish` with superpowers


## License

MIT


## Author

| ![me](https://gravatar.com/avatar/fa50aeff0ddd6e63273a068b04353d9d?size=100) |
| ---------------------------------------------------------------------------- |
| [Pablo Varela](https://pablo.life)                                            |

