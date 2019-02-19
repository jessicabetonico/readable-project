import React, { Component } from 'react';
import { connect } from 'react-redux';

import CommentListItem from './CommentListItem';
import { handleReceiveComments } from '../../../actions/comments';

class CommentList extends Component {
  componentDidMount() {
    const { postId, receiveComments } = this.props;
    receiveComments(postId);
  }

  render() {
    const { comments } = this.props;
    return (
      <ul className="CommentList">
        {comments && comments.map((comment, index) => {
          return (
            <CommentListItem key={index} comment={comment} />
          );
        })}
      </ul>
    );
  }
}

function mapStateToProps({ posts }, { postId }) {
  const post = posts[postId];
  return {
    comments: post ? post.comments : [],
  };
}

function mapDispatchToProps(dispatch) {
  return {
    receiveComments: (postId) => dispatch(handleReceiveComments(postId))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
