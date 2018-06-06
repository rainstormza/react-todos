const ADD_TODO = 'ADD_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'

const initialState = {
  todos: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [
          ...state.todos,
          {
            id: state.todos.length,
            text: action.text,
            completed: false,
            date: new Date()
          }
        ]
      }

    case TOGGLE_TODO:
      return {
        todos: state.todos.map(
          todo =>
            todo.id === action.id
              ? { ...todo, completed: !todo.completed }
              : todo
        )
      }

    default:
      return state
  }
}

export default reducer

// action creators
export const onAddTodo = text => ({ type: ADD_TODO, text })

export const onToggleTodo = id => ({ type: TOGGLE_TODO, id })
