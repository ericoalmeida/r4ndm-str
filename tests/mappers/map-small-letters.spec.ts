import { characters } from '@src/constants/characters'
import { mapSmallLetters } from '@src/mappers'

describe('mapSmallLetters', () => {
  it('Should map small letters correctly', () => {
    const chars = ''
    const useSmallLetters = true

    const expectedMappedChars = characters.smallLetters

    const mappedChars = mapSmallLetters(useSmallLetters, chars)

    expect(mappedChars).toBe(expectedMappedChars)
  })

  it('Should not map small letters if not use them', () => {
    const chars = ''
    const useSmallLetters = false

    const expectedMappedChars = chars

    const mappedChars = mapSmallLetters(useSmallLetters, chars)

    expect(mappedChars).toBe(expectedMappedChars)
  })
})
