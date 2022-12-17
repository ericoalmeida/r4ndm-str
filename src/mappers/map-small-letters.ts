import { characters } from '@src/constants/characters'

const mapSmallLetters = (
  useSmallLetters: boolean,
  mappedCharacters: string
): string => {
  if (useSmallLetters) mappedCharacters += characters.smallLetters

  return mappedCharacters
}

export { mapSmallLetters }
