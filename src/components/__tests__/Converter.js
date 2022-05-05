import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Converter from '../Converter.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(Converter, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
