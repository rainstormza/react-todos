import React from 'react'
import { connect } from 'react-redux'
import { onToggleTodo } from '../redux'

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
                textDecoration: !item.completed ? 'none' : 'line-through'
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

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = { onToggleTodo }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
