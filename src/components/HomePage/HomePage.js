import React from 'react';
// eslint-disable-next-line
import ReactQuill from 'react-quill';
import Title from '../Title/Title';
import Header from '../Header/Header';
import Post from '../Post/Post';
import './HomePage.css';

// eslint-disable-next-line
class HomePage extends React.Component {
  render() {
    return (
      <div className='title_container'>
        <Title />
        <Header />
        <hr />
        <Post />
        <div className='quill_container'>
          <ReactQuill />
          </div>
      </div>
    );
  }
}

export default HomePage;
