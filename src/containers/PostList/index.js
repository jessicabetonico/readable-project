import React, { Component } from 'react';

import PostList from '../../components/PostList';
import CategoryList from './components/CategoryList';

const postsMock = [{
  id: '1',
  title: 'Title 01',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus urna neque viverra justo nec ultrices. Placerat duis ultricies lacus sed turpis tincidunt id aliquet risus. Sagittis nisl rhoncus mattis rhoncus urna neque viverra. Pellentesque massa placerat duis ultricies lacus sed. Nibh mauris cursus mattis molestie a iaculis. Condimentum lacinia quis vel eros donec ac odio tempor.',
  author: 'Author 01',
  category: 'Categoty 01',
}, {
  id: '2',
  title: 'Title 02',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Ut sem nulla pharetra diam sit amet nisl suscipit. Faucibus turpis in eu mi bibendum neque egestas congue quisque. Elementum curabitur vitae nunc sed velit dignissim. Dignissim suspendisse in est ante.',
  author: 'Author 02',
  category: 'Categoty 02',
}];

class PostListContainer extends Component {
  render() {
    return (
      <div>
      	<CategoryList categories={[{name: 'category01'}, {name: 'category02'}, {name: 'category03'}]} />
        <PostList posts={postsMock} />
      </div>
    );
  }
}

export default PostListContainer;
