import { characters } from '@src/constants'
import { mapNumbers } from '@src/mappers'

describe('mapNumbers', () => {
  it('Should map numbers correctly', () => {
    const chars = ''
    const useNumbers = true

    const expectedMappedChars = characters.numbers

    const mappedChars = mapNumbers(useNumbers, chars)

    expect(mappedChars).toBe(expectedMappedChars)
  })

  it('Should not map numbers if not use them', () => {
    const chars = ''
    const useNumbers = false

    const expectedMappedChars = chars

    const mappedChars = mapNumbers(useNumbers, chars)

    expect(mappedChars).toBe(expectedMappedChars)
  })
})
