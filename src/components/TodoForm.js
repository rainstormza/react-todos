import React from 'react'

const TodoForm = props => {
  const { onAddTodo, OnChangeText, text } = props
  return (
    <div className="section">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <div className="is-flex">
            <input
              className="input"
              type="text"
              placeholder="What needs to be done?"
              value={text}
              onChange={e => OnChangeText(e.target.value)}
              onKeyPress={e => {
                if (e.key === 'Enter') onAddTodo(text)
              }}
            />
            <button
              className="button is-primary"
              onClick={() => onAddTodo(text)}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoForm
