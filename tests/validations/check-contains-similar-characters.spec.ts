
import { checkContainsSimilarCharacters } from '../../src'

describe('checkContainsSimilarCharacters', () => {
  it('Should return true when random string has at least one similar character', () => {
    const randomString = 'NpO'
    const containCapitalLetters = checkContainsSimilarCharacters(randomString)

    expect(containCapitalLetters).toBeTruthy()
  })

  it('Should return false when random string has no at least one similar character', () => {
    const randomString = 'HaF'
    const hasExactlyLength = checkContainsSimilarCharacters(randomString)

    expect(hasExactlyLength).toBeFalsy()
  })
})
