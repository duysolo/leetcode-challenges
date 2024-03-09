import {describe, it, expect} from 'vitest'
import {isArrayEqual} from '../../helpers/array.helper.js'
import {removeDuplicates, removeDuplicates2} from '../remove-duplicates.js'

handleTestCases(removeDuplicates, 'removeDuplicates')
handleTestCases(removeDuplicates2, 'removeDuplicates2')

function handleTestCases(func: typeof removeDuplicates, context: string) {
  describe(`26 - Remove Duplicates from Sorted Array - ${context}`, async () => {
    it('test case 1', () => {
      const nums = [1, 1, 2]
      const totalUnique = func(nums)

      expect(totalUnique).toEqual(2)
      expect(isArrayEqual(nums.slice(0, totalUnique), [1, 2])).toEqual(true)
    })

    it('test case 2', () => {
      const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
      const totalUnique = func(nums)

      expect(totalUnique).toEqual(5)
      expect(isArrayEqual(nums.slice(0, totalUnique), [0, 1, 2, 3, 4])).toEqual(
        true
      )
    })

    it('test case 3', () => {
      const nums = [-1, 0, 0, 0, 0, 3, 3]
      const totalUnique = func(nums)

      expect(totalUnique).toEqual(3)
      expect(isArrayEqual(nums.slice(0, totalUnique), [-1, 0, 3])).toEqual(true)
    })
  })
}
