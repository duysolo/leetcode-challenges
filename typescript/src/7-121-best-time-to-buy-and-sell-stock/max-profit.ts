/**
 * This solution is O(n^2 - 1) because of the nested for loop.
 */
export function maxProfit(prices: number[]): number {
  let maxProfit = 0

  // const currentProfit: {buy: number; sell: number} = {buy: 0, sell: 0}

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] - prices[i] > maxProfit) {
        maxProfit = prices[j] - prices[i]
        // currentProfit.buy = i
        // currentProfit.sell = j
      }
    }
  }

  return maxProfit
}

/**
 * This function uses a greedy algorithm approach, where it keeps track of the buy day, sell day, and maximum profit seen so far.
 * It runs in O(n) time, where n is the number of prices, as it makes a single pass over the data.
 *
 * Here's a step-by-step explanation:
 * The function takes an array of numbers prices as input, where each number represents the price of the stock on a particular day.
 * Three variables are initialized: buy, sell, and maxProfit. buy and sell are set to 0 and 1 respectively, representing the indices of the buy and sell days.
 * maxProfit is set to 0 and represents the maximum profit that can be made.
 * The function then enters a while loop that continues as long as sell is less than the length of the prices array.
 * Inside the loop, it first checks if the price on the buy day is less than the price on the sell day.
 * If it is, it calculates the profit that can be made by buying on the buy day and selling on the sell day, and updates maxProfit to the maximum of the current maxProfit and the calculated profit.
 * If the price on the buy day is not less than the price on the sell day, it sets buy to sell, effectively moving the buy day to the sell day.
 * The sell day is then incremented, moving to the next day.
 * Finally, after the loop finishes, the function returns maxProfit, which represents the maximum profit that could be made by buying and selling a single share of the stock.
 */
export function maxProfitV2(prices: number[]): number {
  let buy = 0
  let sell = 1
  let maxProfit = 0

  while (sell < prices.length) {
    if (prices[buy] < prices[sell]) {
      const profit = prices[sell] - prices[buy]
      maxProfit = profit > maxProfit ? profit : maxProfit
    } else {
      buy = sell
    }

    sell++
  }

  return maxProfit
}

/**
 * This function uses a greedy algorithm approach, where it keeps track of the minimum price and maximum profit seen so far.
 * It runs in O(n) time, where n is the number of prices, as it makes a single pass over the data.
 *
 * Here's a step-by-step explanation:
 * The function takes an array of numbers prices as input, where each number represents the price of the stock on a particular day.
 * Two variables are initialized: minPrice and maxProfit. minPrice is set to undefined initially and represents the minimum price seen so far.
 * maxProfit is set to 0 and represents the maximum profit that can be made.
 * The function then iterates over each price in the prices array using forEach.
 * For each price item, it first checks if minPrice is undefined.
 * If it is, it sets minPrice to the current price item. This happens only for the first price in the array.
 * Then, it checks if the current price item is less than minPrice.
 * If it is, it updates minPrice to the current price item. This ensures that minPrice always holds the minimum price seen so far.
 * Next, it checks if the profit that can be made by selling at the current price item (which is item - minPrice) is greater than the current maxProfit.
 * If it is, it updates maxProfit to the new profit. This ensures that maxProfit always holds the maximum profit that can be made.
 * Finally, after iterating over all prices, the function returns maxProfit, which represents the maximum profit that could be made by buying and selling a single share of the stock.
 */
export function maxProfitV3(prices: number[]): number {
  let minPrice: number | undefined
  let maxProfit = 0

  prices.forEach(item => {
    if (minPrice === undefined) {
      minPrice = item
    }

    if (item < minPrice) {
      minPrice = item
    }

    if (item - minPrice > maxProfit) {
      maxProfit = item - minPrice
    }
  })

  return maxProfit
}
