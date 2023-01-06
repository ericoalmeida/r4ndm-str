import { characters } from '../constants'
import { checkContainsRequiredCharacterTypes } from './check-contains-required-character-types'

const checkContainsSimilarCharacters = (value: String): boolean => {
  const { similarCharacters } = characters

  return checkContainsRequiredCharacterTypes(value, similarCharacters)
}

export { checkContainsSimilarCharacters }
