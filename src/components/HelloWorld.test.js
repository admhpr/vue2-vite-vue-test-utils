import { describe, expect, it, test } from 'vitest'
import { mount } from '@vue/test-utils'
import HelloWorld from './HelloWorld.vue'

describe('HelloWorld', () => {
  const wrapper = mount(HelloWorld, {})
  test('the wrapper exists', () => {
    expect(wrapper).to.exist
  })
  it('should show tech stack on button click', async () => {
    await wrapper.find('button').trigger('click')
    console.log(wrapper.html())
    const list = wrapper.findAll('li')
    expect(list.length).toBe(4)
  })
})
