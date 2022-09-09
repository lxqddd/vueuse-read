import { ComputedRef, Ref } from 'vue'

export type MaybeReadonlyRef<T> = (() => T) | ComputedRef

export type MaybeRef<T> = T | Ref<T>

export type MaybeComputedRef<T> = MaybeReadonlyRef<T> | MaybeRef<T>
