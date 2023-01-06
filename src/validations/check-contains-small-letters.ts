import { characters } from '../constants'
import { checkContainsRequiredCharacterTypes } from './check-contains-required-character-types'

const checkContainsSmallLetters = (value: String): boolean => {
  const { smallLetters } = characters

  return checkContainsRequiredCharacterTypes(value, smallLetters)
}

export { checkContainsSmallLetters }
