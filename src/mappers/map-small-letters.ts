import { characters } from '../constants'

const mapSmallLetters = (
  useSmallLetters: boolean,
  mappedCharacters: string
): string => {
  if (useSmallLetters) mappedCharacters += characters.smallLetters

  return mappedCharacters
}

export { mapSmallLetters }
