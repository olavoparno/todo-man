const endpointUrl = 'https://jp8cc.sse.codesandbox.io/todos'

const fetchTodos = (url, method = 'GET', bodyData) => {
  let options = {
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
  }

  options = { ...options, method: method.toUpperCase() }

  if (bodyData) {
    options = { ...options, body: JSON.stringify(bodyData) }
  }

  return fetch(url, options)
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
      throw Error(`Cannot fetch data for ${url}.`)
    })
    .then(data => data)
    .catch(() => {
      const response = { error: `Cannot fetch data for ${url}.` }

      return [response]
    })
}

const getAllTodos = () => fetchTodos(endpointUrl, 'GET')

const addTodo = todo => fetchTodos(endpointUrl, 'POST', todo)

const deleteTodo = id => fetchTodos(`${endpointUrl}/${id}`, 'DELETE')

const editTodo = (id, data) => fetchTodos(`${endpointUrl}/${id}`, 'PUT', data)

export default {
  getAllTodos,
  addTodo,
  deleteTodo,
  editTodo,
}
