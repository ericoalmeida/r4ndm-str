import { characters } from '@src/constants/characters'

const mapCapitalLetters = (
  useCapitalLetters: boolean,
  mappedCharacters: string
): string => {
  if (useCapitalLetters) mappedCharacters += characters.capitalLetters

  return mappedCharacters
}

export { mapCapitalLetters }
