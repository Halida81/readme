import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends React.Component {
	constructor() {
		super();
	
		this.state = {
			todos: [
				'Finish homework',
				'Wash dishes',
				'Clean room',
				'Make waffles',
			]
		}
  }
	addTodo = todo => {
		this.setState({todos: this.state.todos.concat(todo)});
	  
	}
	deleteTodo = value =>{
		this.setState(prevState =>({
			todos: prevState.todos.filter(todo => todo !== value),
	}))
	}
  render() {
		return (
			<div className='App'>
				<h1>Todos</h1>
				<TodoList todos={this.state.todos}  deleteTodo={this.deleteTodo}/>
				<TodoForm addTodo={this.addTodo} /> 
			 </div>
		)
	}
}
export default App
