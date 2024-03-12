import {describe, it, expect} from 'vitest'
import {merge, merge2, merge3} from '../merge-sorted-array.js'
import {isArrayEqual} from '../../helpers/array.helper.js'

handleTestCases(merge, 'Accepted - merge')
handleTestCases(merge2, 'Accepted - merge2')
handleTestCases(merge3, 'Accepted - merge3')

function handleTestCases(func: typeof merge, context: string) {
  describe(`88 - Merge Sorted Array - ${context}`, async () => {
    it('test case 1', () => {
      const nums1 = [1, 2, 3, 0, 0, 0]
      func(nums1, 3, [2, 5, 6], 3)

      expect(isArrayEqual(nums1.splice(0, 6), [1, 2, 2, 3, 5, 6])).toEqual(true)
    })

    it('test case 2', () => {
      const nums1 = [1]
      func(nums1, 1, [], 0)

      expect(isArrayEqual(nums1, [1])).toEqual(true)
    })

    it('test case 3', () => {
      const nums1 = [0]
      func(nums1, 0, [1], 1)

      expect(isArrayEqual(nums1, [1])).toEqual(true)
    })
  })
}
