import React from 'react'
class TodoForm extends React.Component {
	constructor() {
		super()
		this.state = { 
			todoInput: ''
		}
	}

	changeUserInput = (event) => {
		this.setState({ todoInput: event.target.value })
	}

	handleSubmit = (event) => {
		event.preventDefault()
		if(this.state.todoInput.trim().length > 0){
			this.props.addTodo(this.state.todoInput)
		}
		this.setState({todoInput: ''})
	}
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					type='text'
					placeholder='Add todo'
					value={this.state.todoInput}
					onChange={this.changeUserInput}
				/>
				<input type='submit' value='Submit' />
			</form>
		)
	}
}
export default TodoForm