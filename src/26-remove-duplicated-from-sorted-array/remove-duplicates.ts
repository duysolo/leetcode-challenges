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

export function removeDuplicates2(nums: number[]) {
  let i = 0
  let k = i + 1
  const j = nums.length

  while (i < j && k < j) {
    if (nums[i] === nums[k]) {
      k++
    } else {
      i++
      nums[i] = nums[k]
    }
  }

  return {
    totalUnique: i + 1,
    nums,
  }
}
