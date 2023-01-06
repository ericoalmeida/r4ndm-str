import { faker } from '@faker-js/faker'

import { checkMinimumLength } from '../../src'

describe('checkMinimumLength', () => {
  it('Should return true when random string has a minimum length', () => {
    const minimumLength = 6

    const randomString = faker.datatype.string(minimumLength)
    const hasMinimumLength = checkMinimumLength(minimumLength, randomString)

    expect(hasMinimumLength).toBeTruthy()
  })

  it('Should return false when random string has no a minimum length', () => {
    const minimumLength = 6
    const invalidMinimumLength = 3

    const randomString = faker.datatype.string(invalidMinimumLength)
    const hasMinimumLength = checkMinimumLength(minimumLength, randomString)

    expect(hasMinimumLength).toBeFalsy()
  })
})
