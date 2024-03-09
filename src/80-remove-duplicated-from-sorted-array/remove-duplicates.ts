export function removeDuplicates(nums: number[]) {
  const totalItems = nums.length

  if (totalItems < 3) {
    return {
      total: totalItems,
      nums,
    }
  }

  let currIndex = 0
  let i = 1
  let sameValue = 1

  while (i < totalItems) {
    // If the current value is different from the previous one, reset the counter
    sameValue = nums[currIndex] !== nums[i] ? 1 : sameValue + 1

    if (sameValue <= 2) {
      nums[++currIndex] = nums[i]
    }

    i++
  }

  return {
    total: ++currIndex,
    nums,
  }
}
