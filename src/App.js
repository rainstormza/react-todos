import React, { Component } from 'react'
import TodoHeader from './components/TodoHeader'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

class App extends Component {
  // state = {
  //   text: '',
  //   todos: []
  // }

  // OnChangeText = text => {
  //   this.setState({ text })
  // }

  // onAddTodo = text => {
  //   console.log(text)
  //   if (text) {
  //     this.setState({
  //       text: '',
  //       todos: [
  //         ...this.state.todos,
  //         {
  //           id: this.state.todos.length,
  //           text,
  //           completed: false,
  //           date: new Date()
  //         }
  //       ]
  //     })
  //   }
  // }

  // onToggleTodo = id => {
  //   const todos = this.state.todos.map(
  //     todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)
  //   )

  //   this.setState({
  //     todos
  //   })
  // }

  debugState = () => {
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <TodoHeader />
        <TodoForm
        // onAddTodo={this.onAddTodo}
        // OnChangeText={this.OnChangeText}
        // text={this.state.text}
        />
        <TodoList
        // todos={this.state.todos} onToggleTodo={this.onToggleTodo}
        />
        {/* <button onClick={this.debugState}>Debug</button> */}
      </div>
    )
  }
}

export default App

// http://nextzy-react-todos.surge.sh/
// https://github.com/rainstormza/react-todos
