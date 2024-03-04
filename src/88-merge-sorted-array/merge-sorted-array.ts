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
