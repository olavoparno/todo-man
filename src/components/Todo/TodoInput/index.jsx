import React from 'react'
import PropTypes from 'prop-types'

import { STodoInput, STodoForm, STodoInputText, STodoInputButton } from './styled'

class TodoInput extends React.Component {

  state = {
    inputValue: '',
  }

  handleAddTodo = (event) => {
    const {
      services: { addTodo, callBackRender },
    } = this.props
    const { inputValue: newTodoValue } = this.state
    const todo = {
      name: newTodoValue || 'Default Todo',
    }

    addTodo(todo).then(() => {
      callBackRender()
    })

    event.preventDefault()
  }

  handleChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    })
  }

  render() {

    return (
      <STodoInput>
        <STodoForm onSubmit={event => this.handleAddTodo(event)}>
          <STodoInputText
            type="text"
            placeholder="Type in TODO"
            onChange={event => this.handleChange(event)}
          />
          <STodoInputButton type="submit">Add TODO</STodoInputButton>
        </STodoForm>
      </STodoInput>
    )
  }
}

TodoInput.propTypes = {
  services: PropTypes.object,
}

export default TodoInput
