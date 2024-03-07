import {describe, it, expect} from 'vitest'
import {isArrayEqual} from '../../helpers/array.helper.js'
import {removeDuplicates} from '../remove-duplicates.js'

describe('26 - Remove Duplicates from Sorted Array', async () => {
  it('test case 1', () => {
    const {totalUnique, nums} = removeDuplicates([1, 1, 2])

    expect(totalUnique).toEqual(2)
    expect(isArrayEqual(nums.slice(0, totalUnique), [1, 2])).toEqual(true)
  })

  it('test case 2', () => {
    const {totalUnique, nums} = removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])

    expect(totalUnique).toEqual(5)
    expect(isArrayEqual(nums.slice(0, totalUnique), [0, 1, 2, 3, 4])).toEqual(
      true
    )
  })

  it('test case 3', () => {
    const {totalUnique, nums} = removeDuplicates([-1, 0, 0, 0, 0, 3, 3])

    expect(totalUnique).toEqual(3)
    expect(isArrayEqual(nums.slice(0, totalUnique), [-1, 0, 3])).toEqual(true)
  })
})
