import * as React from 'react';
import CategoryList from '../PostList/components/CategoryList';
import PostList from '../../components/PostList';

class PostListCategoryContainer extends React.Component {
  render() {
    return (
      <div>
      	<CategoryList categories={[{name: 'category01'}, {name: 'category02'}, {name: 'category03'}]} />
        <PostList posts={[]} />
      </div>
    )
  }
  
}

export default PostListCategoryContainer;
