import React from 'react';
import PropTypes from 'prop-types';
import './PostTitleInput.css';

const PostTitleInput = ({ titleInputRef }) => {
  return <input className='input_post_title' ref={titleInputRef} />;
};

PostTitleInput.propTypes = {
  titleInputRef: PropTypes.element.isRequired,
};

export default PostTitleInput;
