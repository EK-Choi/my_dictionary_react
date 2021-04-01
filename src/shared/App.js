import './App.css';
import React from "react";

import {BrowserRouter, Route} from "react-router-dom";
import {ConnectedRouter} from "connected-react-router";
import {history} from "../redux/configureStore";

import PostList from "../pages/PostList";
import PostWrite from "../pages/PostWrite";
import {Grid, Text, Input, Button} from "../elements/index";

function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Route path="/" exact component={PostList}/>
        <Route path="/write" exact component={PostWrite}/>
      </ConnectedRouter>
      <Button is_float text="+" _onClick={() => {history.push("/write")}}></Button>
    </React.Fragment>
  );
}

export default App;
