import { characters } from '@src/constants/characters'
import { common } from '@src/constants/common'
import { mapSimilarCharacters } from '@src/mappers'

describe('mapSimilarCharacters', () => {
  it('Should exclude all similar characters correctly', () => {
    const chars = characters.similarCharacters
    const excludeSimilarCharacters = true

    const expectedMappedChars = common.emptyValue

    const mappedChars = mapSimilarCharacters(excludeSimilarCharacters, chars)

    expect(mappedChars).toBe(expectedMappedChars)
  })

  it('Should not exclude none similar character if use them', () => {
    const chars = characters.similarCharacters
    const excludeSimilarCharacters = false

    const expectedMappedChars = chars

    const mappedChars = mapSimilarCharacters(excludeSimilarCharacters, chars)

    expect(mappedChars).toBe(expectedMappedChars)
  })
})
