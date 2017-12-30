/* eslint-disable */
import { combineReducers } from 'redux';
import {
  REQUEST_POSTS, RECEIVE_POSTS, RECEIVE_WRITE, REQUEST_WRITE,
} from 'Actions';

function postGetReducer(state, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.response.data;
    case REQUEST_POSTS:
    default:
      return state;
  }
}

function postWriteReducer(state, action) {
  switch(action.type) {
    case RECEIVE_WRITE:
      return action.response;
    case REQUEST_WRITE:
    default:
      return state;
  }
}

export const combinedReducer = function(state = { editorContents: '', posts: []}, action) {
  return {
    response: postWriteReducer(state.editorContents, action),
    posts: postGetReducer(state.posts, action),
  };
};

// eslint-disable-next-line
export const logger = store => next => action => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  return result;
}
