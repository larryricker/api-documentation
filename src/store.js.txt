import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // Default import
import apiReducer from './reducers'; // Ensure apiReducer is the default export

const store = createStore(apiReducer, applyMiddleware(thunk));

export default store;
