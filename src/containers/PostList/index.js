import React, { Component } from 'react';
import { connect } from 'react-redux';

import PostList from '../../components/PostList';
import CategoryList from './components/CategoryList';
import './index.css';

class PostListContainer extends Component {
  render() {
    const { postsIds, categories } = this.props;
    return (
      <div className="PostListContainer">
        <CategoryList categories={categories} />
        <PostList headerText="" postsIds={postsIds} />
      </div>
    );
  }
}

function mapStateToProps({ posts, categories }) {
  return {
    postsIds: Object.keys(posts),
    categories,
  };
}

export default connect(mapStateToProps)(PostListContainer);
