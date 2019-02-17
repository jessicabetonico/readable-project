import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import './PostListItem.css';

class PostListItem extends Component {
  handlePostClick = () => {
    const { history, post: { id } } = this.props;
    history.push(`/posts/${id}`);
  }
  
  render() {
    const { post: { title, body, author, category, voteScore, commentCount } } = this.props;
    return (
      <li className="PostListItem" onClick={this.handlePostClick}>
        <div className="header">
          <h1>{title}</h1>
          <button type="button">editar</button>
          <button type="button">excluir</button>
        </div>
        <div className="subheader">
          <p>Score: { voteScore > 0 ? voteScore : 0 }</p>
          <button type="button">vote up</button>
          <button type="button">vote down</button>
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

export const PostPropTypes = PropTypes.shape({
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  timestamp: PropTypes.number,
  voteScore: PropTypes.number,
  deleted: PropTypes.bool,
});

PostListItem.propTypes = {
  post: PostPropTypes.isRequired
}

export default withRouter(PostListItem);
