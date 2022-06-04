import React, { Component } from 'react'

class Todo extends Component{
	render(){
		return(
			<li > {this.props.todo} <button onClick={() => this.props.deleteTodo(this.props.todo)}>delete</button></li>
		)
	}
}

class TodoList extends React.Component {
	render() {
		return (
			<ul>
				{this.props.todos.map((todo) => (
					<Todo
						key={Math.random().toString()}
						todo={todo}
						deleteTodo={this.props.deleteTodo}
					/>
				))}
			</ul>
		)
	}
}
export default TodoList
