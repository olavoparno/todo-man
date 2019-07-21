import React from 'react'
import PropTypes from 'prop-types'

import { STodoList, SErrorServer } from './styled'
import TodoItem from '../TodoItem'

class TodoList extends React.PureComponent {

  render() {
    const { todoListItems, services } = this.props
    const [firstItem] = todoListItems
    const shouldRenderList = typeof firstItem !== 'undefined' && !firstItem.error
    const hasError = typeof firstItem !== 'undefined' && !firstItem.error

    return (
      <STodoList>
        {shouldRenderList ? todoListItems.map(item => (
          <TodoItem key={item.id} todoItem={item} services={services} />
        ))
          : (
            <SErrorServer>
              {hasError
                ? (
                  <span>
                    There may be an error while fetching data. Please refresh the
                    <a href="https://codesandbox.io/s/geru-todo-jp8cc" rel="noopener noreferrer" target="_blank"> Server </a>
                    and try again
                  </span>
                ) : (
                  <span>
                    Your TODO list is empty. Add one and start doing them right away.
                  </span>
                )
              }
            </SErrorServer>)
        }
      </STodoList>
    )
  }

}

TodoList.propTypes = {
  todoListItems: PropTypes.array,
  services: PropTypes.object,
}

export default TodoList
