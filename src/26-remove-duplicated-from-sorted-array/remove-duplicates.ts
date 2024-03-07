export function removeDuplicates(nums: number[]) {
  const unique: number[] = []

  for (let i = 0; i < nums.length; i++) {
    const currentValue = nums[i]

    if (!unique.includes(currentValue)) {
      unique.push(currentValue)
    }
  }

  for (let i = 0; i < unique.length; i++) {
    nums[i] = unique[i]
  }

  return {
    totalUnique: unique.length,
    nums,
  }
}
