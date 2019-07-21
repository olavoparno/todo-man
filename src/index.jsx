import * as React from 'react'
import { render } from 'react-dom'

import BackgroundApp from './components/BackgrounApp'
import TodoContainer from './components/Todo/TodoContainer'
import Loading from './components/Loading'

import { fixOverflow } from './utils'

class App extends React.Component {

  state = {
    isLoading: false,
  }

  setLoader = () => {
    const { isLoading } = this.state

    fixOverflow(!isLoading)

    this.setState({
      isLoading: !isLoading,
    })
  }

  render() {
    const { isLoading } = this.state

    return (
      <BackgroundApp isLoading={isLoading}>
        {isLoading && <Loading />}
        <TodoContainer setLoader={this.setLoader} />
      </BackgroundApp>
    )
  }

}

const rootElement = document.getElementById('root')
render(<App />, rootElement)
