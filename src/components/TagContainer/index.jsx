import React from 'react'
import ReactTags from 'react-tag-autocomplete'
import PropTypes from 'prop-types'

import suggestionsData from './data'

import './styles.css'

class TagContainer extends React.PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      stateTags: props.todoTags || [],
      suggestions: suggestionsData,
    }
  }

  handleDelete = (i) => {
    const { stateTags } = this.state
    const tags = stateTags.slice(0)
    tags.splice(i, 1)
    this.setState({ stateTags: tags })
  }

  handleAddition = (tag) => {
    const { stateTags } = this.state
    const tags = [].concat(stateTags, tag)
    this.setState({ stateTags: tags })
  }

  render() {
    const { stateTags, suggestions } = this.state

    return (
      <ReactTags
        tags={stateTags}
        suggestions={suggestions}
        handleDelete={index => this.handleDelete(index)}
        handleAddition={tag => this.handleAddition(tag)}
      />
    )
  }

}

TagContainer.propTypes = {
  todoTags: PropTypes.array,
}

export default TagContainer
