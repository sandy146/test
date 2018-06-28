import { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React from 'react';
import Hello from './Hello';
export default class App extends Component {
  constructor() {
    super();

    console.log('hello in constructor');
    console.log('hello in constructor1');
    console.log('hello in constructor3');
    console.log('hello in constructor4');

    this.state = {
      name: 'xxxx'
    };
  }
  onChange(object) {
    console.log(object);
    this.setState({ name: object.mob });
  }

  Home = () => (
    <div>
      <h2>Home</h2>
    </div>
  );

  About = () => (
    <div>
      <h2>Aboutfsdfsa</h2>
    </div>
  );
  render() {
    
    return (
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
        <Hello msg={this.state.name} onXChange={this.onChange.bind(this)} />
        <p>
          Start editing to see some magic happen :)
          </p>
        <hr />

        <Route exact path="/" component={this.Home} />
        <Route path="/about" component={this.About} />
       {/*  <Route path="/topics" component={Topics} /> */}
      </div>
      </Router>
    );
  }
}