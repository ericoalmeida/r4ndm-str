
import { checkContainsNumbers } from '../../src'

describe('checkContainsNumbers', () => {
  it('Should return true when random string has at least one number', () => {
    const randomString = '265'
    const containCapitalLetters = checkContainsNumbers(randomString)

    expect(containCapitalLetters).toBeTruthy()
  })

  it('Should return false when random string has no at least one number', () => {
    const randomString = 'TjC'
    const hasExactlyLength = checkContainsNumbers(randomString)

    expect(hasExactlyLength).toBeFalsy()
  })
})
