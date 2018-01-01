import React from 'react';
import ReactQuill from 'react-quill';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { writePost, unmountWrite } from 'Actions';
import { PostTitleInput } from 'Components';
import './Editor.css';

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.quillRef = null;
    this.inputElement = null;
  }

  componentWillUnmount() {
    this.props.unmount();
  }

  render() {
    if (this.props.status) {
      return <Redirect to={`/${this.props.postId}`} />;
    }

    return (
      <div className='quill_container'>
        <PostTitleInput titleInputRef={(ipnut) => { this.inputElement = ipnut; }} />
        <ReactQuill ref={(quill) => { this.quillRef = quill; }} />
        <input
          className='post_button'
          value='제출하기'
          type='submit'
          onClick={() => { return this.props.onClick(this.quillRef, this.inputElement); }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    status: state.postWrite.status,
    postId: state.postWrite.postId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (quillRef, inputElement) => {
      dispatch(writePost(quillRef.getEditorContents(), inputElement.value));
    },
    unmount: () => {
      dispatch(unmountWrite());
    },
  };
};

Editor.propTypes = {
  onClick: PropTypes.func.isRequired,
  status: PropTypes.bool.isRequired,
  unmount: PropTypes.func.isRequired,
  postId: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
