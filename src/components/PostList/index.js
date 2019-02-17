import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PostListItem, { PostPropTypes } from './PostListItem';
import './index.css';

class PostList extends Component {
  render() {
    const { posts } = this.props;
    console.log('PostList posts', posts);
    return (
      <ul className="PostList">
        <div className="header">
          <button type="button">new post</button>
          <h1>PostList</h1>
        </div>
        <div className="body">
        {posts.map((post, index) => (
          <PostListItem key={index} post={post} />
        ))}
        </div>
      </ul>
    );
  }
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(PostPropTypes).isRequired
}

export default PostList;
