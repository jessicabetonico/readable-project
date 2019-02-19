import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './CategoryList.css'

class CategoryList extends Component {
  render() {
    const { categories } = this.props;
    return (
      <ul className="CategoryList">
        Categories:
        {categories && categories.map((category, index) => (
          <Link className="category" key={index} to={`/${category.name}/posts`}>{category.name}</Link>
        ))}
      </ul>
    );
  }
}

const CategoryPropTypes = PropTypes.shape({
  name: PropTypes.string.isRequired,
  path: PropTypes.string
});

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(CategoryPropTypes).isRequired,
};

export default CategoryList;
