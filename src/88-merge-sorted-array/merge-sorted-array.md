# 88 - Merge Sorted Array

You are given two integer arrays `nums1` and `nums2`, sorted in non-decreasing order, and two integers `m` and `n`, representing the number of elements in `nums1` and `nums2` respectively.

Merge `nums1` and `nums2` into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array `nums1`. To accommodate this, `nums1` has a length of `m + n`, where the first `m` elements denote the elements that should be merged, and the last `n` elements are set to `0` and should be ignored. `nums2` has a length of `n`.

### Example 1:

- Input: `nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3`
- Output: `[1,2,2,3,5,6]`
- Explanation: The arrays we are merging are `[1,2,3]` and `[2,5,6]`.

The result of the merge is `[1,2,2,3,5,6]` with the underlined elements coming from `nums1`.

### Example 2:

- Input: `nums1 = [1], m = 1, nums2 = [], n = 0`
- Output: `[1]`
- Explanation: The arrays we are merging are `[1]` and `[]`.

The result of the merge is `[1]`.


### Example 3:

- Input: `nums1 = [0], m = 0, nums2 = [1], n = 1`
- Output: `[1]`
- Explanation: The arrays we are merging are `[]` and `[1]`.

The result of the merge is `[1]`.

Note that because `m = 0`, there are no elements in `nums1`. The `0` is only there to ensure the merge result can fit in `nums1`.
 

## Constraints:
```
- nums1.length == m + n
- nums2.length == n
- 0 <= m, n <= 200
- 1 <= m + n <= 200
- -109 <= nums1[i], nums2[j] <= 109
```

## About the solution
The idea behind merging from the end in the algorithm is crucial for an in-place merging without using additional space. 

Suppose you have two sorted arrays:

```typescript
nums1 = [1, 3, 5, 0, 0, 0]
nums2 = [2, 4, 6]
```

If you start merging from the beginning of `nums1`, you may face the following issues:

1. **Overwriting:**
   - Initially, `nums1` looks like `[1, 3, 5, _, _, _]`.
   - If you insert `6` at the front, `nums1` becomes `[6, 1, 3, 5, _, _,]`, and you lose the original value of `5`.
   - You cannot overwrite elements before they are merged, or you'll lose data.

2. **In-Place Merging:**
   - The problem statement often requires an in-place solution, meaning you can't create a new array.
   - If you start from the beginning, you might need to create a temporary array to store the original values of `nums1` before overwriting them.

3. **Efficiency:**
   - Starting from the beginning might require shifting elements in `nums1` to make space for the merged elements.
   - By starting from the end, you guarantee that the elements at the end of `nums1` won't be overwritten before they are merged.

Now, let's merge from the end:

```typescript
nums1 = [1, 3, 5, _, _, _]
nums2 = [2, 4, 6]
```

1. Start comparing the last elements of both arrays (`5` and `6`).
2. Insert the larger element (`6`) at the end of `nums1`.
3. Move to the next element in `nums2`.
4. Continue this process until you've merged all elements.

Final merged `nums1`:

```typescript
[1, 2, 3, 4, 5, 6]
```

By merging from the end, you avoid overwriting, achieve in-place merging, and improve efficiency. This approach ensures that you are safely overwriting elements in `nums1` without losing any information during the merging process.