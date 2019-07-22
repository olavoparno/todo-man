import React from 'react'
import PropTypes from 'prop-types'

import { STodoList, SErrorServer, STodoSearch, STodoSearchBox } from './styled'
import TodoItem from '../TodoItem'

class TodoList extends React.PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      filteredItems: [],
      todoItems: [],
    }
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    const { todoListItems } = nextProps
    const { todoItems } = nextState

    if (todoListItems && todoListItems.length > 0 && (todoItems !== todoListItems)) {
      return {
        filteredItems: todoListItems,
        todoItems: todoListItems,
      }
    }


    return nextState
  }

  getSpanMessage = (hasError) => {
    if (hasError) {
      return (
        <span>
          There may be an error while fetching data. Please refresh the
          <a href="https://codesandbox.io/s/geru-todo-jp8cc" rel="noopener noreferrer" target="_blank"> Server </a>
          and try again
        </span>
      )
    }

    return (
      <span>
        Looks like your TODO list is empty.
      </span>
    )
  }

  handleFilterByText = (event) => {
    const { todoItems } = this.state
    const searchValue = event.target.value.toUpperCase()

    const newItems = todoItems.filter((item) => {
      if (
        item.name.toUpperCase().indexOf(searchValue) >= 0
        || item.description.toUpperCase().indexOf(searchValue) >= 0
      ) return item

      return false
    })

    this.setState({
      filteredItems: newItems,
    })
  }

  handleFilterByTags = (event) => {
    const { todoItems } = this.state
    const searchValue = event.target.value.toUpperCase()
    let newItems = []

    todoItems.forEach(item => item.tags.forEach((itemTag) => {
      if (itemTag && itemTag.name.toUpperCase().indexOf(searchValue) >= 0) {
        newItems.push(item)
      }
    }))

    if (searchValue.length === 0) {
      newItems = todoItems
    }

    this.setState({
      filteredItems: newItems,
    })
  }

  render() {
    const { services } = this.props
    const { filteredItems } = this.state
    const [firstItem] = filteredItems
    const shouldRenderList = typeof firstItem !== 'undefined' && !firstItem.error
    const hasError = typeof firstItem !== 'undefined' && !firstItem.error

    return (
      <React.Fragment>
        <STodoSearchBox>
          <STodoSearch
            placeholder="Filter by text..."
            onChange={event => this.handleFilterByText(event)}
          />
          <STodoSearch
            placeholder="Filter by tags..."
            onChange={event => this.handleFilterByTags(event)}
          />
        </STodoSearchBox>
        <STodoList>
          {shouldRenderList ? filteredItems.map(item => (
            <TodoItem key={item.id} todoItem={item} services={services} />
          ))
            : (
              <SErrorServer>
                {this.getSpanMessage(hasError)}
              </SErrorServer>)
          }
        </STodoList>
      </React.Fragment>
    )
  }

}

TodoList.propTypes = {
  services: PropTypes.object,
}

export default TodoList
