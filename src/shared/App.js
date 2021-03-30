import './App.css';
import React from "react";

import {BrowserRouter, Route} from "react-router-dom";

import PostList from "../pages/PostList";
import PostWrite from "../pages/PostWrite";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Route path="/" exact component={PostList}/>
        <Route path="/write" exact component={PostWrite}/>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
