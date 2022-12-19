# R4ndm-Str

![GitHub package.json version](https://img.shields.io/github/package-json/v/ericoalmeida/r4ndm-str)
![npm](https://img.shields.io/npm/v/r4ndm-str)
![NPM](https://img.shields.io/npm/l/r4ndm-str?style=flat)
![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/ericoalmeida/r4ndm-str/deployment.yml?branch=main)
![GitHub top language](https://img.shields.io/github/languages/top/ericoalmeida/r4ndm-str)
![GitHub issues](https://img.shields.io/github/issues/ericoalmeida/r4ndm-str)

## Description

Library to provide a way to generate random strings using or not capital letters, small letters, numbers and symbols. It is also possible to remove the similar characters

- Capital letters: ```ABCDEFGHIJKLMNOPQRSTUVWXYZ```
- Small letters: ```abcdefghijklmnopqrstuvwxyz```
- Numbers: ```0123456789```
- Symbols: ```!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~```
- Similar characters: ```0126GIOSZgiosz`'```

## How to use

### Install

- Install with npm

```bash
npm i r4ndm-str
```

- or with yarn

```bash
yarn add r4ndm-str
```

#### Example

- See the code bellow for generate a password

```bash
const { RandomStringGenerator } = require('r4ndm-str')

const randomString = new RandomStringGenerator()

const size = 10

const password = randomString.generate(size)
console.info(password)
//printed console: QF:Qr\W(;M

```

### Settings

It is possible to pass some parameters to indicate what kind of characters will be used to generate a random string. Let's see!

- `useCapitalLetters`: Indicates if use capital letters
- `useSmallLetters`: Indicates if use small letters
- `useNumbers`: Indicates if use numbers
- `useSymbols`: Indicates if use Symbols
- `removeSimilarCharacters`: To avoid issues with similar characters, it's possible to remove them.

#### Examples

- See the code bellow for generate a password

```bash
const { RandomStringGenerator } = require('r4ndm-str')

const randomString = new RandomStringGenerator({
  useSmallLetters: false,
  useSymbols: false,
  removeSimilarCharacters: true
})

const size = 10

const password = randomString.generate(size)

console.info(password)
//printed console: 5H94BFQXE3
```
