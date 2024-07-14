import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ListComponent from '../ListComponent.vue'
import { mockTestArticles } from '@/constant/const'

Object.defineProperty(window, 'LATEST_ARTICLES', { value: mockTestArticles })

describe('ListComponent', () => {
  it('renders properly', async () => {
    const wrapper = mount(ListComponent)

    expect(wrapper.findAll('.list-wrapper ul li').length).toBe(3)
  })

  it('shows "No Articles" when no articles are available', async () => {
    const wrapper = mount(ListComponent)

    await wrapper.find('#news').setValue(false)
    expect(wrapper.findAll('.list-wrapper ul li').length).toBe(1)

    await wrapper.find('#essays').setValue(false)
    expect(wrapper.findAll('.list-wrapper ul li')[0].text()).toBe('No Articles')
  })
})
