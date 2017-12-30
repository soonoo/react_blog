import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { PostListItem } from 'Components';
import './PostList.css';

const PostList = ({ posts }) => {
  const postItems = posts.map((item) => {
    return <PostListItem key={item.id} title={item.title} date={item.post_date} />;
  });

  return (
    <div className='post_list_container'>
      <ul className='post_list'>{postItems}</ul>
    </div>
  );
};

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    contents: PropTypes.string,
    post_date: PropTypes.string,
  })).isRequired,
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps)(PostList);
