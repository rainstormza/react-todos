import React, { Component } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

class App extends Component {
  state = {
    text: '',
    todos: []
  }

  onAddTodo = text => {
    console.log(text)
    if (text) {
      this.setState({
        text: '',
        todos: [
          ...this.state.todos,
          {
            id: this.state.todos.length,
            text,
            completed: false,
            date: new Date()
          }
        ]
      })
    }
  }

  OnChangeText = text => {
    this.setState({ text })
  }

  onToggleTodo = id => {
    const todos = this.state.todos.map(
      todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    )

    this.setState({
      todos
    })
  }

  debugState = () => {
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Todos</h1>
            </div>
          </div>
        </section>
        <TodoForm
          onAddTodo={this.onAddTodo}
          OnChangeText={this.OnChangeText}
          text={this.state.text}
        />
        <TodoList todos={this.state.todos} onToggleTodo={this.onToggleTodo} />
        {/* <button onClick={this.debugState}>Debug</button> */}
      </div>
    )
  }
}

export default App
