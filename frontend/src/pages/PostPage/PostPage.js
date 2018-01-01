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
  }

  componentDidMount() {
    this.props.dispatch(fetchPost(this.props.match.params.postId, this.editHtml));
  }

  render() {
    return (
      <div className='ql-snow'>
        <div dangerouslySetInnerHTML={{__html: this.props.contents}} ></div>
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
