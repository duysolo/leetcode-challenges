import {describe, it, expect} from 'vitest'
import {isArrayEqual} from '../../helpers/array.helper.js'
import {removeDuplicates} from '../remove-duplicates.js'

handleTestCases(removeDuplicates, 'removeDuplicates')

function handleTestCases(func: typeof removeDuplicates, context: string) {
  describe(`80 - Remove Duplicates from Sorted Array V2 - ${context}`, async () => {
    it('test case 1', () => {
      const nums = [1, 1, 1, 2, 2, 3]
      const total = func(nums)

      expect(total).toEqual(5)
      expect(isArrayEqual(nums.slice(0, total), [1, 1, 2, 2, 3])).toEqual(true)
    })

    it('test case 2', () => {
      const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
      const total = func(nums)

      expect(total).toEqual(9)
      expect(
        isArrayEqual(nums.slice(0, total), [0, 0, 1, 1, 2, 2, 3, 3, 4])
      ).toEqual(true)
    })

    it('test case 3', () => {
      const nums = [-1, 0, 0, 0, 0, 3, 3]
      const total = func(nums)

      expect(total).toEqual(5)
      expect(isArrayEqual(nums.slice(0, total), [-1, 0, 0, 3, 3])).toEqual(true)
    })

    it('test case 4', () => {
      const nums = [1]
      const total = func(nums)

      expect(total).toEqual(1)
      expect(isArrayEqual(nums, [1])).toEqual(true)
    })

    it('test case 5', () => {
      const nums = [1, 2, 2]
      const total = func(nums)

      expect(total).toEqual(3)
      expect(isArrayEqual(nums, [1, 2, 2])).toEqual(true)
    })

    it('test case 6', () => {
      const nums = [1, 1, 1, 1, 1, 2, 2, 3]
      const total = func(nums)

      expect(total).toEqual(5)
      expect(isArrayEqual(nums.slice(0, total), [1, 1, 2, 2, 3])).toEqual(true)
    })

    it('test case 7', () => {
      const nums = [0, 0, 1, 1, 1, 1, 2, 3, 3]
      const total = func(nums)

      expect(total).toEqual(7)
      expect(isArrayEqual(nums.slice(0, total), [0, 0, 1, 1, 2, 3, 3])).toEqual(
        true
      )
    })
  })
}
