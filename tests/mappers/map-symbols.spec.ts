import { characters } from '@src/constants/characters'
import { mapSymbols } from '@src/mappers'

describe('mapNumbers', () => {
  it('Should map symbols correctly', () => {
    const chars = ''
    const useSymbols = true

    const expectedMappedChars = characters.symbols

    const mappedChars = mapSymbols(useSymbols, chars)

    expect(mappedChars).toBe(expectedMappedChars)
  })

  it('Should not map symbols if not use them', () => {
    const chars = ''
    const useSymbols = false

    const expectedMappedChars = chars

    const mappedChars = mapSymbols(useSymbols, chars)

    expect(mappedChars).toBe(expectedMappedChars)
  })
})
