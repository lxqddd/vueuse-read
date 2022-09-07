import { expect, it, describe } from 'vitest'
import { sum } from './index'

describe('test sum', () => {
  it('should return 2', () => {
    expect(sum(1, 1)).toBe(2)
  })
})
