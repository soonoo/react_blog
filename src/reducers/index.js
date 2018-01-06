/* eslint-disable */
import { combineReducers } from 'redux';
import {
  REQUEST_POST_LIST, RECEIVE_POST_LIST, RECEIVE_WRITE, REQUEST_WRITE, REQUEST_POST, RECEIVE_POST, UNMOUNT_WRITE
} from 'Actions';

function postListReducer(state = [], action) {
  switch (action.type) {
    case RECEIVE_POST_LIST:
      return action.response.data;
    case REQUEST_POST_LIST:
    default:
      return state;
  }
}

function postWriteReducer(state = { status: false, postId: -1 }, action) {
  switch(action.type) {
    case UNMOUNT_WRITE:
      return {
        status: false,
        postId: -1,
      };
    case RECEIVE_WRITE:
      if(action.response.status === 200) {
        return {
          status: true,
          postId: action.response.data.id,
        };
      }
    case REQUEST_WRITE:
    default:
      return state;
  }
}

function postReducer(state = {}, action) {
  switch(action.type) {
    case RECEIVE_POST:
      return action.response.data[0];
    case REQUEST_POST:
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  postWrite: postWriteReducer,
  postList: postListReducer,
  post: postReducer,
});

// eslint-disable-next-line
export const logger = store => next => action => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  return result;
}
