import React from 'react';
import ReactQuill from 'react-quill';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
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

  componentWillUnmount() {
    this.props.unmount();
  }

  render() {
    if (this.props.status === 0) {
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

    return <Redirect to='/26' />;
  }
}

const mapStateToProps = (state) => {
  return {
    status: state.response,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (quillRef, inputElement) => {
      dispatch(writePost(quillRef.getEditorContents(), inputElement.value));
    },
  };
};

Editor.propTypes = {
  onClick: PropTypes.func.isRequired,
  status: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
