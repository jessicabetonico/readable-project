import React, { Component } from 'react';
import { connect } from 'react-redux';

import PostListItem from '../../components/PostList/PostListItem';
import CommentList from './components/CommentList';
import "./index.css";

class PostDetailsContainer extends Component {
  handleHomeBtnClick = () => {
    const { history } = this.props;
    history.push('/');
  }

  render() {
    const { postId } = this.props;
    return (
      <div className="PostDetailsContainer">
        <button type="button" onClick={this.handleHomeBtnClick}>Home</button>
        <PostListItem postId={postId} />
        <CommentList postId={postId} />
      </div>
    )
  }
}

function mapStateToProps(_, { match: { params: { postId } } }) {
  return {
    postId,
  };
}

export default connect(mapStateToProps)(PostDetailsContainer);
