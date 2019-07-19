import React from 'react'
import PropTypes from 'prop-types'

import { STodoList, SErrorServer } from './styled'
import TodoItem from '../TodoItem'

class TodoList extends React.PureComponent {

  render() {
    const { todoListItems } = this.props
    const [firstItem] = todoListItems
    const shouldRenderList = typeof firstItem !== 'undefined' && !firstItem.error

    return (
      <STodoList>
        {shouldRenderList ? todoListItems.map(item => (
          <TodoItem key={item.id} todoItem={item} />
        ))
          : (
            <SErrorServer>
              <span>
                There may be an error while fetching data. Please refresh the
                <a href="https://codesandbox.io/s/geru-todo-jp8cc" rel="noopener noreferrer" target="_blank"> Server </a>
                and try again
              </span>
            </SErrorServer>)
        }
      </STodoList>
    )
  }

}

TodoList.propTypes = {
  todoListItems: PropTypes.array,
}

export default TodoList
