import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'

import { STodoItem, STodoEdit, SButton } from './styled'
import Modal from '../../Modal'

class TodoItem extends React.PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      showModal: false,
    }
  }

  setShowModal = () => {
    const { showModal } = this.state

    this.setState({
      showModal: !showModal,
    })
  }

  saveEditChanges = (newTodo) => {
    const {
      services: { editTodo, callBackRender },
    } = this.props

    editTodo(newTodo.id, newTodo).then(() => {
      callBackRender()
    })
  }

  handleDeleteTodo = (id) => {
    const {
      services: { deleteTodo, callBackRender },
    } = this.props

    deleteTodo(id).then(() => {
      callBackRender()
    })
  }

  returnFilled = filledTodo => this.saveEditChanges(filledTodo)

  getModal = todoItem => (
    <Modal
      newTodo={todoItem}
      onClose={() => this.setShowModal()}
      callBack={this.returnFilled}
    />
  )

  render() {
    const { showModal } = this.state
    const { todoItem } = this.props

    return (
      <React.Fragment>
        {showModal
          && this.getModal(todoItem)
        }
        <STodoItem id={todoItem.id}>
          <input
            type="text"
            value={todoItem.name}
            readOnly
            disabled
          />
          <STodoEdit>
            <SButton onClick={() => this.setShowModal()}>
              <FontAwesomeIcon icon={faPen} />
            </SButton>
            <SButton onClick={() => this.handleDeleteTodo(todoItem.id)}>
              <FontAwesomeIcon icon={faTrash} />
            </SButton>
          </STodoEdit>
        </STodoItem>
      </React.Fragment>
    )
  }

}

TodoItem.propTypes = {
  todoItem: PropTypes.object,
  services: PropTypes.object,
}

export default TodoItem
