import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ListComponent from '../ListComponent.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(ListComponent, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
