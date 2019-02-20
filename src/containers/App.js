import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom'; 
import { connect } from 'react-redux';

import './App.css';
import PostListContainer from './PostList';
import PostAddEditContainer from './PostAddEdit';
import PostListCategoryContainer from './PostListCategory';
import PostDetailsContainer from './PostDetails';
import { handleInitialData } from '../actions/shared';

class App extends Component {
  componentDidMount() {
    const { handleInitialData } = this.props;
    handleInitialData();
  }
 
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={PostListContainer} />
            <Route path="/posts/new" component={PostAddEditContainer} />
            <Route path="/posts/edit/:id" component={PostAddEditContainer} />
            <Route exact path="/:category" component={PostListCategoryContainer} />
            <Route path="/:category/:postId" component={PostDetailsContainer} />
            <Route component={() => (<div>Not found 404</div>)} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleInitialData: () => dispatch(handleInitialData()),
  };
}

export default connect(null, mapDispatchToProps)(App);
