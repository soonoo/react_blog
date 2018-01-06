import React from 'react';
import PropTypes from 'prop-types';
import './PostListItem.css';

const PostListItem = ({ title, date }) => {
  return (
    <li className='item_list'>
      <div className='item_title'>{title}</div>
      <div className='item_date'>{date}</div>
    </li>
  );
};

PostListItem.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default PostListItem;
