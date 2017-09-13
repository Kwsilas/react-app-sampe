import React, { Component } from 'react';
import './App.css';
import Home from './container/Home.js';
import CaseStudies from './container/Case-Studies.js';
import Jobs from './container/Jobs.js';
import Customers from './container/Customers.js';
import Blog from './container/Blog.js';
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/casestudies" component={CaseStudies}/>
          <Route path="/jobs" component={Jobs}/>
          <Route path="/customers" component={Customers}/>
          <Route path="/blog" component={Blog}/>
        </div>
      </Router>
    );
  }
}

export default App;
