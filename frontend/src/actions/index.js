export const REQUEST_POSTS = 'REQUEST_POSTS';
export function requestPosts() {
  return {
    type: REQUEST_POSTS,
  };
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export function receivePosts(json) {
  return {
    type: RECEIVE_POSTS,
    posts: json,
  };
}

export function fetchPosts() {
  return (dispatch) => {
    dispatch(requestPosts());

    return fetch('https://www.reddit.com/r/frontend.json')
      .then((response) => { return response.json(); })
      .then((json) => { return dispatch(receivePosts(json.data.children[0].data.domain)); });
  };
}

export const CHANGE_EDITOR_CONTENTS = 'CHANGE_EDITOR_CONTENTS';
export function changeContents(text) {
  return {
    type: CHANGE_EDITOR_CONTENTS,
    editorContents: text,
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
export function writePost(contents) {
  return (dispatch) => {
    dispatch(requestWrite());

    return fetch('http://localhost:3000/api/post', {
      headers: {
        'Content-Type': 'text/plain',
      },
      method: 'POST',
      mode: 'no-cors',
      body: `contents=${contents}`,
    })
      .then((response) => { dispatch(receiveWrite(response)); });
  };
}
