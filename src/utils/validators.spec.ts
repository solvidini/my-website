import { email, length, required } from './validators'

describe('validators', () => {
  test('Test required fn', () => {
    expect(required('Abc')).toBeTruthy()
    expect(required('')).toBeFalsy()
    expect(required(' XD! ')).toBeTruthy()
  })

  test('Test length fn', () => {
    const testLength = length({ min: 3, max: 6 })
    expect(testLength('W')).toBeFalsy()
    expect(testLength('Super')).toBeTruthy()
    expect(testLength('Too much characters...')).toBeFalsy()
  })

  test('Test email fn', () => {
    expect(email('abcd@koko')).toBeFalsy()
    expect(email('abcd@koko.com')).toBeTruthy()
  })
})
