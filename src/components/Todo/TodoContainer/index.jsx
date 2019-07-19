import React from 'react'

import services from '../../../services'
import TodoHeader from '../TodoHeader'
import TodoInput from '../TodoInput'
import TodoList from '../TodoList'

class TodoContainer extends React.PureComponent {

  state = {
    todoListItems: [],
  }

  componentDidMount = () => {
    this.fetchAllTodos()
  }

  fetchAllTodos = async () => {
    const { setLoader } = this.props

    setLoader()

    const data = await services.getAllTodos()

    this.setState({
      todoListItems: data,
    }, setLoader())
  }

  render() {
    const { todoListItems } = this.state

    return (
      <React.Fragment>
        <TodoHeader />
        <TodoInput
          services={{
            addTodo: services.addTodo,
            deleteTodo: services.deleteTodo,
            editTodo: services.editTodo,
            callBackRender: () => this.fetchAllTodos(),
          }}
        />
        <TodoList todoListItems={todoListItems} />
      </React.Fragment>
    )
  }

}

export default TodoContainer
