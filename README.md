# 💁🏻 miny

<p align="center">
  <a href="https://travis-ci.org/pablopunk/miny"><img src="https://img.shields.io/travis/pablopunk/miny.svg" /> </a>
  <a href="https://codecov.io/gh/pablopunk/miny"><img src="https://img.shields.io/codecov/c/github/pablopunk/miny.svg" /> </a>
  <a href="https://github.com/sindresorhus/xo"><img src="https://img.shields.io/badge/code_style-XO-5ed9c7.svg" /> </a>
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

```sh
npm install -g miny
```


## Usage

### Generate a new project

```sh
$ miny my-awesome-project
```

[![preview](https://github.com/pablopunk/art/raw/master/miny/preview.gif)](https://dr5mo5s7lqrtc.cloudfront.net/items/3L252b3Y3l3N1H1k3Y3y/miny.mp4)

You can also use de option `-y` to skip all the questions and use the defaults:

```sh
$ miny my-awesome-project -y
Creating package in my-awesome-project
warning The yes flag has been set. This will automatically answer yes to all questions which may have security implications.
(...)
```

### Features

#### Tests

*miny* provides [ava](https://github.com/avajs/ava) to test your code. By default you get a `test.js` with a test example, but you can use all features from *ava* ([check the docs](https://github.com/avajs/ava)). Running `npm test` will execute *ava* and other [code coverage tools](#code-coverage)

#### CI

If you activate [travis-ci](https://travis-ci.org/) for your project, it will automatically run tests for you in every push. The build status is shown by default on your `README.md` file.

#### Code coverage

With `npm run coverage` it will run all tests from *ava* and you'll get a report of what lines of code are covered by the tests, thanks to [nyc](https://github.com/istanbuljs/nyc) and [codecov](https://codecov.io/). This is very useful to catch some bugs and by default it shows the coverage percentage in your `README.md` after every push (just right after *travis* runs all tests).

#### Code style

Now *miny* comes with [xo](https://github.com/sindresorhus/xo) by default with some configs on `package.json`: no semicolons, and 2 spaces indentation. To customize this, check [the docs for xo](https://github.com/sindresorhus/xo).

#### Offline

Also, **_miny_ works offline**!


## Examples

* miny itself was created with miny. Yes.
* [nuup](https://github.com/pablopunk/nuup)
* [npm-name-exists](https://github.com/pablopunk/npm-name-exists)
* [prepend-url](https://github.com/pablopunk/prepend-url)
* [microfetch](https://github.com/pablopunk/microfetch)
* [football-matches](https://github.com/pablopunk/football-matches)
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

