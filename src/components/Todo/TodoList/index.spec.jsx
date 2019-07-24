import React from 'react'
import { shallow } from 'enzyme'

import TodoList from './index'

describe('TodoList component', () => {
  let component
  let listItems
  beforeAll(() => {
    listItems = [{
      name: 'New',
      description: 'My Description',
      dueDate: new Date('Mon Jul 22 2019 23:15:02 GMT-0300 (Brasilia Standard Time)'),
      duration: '1 hour',
      tags: [
        { id: 3, name: 'Food' },
        { id: 4, name: 'Tour' },
      ],
    },
    {
      name: 'New',
      description: 'My Description',
      dueDate: new Date('Mon Jul 22 2019 23:15:02 GMT-0300 (Brasilia Standard Time)'),
      duration: '1 hour',
      tags: [
        { id: 3, name: 'Food' },
        { id: 4, name: 'Tour' },
      ],
    }]

    component = shallow(<TodoList todoListItems={listItems} />)
  })
  it('should render correctly', () => {
    expect(component).toMatchSnapshot()
  })
  it('should contain filteredList state', () => {
    expect(component.state().filteredItems).toEqual(listItems)
  })
})
