import React from 'react';
import { Header } from 'Components';
import { PostContainer } from 'Containers';
import './HomePage.css';

// eslint-disable-next-line
class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <PostContainer />
      </div>
    );
  }
}

export default HomePage;
