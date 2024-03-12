import {describe, expect, it} from 'vitest'
import {maxProfit, maxProfitV2, maxProfitV3} from '../max-profit.js'
import {veryLongArr} from './very-long-arr.js'

handleTestCases(maxProfit, 'Use 2 arrays loop')
handleTestCases(maxProfitV2, 'Use 2 pointers')
handleTestCases(maxProfitV3, 'Use 1 pointer and 1 variable to store min price')

function handleTestCases(func: typeof maxProfit, context: string) {
  describe(`121 - Best Time to Buy and Sell stock - ${context}`, async () => {
    it('test case 1', () => {
      const res = func([7, 1, 5, 3, 6, 4])

      expect(res).toEqual(5)
    })

    it('test case 2 - very long array', () => {
      const res = func(veryLongArr)

      expect(res).toEqual(999)
    })
  })
}
