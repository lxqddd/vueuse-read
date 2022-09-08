import { DefineComponent, ref, h, computed } from 'vue'
import { useCreateInjectionState } from './index'
import { describe, expect, it } from 'vitest'

const [useProvidingState, useInjectedState] = useCreateInjectionState((initNum: number) => {
  const count = ref(initNum)
  const double = computed(() => count.value * 2)
  const increment = () => (count.value++)

  return { count, double, increment }
})
