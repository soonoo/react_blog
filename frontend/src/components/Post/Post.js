import React from 'react';
import './Post.css';

// eslint-disable-next-line
const Post = ({ onClick, content }) => {
  return (
    // eslint-disable-next-line
    <div className='post' onClick={onClick}>{content}</div>
  );
};

export default Post;
