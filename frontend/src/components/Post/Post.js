import React from 'react';
import './Post.css';

// eslint-disable-next-line
const Post = ({ onClick, content, title }) => {
  return (
    // eslint-disable-next-line
    <div className='post' onClick={onClick}>
      <div className='post_title'>{title}</div>
      <div className='post_contents'>{content}</div>
    </div>
  );
};

export default Post;
