import React from 'react';
import './Post.css';

// eslint-disable-next-line
const Post = ({ onClick, posts }) => {
  return (
    // eslint-disable-next-line
    <div className='post' onClick={onClick}>
      <div className='post_title'>{posts.length ? posts[0].title : 'fetching...'}</div>
      <div className='post_contents'>{posts.length ? posts[0].contents : 'fetching...'}</div>
    </div>
  );
};

export default Post;
