import React from 'react';
import ReactQuill from 'react-quill';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { writePost } from 'Actions';
import { PostTitleInput } from 'Components';
import './Editor.css';

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.quillRef = null;
    this.inputElement = null;
  }

  render() {
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

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (quillRef, inputElement) => {
      dispatch(writePost(quillRef.getEditorContents(), inputElement.value));
    },
  };
};

Editor.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default connect(undefined, mapDispatchToProps)(Editor);
