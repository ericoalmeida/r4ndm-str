import { characters } from '@src/constants/characters'
import { mapCapitalLetters } from '@src/mappers'

describe('mapCapitalLetters', () => {
  it('Should map capital letters correctly', () => {
    const chars = ''
    const useCapitalLetters = true

    const expectedMappedChars = characters.capitalLetters

    const mappedChars = mapCapitalLetters(useCapitalLetters, chars)

    expect(mappedChars).toBe(expectedMappedChars)
  })

  it('Should not map capital letters if not use them', () => {
    const chars = ''
    const useCapitalLetters = false

    const expectedMappedChars = chars

    const mappedChars = mapCapitalLetters(useCapitalLetters, chars)

    expect(mappedChars).toBe(expectedMappedChars)
  })
})
