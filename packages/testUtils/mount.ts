import { createApp, defineComponent, h } from 'vue'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function useSetup<T> (setup: () => T) {
  const Comp = defineComponent({
    setup,
    render () {
      return h('div', [])
    }
  })
  return mount(Comp)
}

export function mount<T> (Comp: T) {
  const el = document.createElement('div')
  const app = createApp(Comp as any)

  const unmount = () => app.unmount()
  const comp = app.mount(el) as any
  comp.unmount = unmount
  return comp
}
