import React from 'react'
import { mount } from 'enzyme'

import BackgroundApp from './index'

describe('BackgroundApp component', () => {
  let component
  beforeAll(() => {
    component = mount(
      <BackgroundApp>
        <span>Child</span>
      </BackgroundApp>,
    )
  })
  it('should render correctly', () => {
    expect(component).toMatchSnapshot()
  })
  it('should contain children', () => {
    expect(component.find('div').children().length).toBeGreaterThan(0)
  })
  it('should contain a span under children', () => {
    expect(component.find('div').children().find('span')).toBeDefined()
  })
})
