import {describe, it, expect, vitest} from 'vitest'
import {merge, merge2, merge3} from '../merge-sorted-array.js'

handleTestCases(merge, 'Accepted - merge')
handleTestCases(merge2, 'Accepted - merge2')
handleTestCases(merge3, 'Accepted - merge3')

function handleTestCases(func: typeof merge, context: string) {
  describe(`88 - Merge Sorted Array - ${context}`, async () => {
    it('test case 1', () => {
      const spy = vitest.spyOn(console, 'log')

      func([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)

      expect(spy).toHaveBeenCalledWith([1, 2, 2, 3, 5, 6])
    })

    it('test case 2', () => {
      const spy = vitest.spyOn(console, 'log')

      func([1], 1, [], 0)

      expect(spy).toHaveBeenCalledWith([1])
    })

    it('test case 3', () => {
      const spy = vitest.spyOn(console, 'log')

      func([0], 0, [1], 1)

      expect(spy).toHaveBeenCalledWith([1])
    })
  })
}
