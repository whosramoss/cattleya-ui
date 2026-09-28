import type { MutableRefObject, Ref } from 'react'

export function composeRefs<T>(...refs: Array<Ref<T> | undefined>) {
  return (node: T) => {
    for (const ref of refs) {
      if (!ref) continue

      if (typeof ref === 'function') {
        ref(node)
        continue
      }

      (ref as MutableRefObject<T>).current = node
    }
  }
}
