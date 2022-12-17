import { characters } from '@src/constants/characters'

const mapNumbers = (
  useNumbers: boolean,
  mappedCharacters: string
): string => {
  if (useNumbers) mappedCharacters += characters.numbers

  return mappedCharacters
}

export { mapNumbers }
