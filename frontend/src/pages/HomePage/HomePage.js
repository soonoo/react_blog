import React from 'react';
import { connect } from 'react-redux';
import { Header, PostList } from 'Components';
import { fetchPosts } from 'Actions';
import PropTypes from 'prop-types';
import './HomePage.css';

// eslint-disable-next-line
class HomePage extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    return (
      <div>
        <Header />
        <PostList />
      </div>
    );
  }
}

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(HomePage);
