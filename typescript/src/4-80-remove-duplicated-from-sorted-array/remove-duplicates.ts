export function removeDuplicates(nums: number[]): number {
  const totalItems = nums.length

  if (totalItems < 3) {
    return totalItems
  }

  let validIndex = 0

  let sameValue = 1

  let counter = 1

  while (counter < totalItems) {
    sameValue = nums[counter] === nums[counter - 1] ? sameValue + 1 : 1

    if (sameValue <= 2) {
      validIndex++

      nums[validIndex] = nums[counter]
    }

    counter++
  }

  return validIndex + 1
}
