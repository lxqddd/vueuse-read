import { describe, it, expect } from 'vitest'
import { useReactify } from './index'
import { ref } from 'vue'

describe('useReactify', () => {
  it('should work', () => {
    const obj = ref(1)
    const stringfy = useReactify(JSON.stringify)
    const res = stringfy(obj)
    expect(obj.value).toBe(1)
    console.log(res.value, '================')
    expect(res.value).toBe('1')
  })
})
