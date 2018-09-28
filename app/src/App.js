import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, About, Posts, MovieList } from 'pages';
import MenuBar from 'components/MenuBar';

class App extends Component {

  render() {
    
    return (
      <div>
        <MenuBar />
        <Route exact path="/" component={MovieList} />
        {/* 라우트의 경로에 특정 값을 넣는 방법
        1. params를 사용하는 방법 
        1-1. 
        <Route exact path="/about" component={About}/>
        <Route path="/about/:name" component={About}/>
        1-2. */}
        <Route path="/about/:name?" component={About}/>
        {/* 2. Query String을 사용하는 방법 */}

        <Route path="/posts" component={Posts}/>
      </div>
    );
  }
}

export default App;
