import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

//定义一个action
const add_action = {
	type: 'ADD_TOOD',
	payload: 'Learn redux'
}

//定义一个action creator
const ADD_TODO = '添加 TODO';
function addTodo(payload) {
	return {
		type: ADD_TODO,
		payload
	}
}
//const add_action = addTodo('Learn redux');

//reducer,必须是一个函数，参数1:state,参数2:action,返回一个新的state
const reducer= (state, action) => {
	switch(action.type) {
		case "ADD_TODO":
			return state + action.payload; break;
		default: return state; break;
	}
}

//const state = reducer(1, addTodo(1);

//const store = createStore(reducer);

export default class DivTest extends Component {
	
	constructor(props) {
		super(props);
		this.state = {value: 0, name: this.props.name};
	}

	render() {
		return (
			<div>{this.state.name}, 这是一个测试div
				<input value={this.state.value}/>
				<button>+</button>
				<button>-</button>
			</div>
		)
	}
}
