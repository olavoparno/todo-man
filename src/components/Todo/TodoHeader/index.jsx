import React from 'react'
import PropTypes from 'prop-types'

const TodoHeader = (props) => {
  const { children } = props

  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  )
}

TodoHeader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

export default TodoHeader
