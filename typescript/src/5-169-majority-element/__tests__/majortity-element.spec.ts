import {describe, expect, it} from 'vitest'
import {majorityElement, majorityElementV2} from '../majortity-element.js'

handleTestCases(majorityElement, 'JS Map Algorithm')
handleTestCases(majorityElementV2, 'Moore Voting Algorithm')

function handleTestCases(func: typeof majorityElement, context: string) {
  describe(`169 - Majority Element - ${context}`, async () => {
    it('test case 1', () => {
      const total = func([3, 2, 3])

      expect(total).toEqual(3)
    })

    it('test case 2', () => {
      const total = func([2, 2, 1, 1, 1, 2, 2])

      expect(total).toEqual(2)
    })
  })
}
