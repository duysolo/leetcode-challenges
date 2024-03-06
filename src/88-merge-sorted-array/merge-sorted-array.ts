export function merge(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): void {
  if (m < 0 || n < 0 || m + n <= 0) {
    throw new Error('Invalid input: Both arrays must be non-empty')
  }

  let lastElementIndex1 = m - 1
  let lastElementIndex2 = n - 1
  let lastElementIndexInResult = m + n - 1

  while (lastElementIndex2 >= 0) {
    const lastElementValue1 = nums1[lastElementIndex1]
    const lastElementValue2 = nums2[lastElementIndex2]

    if (lastElementIndex1 >= 0 && lastElementValue1 > lastElementValue2) {
      nums1[lastElementIndexInResult] = lastElementValue1
      lastElementIndex1--
    } else {
      nums1[lastElementIndexInResult] = lastElementValue2
      lastElementIndex2--
    }

    lastElementIndexInResult--
  }

  if (nums1.length > m + n) {
    throw new Error(
      `Invalid input: nums1.length must be equal to ${m + n} after merging the arrays`
    )
  }

  console.log(nums1)
}

/**
 Do not return anything, modify nums1 in-place instead.
 */
export function merge2(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): void {
  let index1 = 0
  let index2 = 0
  const mergedArray: number[] = []

  while (index1 < m && index2 < n) {
    const value1 = nums1[index1]
    const value2 = nums2[index2]

    if (value1 < value2) {
      mergedArray.push(value1)
      index1++
    } else {
      mergedArray.push(value2)
      index2++
    }
  }

  // Append remaining elements from nums1
  while (index1 < m) {
    mergedArray.push(nums1[index1])
    index1++
  }

  // Append remaining elements from nums2
  while (index2 < n) {
    mergedArray.push(nums2[index2])
    index2++
  }

  // Copy mergedArray back to nums1
  for (let i = 0; i < m + n; i++) {
    nums1[i] = mergedArray[i]
  }

  console.log(nums1)
}

export function merge3(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): void {
  const myNumbs1 = detachArr(nums1, m)
  const myNumbs2 = detachArr(nums2, n)

  const mergedArray = [...myNumbs1, ...myNumbs2].sort((a, b) => a - b)

  for (let i = 0; i < m + n; i++) {
    nums1[i] = mergedArray[i]
  }

  console.log(nums1)
}

function detachArr(nums: number[], totalItemsToGet: number): number[] {
  const items = []

  for (const i of nums) {
    if (items.length >= totalItemsToGet) {
      break
    }

    items.push(i)
  }

  return items
}
