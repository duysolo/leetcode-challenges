import {describe, it, expect, vitest} from 'vitest'
import {merge} from '../merge-sorted-array'
// import {merge as workingButNotAccepted} from '../merge-sorted-array.not-accepted'

handleTestCases(merge, 'Accepted')
// handleTestCases(workingButNotAccepted, 'Not Accepted')

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
