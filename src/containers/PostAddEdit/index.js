import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PostAddEdit from './components';
import { handleAddPost, handleUpdatePost } from '../../actions/posts';

class PostAddEditContainer extends Component {
  handleSubmitPost = (post) => {
    const { handleAddPost, handleUpdatePost, history } = this.props;

    if (!post.id) {
      handleAddPost(post);
    } else {
      handleUpdatePost(post.id, post);
    }
    history.push('/');
  }

  handleHomeClick = () => {
    const { history } = this.props;
    history.push('/');
  }

  render() {
    const { post, categories } = this.props;
    return (
      <div>
        <button type="button" onClick={this.handleHomeClick}>Home</button>
        <PostAddEdit onSubmitPost={this.handleSubmitPost} post={post} categories={categories} />
      </div>
    );
  }
}

function mapStateToProps({ posts, categories }, { match: { params: { id } } }) {
  const post = posts[id];
  return {
    post,
    categories,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleAddPost: (post) => dispatch(handleAddPost(post)),
    handleUpdatePost: (id, post) => dispatch(handleUpdatePost(id, post)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PostAddEditContainer));
