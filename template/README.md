# <%- name %>

<p align="center">
  <a href="https://travis-ci.org/<%- githubRepo.replace('https://github.com/', '') %>"><img src="https://img.shields.io/travis/<%- githubRepo.replace('https://github.com/', '') %>.svg" /> </a>
  <a href="https://codecov.io/gh/<%- githubRepo.replace('https://github.com/', '') %>"><img src="https://img.shields.io/codecov/c/github/<%- githubRepo.replace('https://github.com/', '') %>.svg" /> </a>
  <a href="https://standardjs.com"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" /> </a>
  <a href="https://github.com/pablopunk/miny"><img src="https://img.shields.io/badge/made_with-miny-1eced8.svg" /> </a>
  <a href="https://www.npmjs.com/package/<%- name %>"><img src="http://img.shields.io/npm/dt/<%- name %>.svg" /></a>
</p>

<p align="center">
  <i><%- description %></i>
</p>


## Install

```sh
npm install <%- name %>
```


## Usage

```js
const <%- name.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); }); %> = require('<%- name %>')
// use as you like
```


## License

MIT


## Author

| ![me](<%- authorImg %>)           |
| --------------------------------- |
| [<%- author %>](<%- website %>)   |

