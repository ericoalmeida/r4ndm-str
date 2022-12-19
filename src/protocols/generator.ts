interface Options {
  useCapitalLetters?: boolean
  useSmallLetters?: boolean
  useNumbers?: boolean
  useSymbols?: boolean
  removeSimilarCharacters?: boolean
}

interface Generator {
  generate: (size: number) => string
}

export { Generator, Options }
