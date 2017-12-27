import React from 'react';
import ReactQuill from 'react-quill';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { writePost } from 'Actions';
import './Editor.css';

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.quillRef = null;
  }

  render() {
    return (
      <div className='quill_container'>
        <ReactQuill ref={(quill) => { this.quillRef = quill; }} />
        <input
          className='post_button'
          value='제출하기'
          type='submit'
          onClick={() => { return this.props.onClick(this.quillRef); }}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (quillRef) => {
      console.log(quillRef.getEditor().container.innerHTML);
      dispatch(writePost(quillRef.getEditor().container.innerHTML));
    },
  };
};

Editor.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default connect(undefined, mapDispatchToProps)(Editor);
