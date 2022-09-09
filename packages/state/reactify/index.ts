import { MaybeComputedRef, MaybeRef } from 'packages/utils/types'
import { computed, ComputedRef, ref, unref } from 'vue'
import { resolveUnref } from '../resolveUnref'

export type Reactified<T, Computed extends boolean> = T extends (...args: infer A) => infer R
  ? (...args: { [K in keyof A]: Computed extends true ? MaybeComputedRef<A[K]> : MaybeRef<A[K]> }) => ComputedRef<R>
  : never

export interface ReactifyOptions<T extends boolean> {
  computedGetter?: T
}

export function useReactify<T extends Function, K extends boolean = true> (fn: T, options?: ReactifyOptions<K>): Reactified<T, K> {
  const unrefFn = options?.computedGetter === false ? unref : resolveUnref

  return function (this: any, ...args: any[]) {
    return computed(() => fn.apply(this, args.map(i => unrefFn(i))))
  } as any
}

const stringify = useReactify(JSON.stringify)

const obj = ref({ name: 'xy' })

const ret = stringify(obj)

obj.value.name = 'hello'

console.log(ret.value)
