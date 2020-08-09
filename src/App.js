import React from "react";
import "./App.scss";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Homepage from "./components/Homepage/Homepage";
import Header from "./components/Template/Header/Header";
import Posts from "./components/Posts/Posts";
import Post from "./components/Posts/Post/Post";
import Footer from "./components/Template/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route exact path="/posts" component={Posts}></Route>
          <Route path="/post" component={Post}></Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
