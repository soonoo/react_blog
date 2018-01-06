import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Post.css';

const Post = ({ contents }) => {
  return (
    // eslint-disable-next-line
    <div className='ql-container ql-snow'>
      <div className='ql-editor'>{contents}</div>
    </div>
  );
};

Post.propTypes = {
  contents: PropTypes.string,
};

Post.defaultProps = {
  contents: '',
};

function mapStateToProps(state) {
  return {
    contents: state.post,
  };
}

export default connect(mapStateToProps)(Post);
