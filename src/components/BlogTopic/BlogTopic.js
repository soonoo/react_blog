import { Link } from 'react-router-dom';
import React from 'react';
import FaPencilSquare from 'react-icons/lib/fa/pencil-square';
import './BlogTopic.css';

const BlogTopic = () => {
  return (
    <div className='links'>
      <ul className='title_bar'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/write'><FaPencilSquare color='black' size={22} /></Link></li>
      </ul>
    </div>
  );
};

export default BlogTopic;
