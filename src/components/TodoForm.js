import React, { Component } from 'react'
import { connect } from 'react-redux'
import { onAddTodo } from '../redux'

class TodoForm extends Component {
  state = {
    text: ''
  }

  addTodo = text => {
    if (text) {
      this.props.onAddTodo(text)
      this.setState({ text: '' })
    }
  }

  render() {
    const { text } = this.state

    return (
      <div className="section">
        <div className="columns is-desktop">
          <div className="column is-half is-offset-one-quarter">
            <div className="is-flex">
              <input
                className="input"
                type="text"
                placeholder="What needs to be done?"
                value={text}
                onChange={e => this.setState({ text: e.target.value })}
                onKeyPress={e => {
                  if (e.key === 'Enter') this.addTodo(text)
                }}
              />
              <button
                className="button is-primary"
                onClick={() => this.addTodo(text)}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// const TodoForm = props => {
//   const { onAddTodo, OnChangeText, text } = props
//   return (
//     <div className="section">
//       <div className="columns is-desktop">
//         <div className="column is-half is-offset-one-quarter">
//           <div className="is-flex">
//             <input
//               className="input"
//               type="text"
//               placeholder="What needs to be done?"
//               value={text}
//               onChange={e => OnChangeText(e.target.value)}
//               onKeyPress={e => {
//                 if (e.key === 'Enter') onAddTodo(text)
//               }}
//             />
//             <button
//               className="button is-primary"
//               onClick={() => onAddTodo(text)}
//             >
//               Add
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     onAddTodo: text => dispatch(onAddTodo(text))
//   }
// }
const mapDispatchToProps = { onAddTodo }

// https://stackoverflow.com/questions/37325419/mapdispatchtoprops-any-point

// The second argument to connect() can take two main forms. If you pass a function as the argument, connect() assumes you want to handle dispatch preparation yourself, calls your function with dispatch as an argument, and merges the result into the props for your component.

// If you pass in an object as the second argument to connect(), it assumes you've given it a map of prop names to action creators, and so it automatically runs all of them through the bindActionCreators utility and uses the result as props.

export default connect(
  '',
  mapDispatchToProps
)(TodoForm)
