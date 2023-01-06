import { characters } from '../constants'
import { checkContainsRequiredCharacterTypes } from './check-contains-required-character-types'

const checkContainsCapitalLetters = (value: String): boolean => {
  const { capitalLetters } = characters

  return checkContainsRequiredCharacterTypes(value, capitalLetters)
}

export { checkContainsCapitalLetters }
