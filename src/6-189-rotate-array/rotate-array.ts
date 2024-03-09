/**
 Do not return anything, modify nums in-place instead.
 */
export function rotate(nums: number[], k: number): void {
  const len = nums.length
  const arr = [...nums]

  for (let step = 0; step < k; step++) {
    arr.unshift(arr.pop() as number)
  }

  for (let i = 0; i < len; i++) {
    nums[i] = arr[i]
  }
}
