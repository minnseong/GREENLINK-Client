import React, { Component } from 'react';
import './App.css';

import {BrowserRouter, Route, Switch} from "react-router-dom";
import CarouselContainer from './components/Home';
import About from './components/About';
import Campaign from './components/Campaign';
import Login from './components/Login';
import MyPage from './components/MyPage';
import Register from './components/Register';
import List from './components/notice/List';
import Read from './components/notice/Read';
import Write from './components/notice/Write';
import modify from './components/notice/modify'
import Navbar from './components/Navbar/Navbar';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Navbar/>
          <Switch>
            <Route exact path="/" component={CarouselContainer} />
            <Route exact path="/about" component={About} />
            <Route exact path="/campaign" component={Campaign} />
            <Route exact path="/notice" component={List} />
            <Route exact path="/mypage" component={MyPage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/notice/read/:id?" component={Read} />     
            <Route exact path="/notice/write" component={Write} />
            <Route exact path="/notice/modify/:id?" component={modify} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;