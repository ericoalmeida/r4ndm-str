import { characters } from '@src/constants/characters'
import { common } from '@src/constants/common'

const mapSimilarCharacters = (
  excludeSimilarCharacters: boolean,
  mappedCharacters: string
): string => {
  if (excludeSimilarCharacters) {
    const similarCharacters = characters.similarCharacters.split(common.emptyValue)

    similarCharacters.forEach(character => {
      if (mappedCharacters.includes(character)) {
        mappedCharacters = mappedCharacters.replace(character, common.emptyValue)
      }
    })
  }

  return mappedCharacters
}

export { mapSimilarCharacters }
