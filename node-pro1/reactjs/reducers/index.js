export default (state = {name: 'hello world!', value: 0}, action) => {
	switch(action.type) {
		case 'INCREMENT':
			console.log('INCREMENT');
			return Object.assign({}, state, {
				value: state.value + 1
			  });
			break;
		case 'DECREMENT':
			console.log('DECREMENT');
			return Object.assign({}, state, {
				value: state.value - 1
			  });
			break;
		default: return state; break;
	}
}