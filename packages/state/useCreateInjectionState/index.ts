import { inject, provide } from 'vue'

// export function useCreateInjectionState (composable: any) {
//   const key = Symbol('InjectionState')

//   const useProvidingState = (...args: any[]) => {
//     provide(key, composable(...args))
//   }

//   const useInjectedState = () => inject(key)

//   return [useProvidingState, useInjectedState]
// }

export function useCreateInjectionState (composable: (...args: any[]) => any): [useProvidingState: (...args: any[]) => void, useInjectedState: (...args: any[]) => any] {
  const useProvidingState = (...args: any[]) => {
    provide('key', composable(...args))
  }

  const useInjectedState = () => inject('key')

  return [useProvidingState, useInjectedState]
}
