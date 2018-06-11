import { createStore } from 'redux'

import TaskCollection from './TaskCollection'

new TaskCollection([
    'Go to store',
    'Eat cake'
]).dump();

// React testing ground

// actions
const ADD_TODO = 'ADD_TODO';

function addTodo(text: string) {
	return {
		type: ADD_TODO,
		text
	}
}

// state
const initialState = {
	todos: []
}

// reducer
function todoApp(state = initialState) {
	return state;
}

// store
const store = createStore(todoApp);