export function removeElement(nums: number[], val: number): number {
  let total = 0

  for (let i = 0; i < nums.length; i++) {
    const currentValue = nums[i]

    if (currentValue !== val) {
      nums[total] = currentValue
      total++
    }
  }

  return total
}
