import { effectScope } from 'vue'
export type CreateGlobalStateReturn<T> = () => T

export function useCreateGlobalState<T> (stateFactory: () => T): CreateGlobalStateReturn<T> {
  let initialized = false
  let state: T
  const scoped = effectScope(true)

  return () => {
    if (!initialized) {
      state = scoped.run(stateFactory) as T
      initialized = true
    }
    return state
  }
}
