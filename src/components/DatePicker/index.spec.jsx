import React from 'react'
import { shallow } from 'enzyme'

import DateSelector from './index'

describe('DateSelector component', () => {
  let component
  let startDate
  beforeAll(() => {
    startDate = new Date('Mon Jul 22 2019 23:15:02 GMT-0300 (Brasilia Standard Time)')
    component = shallow(<DateSelector startDate={startDate} />)
  })
  it('should render correctly', () => {
    expect(component).toMatchSnapshot()
  })
  it('should return instance as null', () => {
    expect(component.instance()).toEqual(null)
  })
  it('should render with correct date', () => {
    expect(component.props().selected).toEqual(startDate)
  })
})
