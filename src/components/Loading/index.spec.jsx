import React from 'react'
import { mount } from 'enzyme'

import Loading from './index'

describe('Loading component', () => {
  let component
  beforeAll(() => {
    component = mount(<Loading />)
  })
  it('should render correctly', () => {
    expect(component).toMatchSnapshot()
  })
  it('should contain children', () => {
    expect(component.find('div').children().length).toBeGreaterThan(0)
  })
  it('should contain a span under children', () => {
    expect(component.find('div').children().find('div')).toBeDefined()
  })
})
