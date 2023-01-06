import { common } from '../constants'

const checkContainsRequiredCharacterTypes = (value: String, characterTypes: string): boolean => {
  const valueCharactersList = value.split(common.emptyValue)
  const checkCapitalLetters = (character: string): boolean => characterTypes.includes(character)

  return valueCharactersList.some(checkCapitalLetters)
}

export { checkContainsRequiredCharacterTypes }
