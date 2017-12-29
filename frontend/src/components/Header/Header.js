import React from 'react';
import { BlogTitle, BlogTopic } from 'Components';
import './Header.css';

const Header = () => {
  return (
    <div className='title_container'>
      <BlogTitle />
      <BlogTopic />
      <hr />
    </div>
  );
};

export default Header;
