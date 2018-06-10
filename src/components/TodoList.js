import React from 'react'

const TodoList = props => {
  const { todos, onToggleTodo } = props
  return (
    <div className="columns">
      <div className="column is-half is-offset-one-quarter">
        {todos.map(item => (
          <div
            key={item.id}
            className="is-flex notification"
            style={{
              color: 'white',
              cursor: 'pointer',
              backgroundColor: !item.completed ? '#00d1b2' : 'salmon'
            }}
            onClick={() => onToggleTodo(item.id)}
          >
            <span className="icon">
              {!item.completed ? (
                <i className="fas fa-circle fa-lg" />
              ) : (
                <i className="fas fa-check-circle fa-lg" />
              )}
            </span>
            <div
              style={{
                paddingLeft: '10px',
                textDecorationLine: !item.completed ? '' : 'line-through'
              }}
            >
              {item.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TodoList
