
import { checkContainsCapitalLetters } from '../../src'

describe('checkContainsCapitalLetters', () => {
  it('Should return true when random string has at least one capital letters', () => {
    const randomString = 'tAy'
    const containCapitalLetters = checkContainsCapitalLetters(randomString)

    expect(containCapitalLetters).toBeTruthy()
  })

  it('Should return false when random string has no at least one capital letters', () => {
    const randomString = 'tlx'
    const hasExactlyLength = checkContainsCapitalLetters(randomString)

    expect(hasExactlyLength).toBeFalsy()
  })
})
