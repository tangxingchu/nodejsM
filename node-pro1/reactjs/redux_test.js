import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers/index';
import Div from './div.js'

const store = createStore(reducer, applyMiddleware(thunk, createLogger()));

//let next = store.dispatch;

/*
store.dispatch = action => {
	next(action);
}*/

const mockFetch = () => (dispatch, getState) => {
	dispatch({type: 'UP_STATUS', payload: 'loading...'})
	window.setTimeout(() => {dispatch({type: 'UP_STATUS', payload: 'load-finished!'})}, 5000);
}

store.dispatch(mockFetch());

const render = () => {
	ReactDOM.render(
		<Div name={store.getState().name} value={store.getState().value}
		zt={store.getState().zt}
		onIncrement={()=>store.dispatch({type: 'INCREMENT'})}	
		onDecrement={()=>store.dispatch({type: 'DECREMENT'})}
	/>, document.getElementById('content'));
}

render();
store.subscribe(render);