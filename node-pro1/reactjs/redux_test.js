import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reducer from './reducers/index';
import Div from './div.js'

const store = createStore(reducer);


const render = () => {
	ReactDOM.render(
		<Div name={store.getState().name} value={store.getState().value}
		onIncrement={()=>store.dispatch({type: 'INCREMENT'})}	
		onDecrement={()=>store.dispatch({type: 'DECREMENT'})}
	/>, document.getElementById('content'));
}

render();
store.subscribe(render);