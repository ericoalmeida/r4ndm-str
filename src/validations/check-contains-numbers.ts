import { characters } from '../constants'
import { checkContainsRequiredCharacterTypes } from './check-contains-required-character-types'

const checkContainsNumbers = (value: String): boolean => {
  const { numbers } = characters

  return checkContainsRequiredCharacterTypes(value, numbers)
}

export { checkContainsNumbers }
