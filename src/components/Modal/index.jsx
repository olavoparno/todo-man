import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import { SModal, SModalButton, SModalInput, SModalInputText } from './styled'
import DateSelector from '../DatePicker'
import TagContainer from '../TagContainer'

import { getToday, fixOverflow } from '../../utils'

class Modal extends React.PureComponent {

  constructor(props) {
    super(props)

    const { name, description, tags } = props.newTodo

    this.state = {
      creationDate: getToday(),
      description: description || 'My Description',
      dueDate: new Date(),
      name: name || 'My TODO',
      reminder: getToday(),
      changes: false,
      tags,
    }

    this.nameRef = React.createRef()
  }

  componentDidMount() {
    this.nameRef.current.focus()
    fixOverflow(true)
  }

  handleCallBack = (props) => {
    const { callBack, newTodo, onClose } = props
    const { changes, creationDate, description, dueDate, name, reminder, tags } = this.state

    if (newTodo) {
      const returnTodo = {
        ...newTodo,
        creationDate,
        description,
        dueDate,
        name,
        reminder,
        tags,
      }

      if (changes) callBack(returnTodo)
      fixOverflow(false)
      onClose()
    }
  }

  handleDateChange = (date) => {
    this.setState({
      dueDate: date,
      changes: true,
    })
  }

  handleTextChange = (event) => {
    const newValue = event.target.value

    this.setState({
      [event.target.name]: newValue,
      changes: true,
    })
  }

  render() {
    const { creationDate, description, dueDate, name, tags } = this.state

    return (
      <SModal>
        <SModalInput onClose={event => event.preventDefault()}>
          <span>Name</span>
          <SModalInputText ref={this.nameRef} name="name" onChange={event => this.handleTextChange(event)} defaultValue={name} />
          <span>Description</span>
          <SModalInputText name="description" onChange={event => this.handleTextChange(event)} defaultValue={description} />
          <span>Due Date</span>
          <DateSelector startDate={dueDate} handleChange={event => this.handleDateChange(event)} />
          <span>Estimated Duration</span>
          <SModalInputText placeholder="2 hours" />
          <span>Tags</span>
          <TagContainer todoTags={tags} />
          <span>Creation Date</span>
          <SModalInputText disabled defaultValue={creationDate} />
          <SModalButton
            className="modal-close-button"
            onClick={() => {
              this.handleCallBack(this.props)
            }}
          >
            <FontAwesomeIcon icon={faTimes} />
          </SModalButton>
        </SModalInput>
      </SModal>
    )
  }

}

Modal.propTypes = {
  newTodo: PropTypes.object,
}

export default Modal
