
import { checkContainsSmallLetters } from '../../src'

describe('checkContainsSmallLetters', () => {
  it('Should return true when random string has at least one small letter', () => {
    const randomString = 'NpT'
    const containCapitalLetters = checkContainsSmallLetters(randomString)

    expect(containCapitalLetters).toBeTruthy()
  })

  it('Should return false when random string has no at least one small letter', () => {
    const randomString = 'HZF'
    const hasExactlyLength = checkContainsSmallLetters(randomString)

    expect(hasExactlyLength).toBeFalsy()
  })
})
