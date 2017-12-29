import { connect } from 'react-redux';
import { Post } from 'Components';
import { fetchPosts } from 'Actions';

const mapStateToProps = (state) => {
  return {
    content: state.getPosts,
    title: state.getTitle,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => { dispatch(fetchPosts()); },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
