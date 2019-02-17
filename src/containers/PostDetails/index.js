import React, { Component } from 'react';

import PostListItem from '../../components/PostList/PostListItem';

const postMock = {
  title: 'Title 01',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus urna neque viverra justo nec ultrices. Placerat duis ultricies lacus sed turpis tincidunt id aliquet risus. Sagittis nisl rhoncus mattis rhoncus urna neque viverra. Pellentesque massa placerat duis ultricies lacus sed. Nibh mauris cursus mattis molestie a iaculis. Condimentum lacinia quis vel eros donec ac odio tempor.',
  author: 'Author 01',
  category: 'Categoty 01',
};

class PostDetailsContainer extends Component {
  render() {
    return (
      <PostListItem post={postMock} />
    )
  }
}

export default PostDetailsContainer;
