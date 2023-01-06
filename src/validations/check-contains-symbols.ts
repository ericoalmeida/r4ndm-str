import { characters } from '../constants'
import { checkContainsRequiredCharacterTypes } from './check-contains-required-character-types'

const checkContainsSymbols = (value: String): boolean => {
  const { symbols } = characters

  return checkContainsRequiredCharacterTypes(value, symbols)
}

export { checkContainsSymbols }
