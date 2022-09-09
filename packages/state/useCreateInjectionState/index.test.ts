import { defineComponent, ref, h, computed } from 'vue'
import { useCreateInjectionState } from './index'
import { describe, expect, it } from 'vitest'
import { mount } from '../../testUtils/mount'

const [useProvidingCountState, useCountState] = useCreateInjectionState((initNum: number) => {
  const count = ref(initNum)
  const double = computed(() => count.value * 2)
  const increment = () => (count.value++)

  return { count, double, increment }
})

const ChildComponent = defineComponent({
  setup () {
    const { count, double } = useCountState()
    expect(count.value).toBe(0)
    expect(double.value).toBe(0)
    return () => h('div')
  }
})

const RootComponent = defineComponent({
  setup () {
    useProvidingCountState(0)
    return () => h(ChildComponent)
  }
})

describe('useCreateInjectionState', () => {
  it('should work', () => {
    mount(RootComponent)
  })
})
