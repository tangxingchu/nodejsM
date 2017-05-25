export default (state = {name: 'hello world!', value: 0}, action) => {
	switch(action.type) {
		case 'INCREMENT':
			return Object.assign({}, state, {
				value: state.value + 1
			  });
			break;
		case 'DECREMENT':
			return Object.assign({}, state, {
				value: state.value - 1
			  });
			break;
		case 'UP_STATUS':
			return Object.assign({}, state, {
				zt: action.payload
			  });
			break;
		default: return state; break;
	}
}