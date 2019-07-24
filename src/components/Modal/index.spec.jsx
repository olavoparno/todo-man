import React from 'react'
import { shallow } from 'enzyme'

import Modal from './index'
import DateSelector from '../DatePicker'

describe('Modal component', () => {
  let component
  let newTodo
  beforeAll(() => {
    newTodo = {
      name: 'New',
      description: 'My Description',
      dueDate: new Date('Mon Jul 22 2019 23:15:02 GMT-0300 (Brasilia Standard Time)'),
      duration: '1 hour',
      tags: [
        { id: 3, name: 'Food' },
        { id: 4, name: 'Tour' },
      ],
    }

    component = shallow(<Modal newTodo={newTodo} />)
  })
  it('should render correctly', () => {
    expect(component).toMatchSnapshot()
  })
  it('should contain children', () => {
    expect(component.find('div')).toBeDefined()
  })
  it('should contain a todo name', () => {
    expect(component.state().name).toEqual(newTodo.name)
  })
  it('should contain a DatePicker with current date', () => {
    expect(component.find(DateSelector).props().startDate).toEqual(component.state().dueDate)
  })
})
