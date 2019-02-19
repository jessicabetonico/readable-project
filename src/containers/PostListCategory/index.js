import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CategoryList from '../PostList/components/CategoryList';
import PostList from '../../components/PostList';
import './index.css';

class PostListCategoryContainer extends React.Component {
  handleHomeBtnClick = () => {
    const { history } = this.props;
    history.push('/');
  }
  
  render() {
    const { categories, postsIds, selectedCategory } = this.props;
    return (
      <div className="PostListCategoryContainer">
        <button type="button" onClick={this.handleHomeBtnClick}>Home</button>
      	<CategoryList categories={categories} />
        <PostList headerText={selectedCategory} postsIds={postsIds} />
      </div>
    )
  }  
}

function mapStateToProps({ categories, posts }, { match: { params: { category } } }) {
  const postsByCategoryIds = Object.keys(posts)
    .filter(postId => posts[postId].category === category);

  return {
    selectedCategory: category,
    categories,
    postsIds: postsByCategoryIds,
  }
}

export default connect(mapStateToProps)(withRouter(PostListCategoryContainer));
