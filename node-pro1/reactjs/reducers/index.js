export default (state = {name: '��Һ�!', value: 0}, action) => {
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
		default: return state; break;
	}
}