import React from 'react'
import { shallow } from 'enzyme'

import TagContainer from './index'
import data from './data'

describe('TagContainer component', () => {
  let component
  beforeAll(() => {
    component = shallow(<TagContainer todoTags={data} />)
  })
  it('matches the snapshot', () => {
    expect(component).toMatchSnapshot()
  })
  it('should contain state todoTags', () => {
    expect(component.state().stateTags).toEqual(component.props().tags)
  })
})
