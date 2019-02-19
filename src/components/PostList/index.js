import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import PostListItem from './PostListItem';
import './index.css';

class PostList extends Component {
  handleNewPost = () => {
    const { history } = this.props;
    history.push('/posts/new');
  }

  render() {
    const { postsIds, headerText } = this.props;
    return (
      <ul className="PostList">
        <div className="header">
          <button type="button" onClick={this.handleNewPost}>new post</button>
          <h1>{headerText} posts</h1>
        </div>
        <div className="body">
        {postsIds && (postsIds.length > 0) ?
          postsIds.map((postId, index) => <PostListItem key={index} postId={postId} />)
          : <div>Nenhum post</div>}
        </div>
      </ul>
    );
  }
}

PostList.propTypes = {
  postsIds: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default withRouter(PostList);
