import {describe, it, expect} from 'vitest'
import {removeElement} from '../remove-element.js'
import {isArrayEqual} from '../../helpers/array.helper.js'

describe('27 - Remove Element', async () => {
  it('test case 1', () => {
    const nums = [3, 2, 2, 3]
    const total = removeElement(nums, 3)

    expect(total).toEqual(2)
    expect(isArrayEqual(nums.slice(0, total), [2, 2])).toEqual(true)
  })

  it('test case 2', () => {
    const nums = [0, 1, 2, 2, 3, 0, 4, 2]
    const total = removeElement(nums, 2)

    expect(total).toEqual(5)
    expect(isArrayEqual(nums.slice(0, total), [0, 1, 4, 0, 3])).toEqual(true)
  })
})
