export function merge(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): void {
  let lastElementIndex1 = m - 1
  let lastElementIndex2 = n - 1
  let lastElementIndexInResult = m + n - 1

  while (lastElementIndex2 >= 0) {
    const lastElementValue1 = nums1[lastElementIndex1]
    const lastElementValue2 = nums2[lastElementIndex2]

    if (lastElementIndex1 >= 0 && lastElementValue1 > lastElementValue2) {
      nums1[lastElementIndexInResult--] = nums1[lastElementIndex1--]
    } else {
      nums1[lastElementIndexInResult--] = nums2[lastElementIndex2--]
    }
  }

  console.log(nums1)
}
