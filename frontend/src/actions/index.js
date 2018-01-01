import axios from 'axios';

export const REQUEST_POST = 'REQUEST_POST';
export function requestPost() {
  return {
    type: REQUEST_POST,
  };
}

export const RECEIVE_POST = 'RECEIVE_POST';
export function receivePost(response) {
  return {
    type: RECEIVE_POST,
    response,
  };
}

export function fetchPost(postId, editHtml) {
  return (dispatch) => {
    dispatch(requestPost());

    return axios.get(`http://localhost:3000/api/post/${postId}`)
      .then((response) => {
        dispatch(receivePost(response));
        editHtml();
      });
  };
}

export const REQUEST_POST_LIST = 'REQUEST_POST_LIST';
export function requestPostList() {
  return {
    type: REQUEST_POST_LIST,
  };
}

export const RECEIVE_POST_LIST = 'RECEIVE_POST_LIST';
export function receivePostList(response) {
  return {
    type: RECEIVE_POST_LIST,
    response,
  };
}

export function fetchPostList() {
  return (dispatch) => {
    dispatch(requestPostList());

    return axios.get('http://localhost:3000/api/post/list')
      .then((response) => { dispatch(receivePostList(response)); });
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

export const UNMOUNT_WRITE = 'UNMOUNT_WRITE';
export function unmountWrite() {
  return {
    type: UNMOUNT_WRITE,
  };
}
