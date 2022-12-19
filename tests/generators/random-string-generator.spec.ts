import { RandomStringGenerator } from '../../src'
import { characters, common } from '../../src/constants'

describe('RandomStringGenerator', () => {
  it('Should generate a random string with correctly size with default options', () => {
    const sut = new RandomStringGenerator()

    const stringSize = 10
    const randomString = sut.generate(stringSize)

    expect(randomString.length).toBe(stringSize)
  })

  it('Should generate a random string with correctly size with custom options', () => {
    const sut = new RandomStringGenerator({
      useCapitalLetters: true,
      useSmallLetters: true,
      useNumbers: true,
      useSymbols: true,
      removeSimilarCharacters: true
    })

    const stringSize = 10
    const randomString = sut.generate(stringSize)

    expect(randomString.length).toBe(stringSize)
  })

  it('Should generate a random string using only capital letters', () => {
    const sut = new RandomStringGenerator({
      useCapitalLetters: true,
      useSmallLetters: false,
      useNumbers: false,
      useSymbols: false,
      removeSimilarCharacters: false
    })

    const stringSize = 10
    const randomString = sut.generate(stringSize)
    const randomStringAsCharacterList = randomString.split(common.emptyValue)

    const hasOnlyCapitalLetters = randomStringAsCharacterList.map(character => characters.capitalLetters.includes(character))

    expect(randomString.length).toBe(stringSize)

    expect(hasOnlyCapitalLetters).not.toContain(false)
  })

  it('Should generate a random string using only small letters', () => {
    const sut = new RandomStringGenerator({
      useCapitalLetters: false,
      useSmallLetters: true,
      useNumbers: false,
      useSymbols: false,
      removeSimilarCharacters: false
    })

    const stringSize = 10
    const randomString = sut.generate(stringSize)
    const randomStringAsCharacterList = randomString.split(common.emptyValue)

    const hasOnlySmallLetters = randomStringAsCharacterList.map((character) =>
      characters.smallLetters.includes(character)
    )

    expect(randomString.length).toBe(stringSize)

    expect(hasOnlySmallLetters).not.toContain(false)
  })

  it('Should generate a random string using only numbers', () => {
    const sut = new RandomStringGenerator({
      useCapitalLetters: false,
      useSmallLetters: false,
      useNumbers: true,
      useSymbols: false,
      removeSimilarCharacters: false
    })

    const stringSize = 10
    const randomString = sut.generate(stringSize)
    const randomStringAsCharacterList = randomString.split(common.emptyValue)

    const hasOnlyNumbers = randomStringAsCharacterList.map((character) =>
      characters.numbers.includes(character)
    )

    expect(randomString.length).toBe(stringSize)

    expect(hasOnlyNumbers).not.toContain(false)
  })

  it('Should generate a random string using only symbols', () => {
    const sut = new RandomStringGenerator({
      useCapitalLetters: false,
      useSmallLetters: false,
      useNumbers: false,
      useSymbols: true,
      removeSimilarCharacters: false
    })

    const stringSize = 10
    const randomString = sut.generate(stringSize)
    const randomStringAsCharacterList = randomString.split(common.emptyValue)

    const hasOnlySymbols = randomStringAsCharacterList.map((character) =>
      characters.symbols.includes(character)
    )

    expect(randomString.length).toBe(stringSize)

    expect(hasOnlySymbols).not.toContain(false)
  })

  it('Should generate a random string with no similar character', () => {
    const sut = new RandomStringGenerator({
      useCapitalLetters: false,
      useSmallLetters: false,
      useNumbers: true,
      useSymbols: false,
      removeSimilarCharacters: true
    })

    const stringSize = 10
    const randomString = sut.generate(stringSize)
    const randomStringAsCharacterList = randomString.split(common.emptyValue)

    const hasAllowedNumbers = randomStringAsCharacterList.map((character) =>
      characters.numbers.includes(character)
    )
    const hasNoSimilarCharacters = randomStringAsCharacterList.map((character) =>
      characters.similarCharacters.includes(character)
    )

    expect(randomString.length).toBe(stringSize)

    expect(hasAllowedNumbers).not.toContain(false)
    expect(hasNoSimilarCharacters).not.toContain(true)
  })
})
