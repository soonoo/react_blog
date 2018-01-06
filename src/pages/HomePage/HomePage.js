import React from 'react';
import { connect } from 'react-redux';
import { PostList } from 'Components';
import { fetchPostList } from 'Actions';
import PropTypes from 'prop-types';
import './HomePage.css';

// eslint-disable-next-line
class HomePage extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPostList());
  }

  render() {
    return (
      <div>
        <PostList />
      </div>
    );
  }
}

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(HomePage);
