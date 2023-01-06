import { faker } from '@faker-js/faker'

import { checkExactlyLength } from '../../src'

describe('checkExactlyLength', () => {
  it('Should return true when random string has a minimum length', () => {
    const expectedLength = 6

    const randomString = faker.datatype.string(expectedLength)
    const hasExactlyLength = checkExactlyLength(expectedLength, randomString)

    expect(hasExactlyLength).toBeTruthy()
  })

  it('Should return false when random string length is less than expected length', () => {
    const expectedLength = 6
    const invalidMinimumLength = 3

    const randomString = faker.datatype.string(invalidMinimumLength)
    const hasExactlyLength = checkExactlyLength(expectedLength, randomString)

    expect(hasExactlyLength).toBeFalsy()
  })

  it('Should return false when random string length is greater than expected length', () => {
    const expectedLength = 6
    const invalidMinimumLength = 9

    const randomString = faker.datatype.string(invalidMinimumLength)
    const hasExactlyLength = checkExactlyLength(expectedLength, randomString)

    expect(hasExactlyLength).toBeFalsy()
  })
})
