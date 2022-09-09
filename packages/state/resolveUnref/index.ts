import { unref } from 'vue'

export function resolveUnref (r: any) {
  return typeof r === 'function'
    ? r()
    : unref(r)
}
