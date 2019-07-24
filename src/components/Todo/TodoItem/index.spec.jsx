import React from 'react'
import { shallow } from 'enzyme'

import TodoItem from './index'

let todoItem
let services

describe('TodoItem component', () => {
  let component
  todoItem = {
    id: 1,
    name: 'My todo',
  }
  services = {
    deleteTodo: () => null,
    editTodo: () => null,
  }
  beforeAll(() => {
    component = shallow(<TodoItem todoItem={todoItem} services={services} />)
  })
  it('matches the snapshot', () => {
    expect(component).toMatchSnapshot()
  })
  // TODO: should've created a test for an edit click at least in order to check wether state is set to showModal or not
})
