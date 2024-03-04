import {describe, it, expect} from 'vitest'
import {removeElement} from '../remove-element.js'

describe('27 - Remove Element', async () => {
  it('test case 1', () => {
    const {total, nums} = removeElement([3, 2, 2, 3], 3)

    expect(total).toEqual(2)
    expect(isArrayEqual(nums.slice(0, total), [2, 2])).toEqual(true)
  })

  it('test case 2', () => {
    const {total, nums} = removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)

    expect(total).toEqual(5)
    expect(isArrayEqual(nums.slice(0, total), [0, 1, 4, 0, 3])).toEqual(true)
  })
})

function isArrayEqual<T>(a: T[], b: T[]): boolean {
  if (a.length !== b.length) {
    return false
  }

  for (let i = 0; i < a.length; i++) {
    if (!b.includes(a[i])) {
      return false
    }
  }

  return true
}
