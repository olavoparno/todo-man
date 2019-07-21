import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'

import { STodoInput, STodoForm, STodoInputText, STodoInputButton, SToolTip } from './styled'
import Modal from '../../Modal'

class TodoInput extends React.PureComponent {

  state = {
    inputValue: '',
    newTodo: {
      name: 'Default Todo',
    },
    showModal: false,
    showToolTip: false,
  }

  textRef = React.createRef()

  setShowModal = () => {
    const { showModal } = this.state

    this.setState({
      showModal: !showModal,
    })
  }

  handleAddTodo = (event) => {
    const { inputValue: newTodoValue, showToolTip } = this.state

    if (!newTodoValue) {
      this.setState({
        showToolTip: !showToolTip,
      })

      setTimeout(() => {
        this.setState({
          showToolTip: false,
        })
      }, 500)

      this.textRef.current.focus()

      return event.preventDefault()
    }

    const todo = {
      name: newTodoValue,
    }

    this.setState({
      newTodo: todo,
    })

    this.textRef.current.value = ''

    this.setShowModal()

    return event.preventDefault()
  }

  handleChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    })
  }

  returnFilled = (filledTodo) => {
    const {
      services: { addTodo, callBackRender },
    } = this.props

    addTodo(filledTodo).then(() => callBackRender())
  }

  getModal = newTodo => (
    <Modal
      newTodo={newTodo}
      onClose={() => this.setShowModal()}
      callBack={this.returnFilled}
    />
  )

  render() {
    const { newTodo, showModal, showToolTip } = this.state

    return (
      <STodoInput id="todo-input">
        {showModal && this.getModal(newTodo)
        }
        <STodoForm onSubmit={event => this.handleAddTodo(event)}>
          <STodoInputText
            ref={this.textRef}
            type="text"
            placeholder="Type in your new TODO"
            onChange={event => this.handleChange(event)}
          />
          {showToolTip && <SToolTip />}
          <STodoInputButton type="submit">
            <FontAwesomeIcon icon={faPlusSquare} />
            Add TODO
          </STodoInputButton>
        </STodoForm>
      </STodoInput>
    )
  }

}

TodoInput.propTypes = {
  services: PropTypes.object,
}

export default TodoInput
