import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = {
  greetings: 'Click for greeting',
};

function rootReducer(state, action) {
  console.log(action.type);
  switch (action.type) {
    case 'GET_GREETING_SUCCESS':
      return {
        greetings: action.json.greetings
      };
  }
  return state;
}

export default function configureStore() {
  const store =configureStore(rootReducer, initialState, applyMiddleware(thunk));
  return store;
}