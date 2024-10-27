/*
// reducers.js
import { combineReducers } from 'redux';
// Import other reducers if you have multiple
// import someOtherReducer from './someOtherReducer';

const initialState = {
    apis: []
};


const FETCH_APIS_SUCCESS = 'FETCH_APIS_SUCCESS';
const apiReducer = (state = initialState, action) => { // use initialState
  switch (action.type) {
    case FETCH_APIS_SUCCESS:
      return { ...state, apis: action.payload };
    default:
      return state;
  }
};

export default combineReducers({
  api: apiReducer,
  // Add other reducers here
  // someOther: someOtherReducer,
});
*/
// reducers.js
import { combineReducers } from 'redux';
// Import other reducers if you have multiple
// import someOtherReducer from './someOtherReducer';

const initialState = {
  apis: [],
};

const FETCH_APIS_SUCCESS = 'FETCH_APIS_SUCCESS';

const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_APIS_SUCCESS:
      return { ...state, apis: action.payload };
    default:
      return state;
  }
};

export default combineReducers({
  api: apiReducer,
});


