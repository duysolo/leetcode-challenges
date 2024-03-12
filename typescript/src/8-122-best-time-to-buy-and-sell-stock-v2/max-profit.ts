export function maxProfitV2(prices: number[]): number {
  const profit = [0]
  for (let i = 1; i < prices.length; i++) {
    profit[i] = profit[i - 1] + Math.max(prices[i] - prices[i - 1], 0)
  }
  return profit[prices.length - 1]
}
