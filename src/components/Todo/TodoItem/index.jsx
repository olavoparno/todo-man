import React from 'react'
import PropTypes from 'prop-types'

import { STodoItem } from './styled'

class TodoItem extends React.Component {

  state = {

  }

  render() {
    const { todoItem } = this.props

    return (
      <STodoItem>
        {todoItem.name}
      </STodoItem>
    )
  }

}

TodoItem.propTypes = {
  todoItem: PropTypes.object,
}

export default TodoItem
