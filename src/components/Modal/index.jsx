import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faTimes } from '@fortawesome/free-solid-svg-icons'

import { SModal, SModalCloseButton, SModalInput, SModalInputText, SModalInputButton } from './styled'
import DateSelector from '../DatePicker'
import TagContainer from '../TagContainer'

import { getToday, fixOverflow, parseISO } from '../../utils'

class Modal extends React.PureComponent {

  constructor(props) {
    super(props)

    const { name, description, dueDate, duration, tags } = props.newTodo

    this.state = {
      creationDate: getToday(),
      description: description || 'My Description',
      dueDate: dueDate ? parseISO(dueDate) : new Date(),
      duration: duration || '1 hour',
      name: name || 'My TODO',
      changes: true,
      tags: tags || [],
    }

    this.nameRef = React.createRef()
  }

  componentDidMount() {
    this.nameRef.current.focus()
    fixOverflow(true)
  }

  handleCallBack = (props) => {
    const { callBack, newTodo, onClose } = props
    const { changes, creationDate, description, dueDate, duration, name, tags } = this.state

    if (newTodo) {
      const returnTodo = {
        ...newTodo,
        creationDate,
        description,
        dueDate,
        duration,
        name,
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

  handleTagChange = (tags) => {
    this.setState({
      tags,
      changes: true,
    })
  }

  getInputs = (state) => {
    const { creationDate, description, dueDate, duration, name, tags } = state

    return (
      <React.Fragment>
        <span>Name</span>
        <SModalInputText ref={this.nameRef} name="name" onChange={event => this.handleTextChange(event)} defaultValue={name} />
        <span>Description</span>
        <SModalInputText name="description" onChange={event => this.handleTextChange(event)} defaultValue={description} />
        <span>Due Date</span>
        <DateSelector startDate={dueDate} handleChange={event => this.handleDateChange(event)} />
        <span>Estimated Duration</span>
        <SModalInputText name="duration" onChange={event => this.handleTextChange(event)} defaultValue={duration} />
        <span>Tags</span>
        <TagContainer onChangeCb={this.handleTagChange} todoTags={tags} />
        <span>Creation Date</span>
        <SModalInputText disabled defaultValue={creationDate} />
      </React.Fragment>
    )
  }

  render() {
    const { onClose } = this.props

    return (
      <SModal>
        <SModalInput onClose={event => event.preventDefault()}>
          {this.getInputs(this.state)}
          <SModalInputButton
            type="submit"
            onClick={() => {
              this.handleCallBack(this.props)
            }}
          >
            <FontAwesomeIcon icon={faPlusSquare} />
            Save TODO
          </SModalInputButton>
          <SModalCloseButton
            className="modal-close-button"
            onClick={() => {
              onClose()
            }}
          >
            <FontAwesomeIcon icon={faTimes} />
          </SModalCloseButton>
        </SModalInput>
      </SModal>
    )
  }

}

Modal.propTypes = {
  newTodo: PropTypes.object,
  onClose: PropTypes.func,
}

export default Modal
