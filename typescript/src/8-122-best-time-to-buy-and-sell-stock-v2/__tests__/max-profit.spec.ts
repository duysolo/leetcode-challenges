import {describe, expect, it} from 'vitest'
import {maxProfit, maxProfit2} from '../max-profit.js'
import {veryLongArr} from './very-long-arr.js'

handleTestCases(maxProfit, 'Dynamic Programming Approach')
handleTestCases(maxProfit2, 'Dynamic Programming Approach v2')

function handleTestCases(func: typeof maxProfit, context: string) {
  describe(`122 - Best Time to Buy and Sell stock - ${context}`, async () => {
    it('test case 1', () => {
      const res = func([7, 1, 5, 3, 6, 4])

      expect(res).toEqual(7)
    })

    it('test case 2', () => {
      const res = func([1, 2, 3, 4, 5])

      expect(res).toEqual(4)
    })

    it('test case 3', () => {
      const res = func([7, 6, 4, 3, 1])

      expect(res).toEqual(0)
    })

    it('test case 4 - very long array', () => {
      const res = func(veryLongArr)

      expect(res).toBeGreaterThan(-1)
    })
  })
}
