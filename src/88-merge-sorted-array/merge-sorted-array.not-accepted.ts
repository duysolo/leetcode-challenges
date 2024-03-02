export function merge(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): void {
  const myNumbs1 = detachArr(nums1, m)
  const myNumbs2 = detachArr(nums2, n)

  nums1 = [...myNumbs1, ...myNumbs2].sort((a, b) => a - b)

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
