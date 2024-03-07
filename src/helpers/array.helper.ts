export function isArrayEqual<T>(a: T[], b: T[]): boolean {
  if (a.length !== b.length) {
    return false
  }

  for (let i = 0; i < a.length; i++) {
    if (!b.includes(a[i])) {
      return false
    }
  }

  return true
}
