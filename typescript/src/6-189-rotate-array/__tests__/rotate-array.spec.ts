import {describe, expect, it} from 'vitest'
import {rotate, rotateV2} from '../rotate-array.js'

handleTestCases(rotate, 'Use temp array and copy back to original array')
handleTestCases(rotateV2, 'Reverse array')

function handleTestCases(func: typeof rotate, context: string) {
  describe(`189 - Rotate Array - ${context}`, async () => {
    it('test case 1', () => {
      const nums = [1, 2, 3, 4, 5, 6, 7]
      func(nums, 3)

      expect(JSON.stringify(nums)).toEqual(
        JSON.stringify([5, 6, 7, 1, 2, 3, 4])
      )
    })

    it('test case 2', () => {
      const nums = [-1, -100, 3, 99]
      func(nums, 2)

      expect(JSON.stringify(nums)).toEqual(JSON.stringify([3, 99, -1, -100]))
    })

    it('test case 3', () => {
      const nums = [1, 2, 3, 4, 5, 6, 7]
      func(nums, 9)

      expect(JSON.stringify(nums)).toEqual(
        JSON.stringify([1, 2, 3, 4, 5, 6, 7])
      )
    })
  })
}
