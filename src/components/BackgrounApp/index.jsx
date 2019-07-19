import React from 'react'
import PropTypes from 'prop-types'

import SBackground from './styled'

const BackgroundApp = (props) => {
  const { children } = props

  return (
    <SBackground>
      {children}
    </SBackground>
  )
}

BackgroundApp.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

export default BackgroundApp
