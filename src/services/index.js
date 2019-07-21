const endpointUrl = 'https://jp8cc.sse.codesandbox.io/todos'

const fetchTodos = (url, method = 'GET', bodyData = {}) => {
  let options = {
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
  }

  switch (method.toUpperCase()) {
    case 'POST':
      options = { ...options, method: 'POST', body: JSON.stringify(bodyData) }
      break
    case 'PUT':
      options = { ...options, method: 'PUT', body: JSON.stringify(bodyData) }
      break
    case 'DELETE':
      options = { ...options, method: 'DELETE' }
      break
    case 'GET':
      options = { ...options, method: 'GET' }
      break
    default:
      options = { ...options, method: 'GET' }
      break
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

const getTodoById = id => fetchTodos(`${endpointUrl}/${id}`, 'GET')

const addTodo = todo => fetchTodos(endpointUrl, 'POST', todo)

const deleteTodo = id => fetchTodos(`${endpointUrl}/${id}`, 'DELETE')

const editTodo = (id, data) => fetchTodos(`${endpointUrl}/${id}`, 'PUT', data)

export default {
  getAllTodos,
  getTodoById,
  addTodo,
  deleteTodo,
  editTodo,
}
