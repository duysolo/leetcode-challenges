/**
 * Hàm nhận một mảng các số nguyên prices làm đầu vào, trong đó mỗi số đại diện cho giá của cổ phiếu vào một ngày cụ thể.
 * Một mảng profit được khởi tạo với một phần tử duy nhất là 0. Mảng này sẽ lưu trữ lợi nhuận tối đa có thể đạt được đến mỗi ngày.
 * Hàm sau đó bắt đầu một vòng lặp for từ ngày thứ hai (chỉ số 1) và tiếp tục cho đến ngày cuối cùng.
 * Bên trong vòng lặp, nó tính toán lợi nhuận cho ngày hiện tại i như lợi nhuận của ngày trước cộng với giá trị lớn nhất của hiệu giá giữa ngày hiện tại và ngày trước đó và 0.
 * Điều này hiệu quả thêm lợi nhuận của ngày hiện tại vào tổng lợi nhuận nếu giá trên ngày hiện tại cao hơn giá trên ngày trước đó.
 * Sau khi vòng lặp kết thúc, hàm trả về phần tử cuối cùng của mảng lợi nhuận, đại diện cho lợi nhuận tối đa có thể đạt được vào cuối ngày cuối cùng.
 * Hàm này sử dụng phương pháp lập trình động, trong đó nó tính toán lợi nhuận tối đa cho mỗi ngày dựa trên lợi nhuận tối đa của ngày trước đó và lợi nhuận có thể đạt được vào ngày hiện tại.
 * Hàm chạy trong thời gian O(n), trong đó n là số lượng giá cổ phiếu, vì nó chỉ đi qua dữ liệu một lần.
 */
export function maxProfit(prices: number[]): number {
  const profit = [0]

  const days = prices.length

  for (let i = 1; i < days; i++) {
    const priceI = prices[i]
    const priceIMinus1 = prices[i - 1]
    profit[i] = profit[i - 1] + Math.max(priceI - priceIMinus1, 0)
  }

  return profit[days - 1] // get the largest profit
}

/**
 * The profit is the sum of sub-profits. Each sub-profit is the difference between selling at day j, and buying at day i (with j > i). 
 * The range [i, j] should be chosen so that the sub-profit is maximum:
 * sub-profit = prices[j] - prices[i]
 * We should choose j that prices[j] is as big as possible, and choose i that prices[i] is as small as possible (of course in their local range).
 * Let's say, we have a range [3, 2, 5], we will choose (2,5) instead of (3,5), because 2<3.
 * Now, if we add 8 into this range: [3, 2, 5, 8], we will choose (2, 8) instead of (2,5) because 8>5.
 * From this observation, from day X, the buying day will be the last continuous day that the price is smallest. 
 * Then, the selling day will be the last continuous day that the price is biggest.
 * Take another range [3, 2, 5, 8, 1, 9], though 1 is the smallest, but 2 is chosen, because 2 is the smallest in a consecutive decreasing prices starting from 3.
 * Similarly, 9 is the biggest, but 8 is chosen, because 8 is the biggest in a consecutive increasing prices starting from 2 (the buying price).
 * Actually, the range [3, 2, 5, 8, 1, 9] will be splitted into 2 sub-ranges [3, 2, 5, 8] and [1, 9].

We come up with the following code:
 */
export function maxProfit2(prices: number[]): number {
  let i = 0
  let profit = 0
  const n = prices.length - 1
  let buy, sell

  while (i < n) {
    while (i < n && prices[i + 1] <= prices[i]) {
      i++
    }

    buy = prices[i]

    while (i < n && prices[i + 1] > prices[i]) {
      i++
    }

    sell = prices[i]

    profit += sell - buy
  }

  return profit
}
