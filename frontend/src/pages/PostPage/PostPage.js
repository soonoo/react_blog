/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Post } from 'Components';
import { fetchPost } from 'Actions';
import './PostPage.css';

class PostPage extends React.Component {
  constructor(props) {
    super(props);
    this.editorRef = null;
  }

  componentDidMount() {
    this.props.dispatch(fetchPost(this.props.match.params.postId));
  }

  componentDidUpdate() {
    this.editorRef.innerHTML = this.props.contents;
  }

  render() {
    return (
      <div className='ql-snow'>
        <div ref={(e) => {this.editorRef = e;} }></div>
      </div>
    )
  };
}

function mapStateToProps(state) {
  return {
    contents: state.post.contents,
  };
}

PostPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(PostPage);
