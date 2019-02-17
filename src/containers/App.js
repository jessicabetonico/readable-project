import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom'; 

import './App.css';
import PostListContainer from './PostList';
import PostListCategoryContainer from './PostListCategory';
import PostDetailsContainer from './PostDetails';

class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={PostListContainer} />
            <Route path="/:category/posts" component={PostListCategoryContainer} />
            <Route path="/posts/:id" component={PostDetailsContainer} />
            <Route component={() => (<div>Not found 404</div>)} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
