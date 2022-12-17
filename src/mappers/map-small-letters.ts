import { characters } from '@src/constants'

const mapSmallLetters = (
  useSmallLetters: boolean,
  mappedCharacters: string
): string => {
  if (useSmallLetters) mappedCharacters += characters.smallLetters

  return mappedCharacters
}

export { mapSmallLetters }
