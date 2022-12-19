import { common } from '../constants'
import {
  mapCapitalLetters,
  mapNumbers,
  mapSimilarCharacters,
  mapSmallLetters,
  mapSymbols
} from '../mappers'
import { Generator, Options } from '../protocols'

class RandomStringGenerator implements Generator {
  private readonly useCapitalLetters: boolean
  private readonly useSmallLetters: boolean
  private readonly useNumbers: boolean
  private readonly useSymbols: boolean
  private readonly removeSimilarCharacters: boolean

  constructor (options?: Options) {
    this.useCapitalLetters = options?.useCapitalLetters ?? true
    this.useSmallLetters = options?.useSmallLetters ?? true
    this.useNumbers = options?.useNumbers ?? true
    this.useSymbols = options?.useSymbols ?? true
    this.removeSimilarCharacters = options?.removeSimilarCharacters ?? true
  }

  private mapAllowedCharacters (): string {
    let mappedChars = common.emptyValue

    mappedChars = mapCapitalLetters(this.useCapitalLetters, mappedChars)
    mappedChars = mapSmallLetters(this.useSmallLetters, mappedChars)
    mappedChars = mapNumbers(this.useNumbers, mappedChars)
    mappedChars = mapSymbols(this.useSymbols, mappedChars)
    mappedChars = mapSimilarCharacters(
      this.removeSimilarCharacters,
      mappedChars
    )

    return mappedChars
  }

  public generate (size: number): string {
    const allowedCharacters = this.mapAllowedCharacters()

    let randomString = common.emptyValue

    for (let index = 0; index < size; index++) {
      randomString += allowedCharacters.charAt(
        Math.floor(Math.random() * allowedCharacters.length)
      )
    }

    return randomString
  }
}

export { RandomStringGenerator }
