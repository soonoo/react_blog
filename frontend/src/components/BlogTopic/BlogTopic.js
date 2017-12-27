import { Link } from 'react-router-dom';
import React from 'react';
import FaPencilSquare from 'react-icons/lib/fa/pencil-square';
import { HomePage } from 'Pages';
import './BlogTopic.css';

const BlogTopic = () => {
  return (
    <div className='links'>
      <ul className='title_bar'>
        <li><Link to='/' component={HomePage}>Home</Link></li>
        <li><Link to='/articles'>Articles</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/write'><FaPencilSquare color='gray' size={22} /></Link></li>
      </ul>
    </div>
  );
};

export default BlogTopic;
