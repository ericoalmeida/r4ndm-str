
import { checkContainsSymbols } from '../../src'

describe('checkContainsSymbols', () => {
  it('Should return true when random string has at least one symbol', () => {
    const randomString = 'fK!'
    const containCapitalLetters = checkContainsSymbols(randomString)

    expect(containCapitalLetters).toBeTruthy()
  })

  it('Should return false when random string has no at least one symbol', () => {
    const randomString = 'tlx'
    const hasExactlyLength = checkContainsSymbols(randomString)

    expect(hasExactlyLength).toBeFalsy()
  })
})
