import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import PostListItem from './PostListItem';
import './index.css';
import { setSortPosts } from '../../actions/postsSort';

class PostList extends Component {
  handleNewPost = () => {
    const { history } = this.props;
    history.push('/posts/new');
  }

  handleChangeOrder = ({ target: { value } }) => {
    const { setSortPosts } = this.props;
    setSortPosts(value);
  }

  render() {
    const { postsIds, postsSort, headerText } = this.props;
    return (
      <ul className="PostList">
        <div className="header">
          <button type="button" onClick={this.handleNewPost}>new post</button>
          <h1>{headerText} posts</h1>
          <div>
            <h4>Sort by</h4>
            <select value={postsSort} onChange={this.handleChangeOrder}>
              {['date asc', 'date desc', 'vote asc', 'vote desc'].map(optionField => {
                return (
                  <option key={optionField} value={optionField}>{optionField}</option>
                );
              })}
            </select>
          </div>
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

function filterDateAsc(posts) {
  return (postIdA, postIdB) => {
    const postA = posts[postIdA];
    const postB = posts[postIdB];
    return postA.timestamp - postB.timestamp;
  };
}

function filterDateDesc(posts) {
  return (postIdA, postIdB) => {
    const postA = posts[postIdA];
    const postB = posts[postIdB];
    return postB.timestamp - postA.timestamp;
  };
}

function filterVoteAsc(posts) {
  return (postIdA, postIdB) => {
    const postA = posts[postIdA];
    const postB = posts[postIdB];
    return postA.voteScore - postB.voteScore;
  };
}

function filterVoteDesc(posts) {
  return (postIdA, postIdB) => {
    const postA = posts[postIdA];
    const postB = posts[postIdB];
    return postB.voteScore - postA.voteScore;
  };
}

function getPostFilterFuction(posts, postsSort) {
  switch (postsSort) {
    case 'date asc':
      return filterDateAsc(posts);
    case 'date desc':
      return filterDateDesc(posts);
    case 'vote asc':
      return filterVoteAsc(posts);
    case 'vote desc':
      return filterVoteDesc(posts);
    default:
      return (postId, _) => postId;
  }
}

function mapStateToProps({ posts, postsSort }, { postsIds }) {
  let filterFn = getPostFilterFuction(posts, postsSort);
  return {
    postsIds: postsIds.sort(filterFn),
    postsSort,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setSortPosts: (order) => dispatch(setSortPosts(order)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PostList));
