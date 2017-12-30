import axios from 'axios';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export function requestPosts() {
  return {
    type: REQUEST_POSTS,
  };
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export function receivePosts(response) {
  return {
    type: RECEIVE_POSTS,
    response,
  };
}

export function fetchPosts() {
  return (dispatch) => {
    dispatch(requestPosts());

    return axios.get('http://localhost:3000/api/post/list')
      .then((response) => { dispatch(receivePosts(response)); });
  };
}

export const REQUEST_WRITE = 'REQUEST_WRITE';
export function requestWrite() {
  return {
    type: REQUEST_WRITE,
  };
}

export const RECEIVE_WRITE = 'RECEIVE_WRITE';
export function receiveWrite(response) {
  return {
    type: RECEIVE_WRITE,
    response,
  };
}

export const WRITE_POST = 'WRITE_POST';
export function writePost(contents, title) {
  return (dispatch) => {
    dispatch(requestWrite());

    const params = new URLSearchParams();
    params.append('contents', contents);
    params.append('title', title);

    return axios.post('http://localhost:3000/api/post', params, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((response) => { dispatch(receiveWrite(response)); });
  };
}
