/**
 Do not return anything, modify nums in-place instead.
 */
export function rotate(nums: number[], k: number): void {
  const len = nums.length
  const arr = [...nums]

  k = k <= len ? k : len

  for (let step = 0; step < k; step++) {
    arr.unshift(arr.pop() as number)
  }

  for (let i = 0; i < len; i++) {
    nums[i] = arr[i]
  }
}

export function rotateV2(nums: number[], k: number): void {
  const len = nums.length

  k = k <= len ? k : len

  /**
   * 1. We reverse the entire array. This effectively moves the last k elements to the front.
   * 2. After reversing, the first k elements in the array are the elements that should be at the end of the rotated array.
   * So, we reverse only the first k elements to bring them to their correct positions.
   * 3. Finally, we reverse the rest of the elements in the array after the first k elements.
   * This brings the remaining elements back to their correct positions after rotation.
   */
  reverse(nums, 0, len - 1)
  console.log('reverse first time', nums)
  reverse(nums, 0, k - 1)
  console.log('reverse second time', nums)
  reverse(nums, k, len - 1)
  console.log('reverse third time', nums)
}

function reverse(arr: number[], start: number, end: number): void {
  while (start < end) {
    ;[arr[start], arr[end]] = [arr[end], arr[start]]
    start++
    end--
  }
}
