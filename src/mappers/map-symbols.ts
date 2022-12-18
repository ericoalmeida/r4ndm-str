import { characters } from '../constants'

const mapSymbols = (
  useSymbols: boolean,
  mappedCharacters: string
): string => {
  if (useSymbols) mappedCharacters += characters.symbols

  return mappedCharacters
}

export { mapSymbols }
