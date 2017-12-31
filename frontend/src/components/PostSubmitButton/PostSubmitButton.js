import React from 'react';
import { withRouter } from 'react-router-dom';

const PostSubmitButton = () => {
  return (
    <input
      className='post_button'
      value='제출하기'
      type='submit'
      onClick={() => { return this.props.onClick(this.quillRef, this.inputElement); }}
    />
  );
};