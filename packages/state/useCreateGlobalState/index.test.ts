import { expect, it, describe } from 'vitest'
import { computed, ref } from 'vue'
import { useCreateGlobalState } from './index'
import { useSetup } from './../../testUtils/mount'

describe('useCreateGlobalState', () => {
  it('should work after dispose 1', () => {
    const useGlobalState = useCreateGlobalState(() => {
      const counter = ref(1)
      const double = computed(() => counter.value * 2)
      return { counter, double }
    })

    const { counter, double } = useGlobalState()
    expect(counter.value).toBe(1)
    expect(double.value).toBe(2)

    const vm = useSetup(() => {
      const { counter, double } = useGlobalState()
      expect(counter.value).toBe(1)
      expect(double.value).toBe(2)

      return {
        counter,
        double
      }
    })
    counter.value = 2
    expect(counter.value).toBe(2)
    expect(double.value).toBe(4)

    vm.unmount()

    counter.value = 3
    expect(counter.value).toBe(3)
    expect(double.value).toBe(6)
  })
})
