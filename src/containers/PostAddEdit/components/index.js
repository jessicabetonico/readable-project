import React, { Component } from 'react';

class PostAddEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      category: '',
    };
  }

  componentDidMount() {
    const { categories, post } = this.props;
    this.updateCategoriesState(categories);
    this.updatePostState(post);
  }

  componentDidUpdate(prevProps) {
    const { post } = this.props;
    if (this.hasUpdatedPost(prevProps.post, post)) {
      this.updatePostState(post);    
    }
  }

  hasUpdatedPost = (prevPost, post) => {
    return !prevPost || (post && prevPost.id !== post.id);
  }

  updateCategoriesState = (categories) => {
    this.setState({
      categories: categories && categories.length > 0 ? categories[0].name : '',
    })
  }

  updatePostState = (post) => {
    if (post) {
      const { id, title, body, category } = post;
      this.setState({
        id,
        title,
        body,
        category,
      });
    }
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, body, category } = this.state;
    const { post, onSubmitPost } = this.props;
    onSubmitPost({
      id: post ? post.id : undefined,
      title,
      body,
      category,
    });
  }

  render() {
    const { post, categories } = this.props;
    const { title, body, category } = this.state;
    return (
      <form className="PostAddEdit" onSubmit={this.handleSubmit}>
        <div className="header">
          <h1>{post && post.id ? 'Update' : 'New'} post</h1>
        </div>
        <div className="fields">
          <div className="field">
            <label>Título</label>
            <input name="title" type="text" value={title} onChange={this.handleChange} />
          </div>
          <div className="field">
            <label>Texto</label>
            <textarea name="body" type="text" value={body} onChange={this.handleChange} />
          </div>
          { (!post || !post.id) &&
            (
              <div className="field">
                <label>Categoria</label>
                <select
                  name="category"
                  value={category}
                  onChange={this.handleChange}
                >
                  {categories.map((category, index) => (
                    <option key={index} value={category.name}>{category.name}</option>
                  ))}
                </select>
              </div>
            )
          }
        </div>
        <div className="actions">
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

export default PostAddEdit;
