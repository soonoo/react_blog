import React from 'react';
import { Header } from 'Components';
import { QuillContainer } from 'Containers';
import './WritePage.css';

function WritePage() {
  return (
    <div>
      <Header />
      <div className='editor_wrapper'>
        <QuillContainer />
      </div>
    </div>
  );
}

export default WritePage;
