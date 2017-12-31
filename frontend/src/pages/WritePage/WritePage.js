import React from 'react';
import { QuillContainer } from 'Containers';
import './WritePage.css';

function WritePage() {
  return (
    <div>
      <div className='editor_wrapper'>
        <QuillContainer />
      </div>
    </div>
  );
}

export default WritePage;
