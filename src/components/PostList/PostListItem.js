import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './PostListItem.css';
import { handleRemovePost, handleVoteUpPost, handleVoteDownPost } from '../../actions/posts';

class PostListItem extends Component {
  handlePostViewClick = () => {
    const { history, postId, post: { category } } = this.props;
    history.push(`/${category}/${postId}`);
  }

  handlePostEditClick = () => {
    const { history, postId } = this.props;
    history.push(`/posts/edit/${postId}`);
  }

  render() {
    const { postId, post, handleRemovePost, handleVoteUpPost, handleVoteDownPost } = this.props;
    if (!post || !post.id) {
      return (
        <div>Post não encontrado</div>
      );
    }
    const { title, body, author, category, voteScore, commentCount} = post;
    return (
      <li className="PostListItem">
        <div className="header">
          <h1>{title}</h1>
          <button type="button" onClick={this.handlePostViewClick}>View</button>
          <button type="button" onClick={this.handlePostEditClick}>editar</button>
          <button type="button" onClick={() => handleRemovePost(postId)}>excluir</button>
        </div>
        <div className="subheader">
          <p>Score: {voteScore}</p>
          <button type="button" onClick={() => handleVoteUpPost(postId)}>vote up</button>
          <button type="button" onClick={() => handleVoteDownPost(postId)}>vote down</button>
        </div>
        <div className="body">
          <p>{body}</p>
        </div>
		    <div className="footer">
          <h4>{category}</h4>
          <h4>{commentCount ? commentCount : 'No'} Comments</h4>
          <h4>{author}</h4>
        </div>
      </li>
    );
  }
}

PostListItem.propTypes = {
  postId: PropTypes.string.isRequired
}


function mapStateToProps({ posts }, { postId }) {
  return {
    post: posts[postId],
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleRemovePost: (postId) => dispatch(handleRemovePost(postId)),
    handleVoteUpPost: (postId) => dispatch(handleVoteUpPost(postId)),
    handleVoteDownPost: (postId) => dispatch(handleVoteDownPost(postId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PostListItem));
