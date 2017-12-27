/* eslint-disable */
import { combineReducers } from 'redux';
import {
  REQUEST_POSTS, RECEIVE_POSTS, RECEIVE_WRITE, REQUEST_WRITE,
} from 'Actions';

function getPosts(state = 'default domain', action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts;
    case REQUEST_POSTS:
    default:
      return state;
  }
}

function writePost(state = '', action) {
  switch(action.type) {
    case RECEIVE_WRITE:
      return action.response;
    default:
      return state;
  }
}

function requestWrite(state = 's', action) {
  switch(action.type) {
    case RECEIVE_WRITE:
      return action.response;
    case REQUEST_WRITE:
    default:
      return state;
  }
}


function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if(handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };
}

export const combinedReducer = function(state = { editorContents: '' }, action) {
  return {
    // posts:
    response: requestWrite(state.editorContents, action),
  };
};

function changeEditorContents(editorState = '', action) {
  switch(action.type) {
    case CHANGE_EDITOR_CONTENTS:
      return action.editorContents;
    case REQUEST_WRITE:
    default:
      return editorState;
  }
}

const editorReducer = createReducer('', {
  CHANGE_EDITOR_CONTENTS: changeEditorContents,
});

// eslint-disable-next-line
export const logger = store => next => action => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  return result;
}
