import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './PostListItem.css';

const PostListItem = ({ title, date, postId }) => {
  return (
    <li className='item_list'>
      <Link to={`/${postId}`}><div className='item_title'>{title}</div></Link>
      <div className='item_date'>{date}</div>
    </li>
  );
};

PostListItem.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  postId: PropTypes.number.isRequired,
};

export default PostListItem;
