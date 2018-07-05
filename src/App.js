import { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React from 'react';
import { connect } from 'react-redux'
import change from './change'
import update from './update'

class App extends Component {
  constructor() {
    super();

    console.log('hello in constructor');
    console.log('hello in constructor1');
    console.log('hello in constructor3');
    console.log('hello in constructor4');

    this.state = {
      name: 'xxxx',
      persons:[]
    };
  }
  componentDidMount(){
    let component = this;
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(function(x) {return x.json()})
    .then(function(result) {
      console.log(result);
      component.setState({persons:result})
      console.log(component.state);
    })
  }
  onChange(e) {
    console.log(this.props);
    this.props.change(e.target.value);
  }
  onChange1(e){
    this.props.update(e.target.value);
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

  Topic = ({ match }) => (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  );
  Topics = ({ match }) => (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>
  
      <Route path={`${match.url}/:topicId`} component={this.Topic} />
      <Route
        exact
        path={match.url}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );

  render() {
    
    return (
      <Router>
      <div>
        <div>
        {this.state.persons.map(ele => {return <p id={ele.id}>{ele.address.geo.lat}</p>})}

        </div>
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
        {/* <Hello msg={this.state.name} onXChange={this.onChange.bind(this)} /> */}
      <input type='text' onChange={this.onChange.bind(this)}/>
        <p>
          {this.props.title}
          </p>
        <hr />

        <input type='text' onChange={this.onChange1.bind(this)}/>

        <Route exact path="/" component={this.Home} />
        <Route path="/about" component={this.About} />
         <Route path="/topics" component={this.Topics} /> 
      </div>
      </Router>
    );
  }
}
function mapStateToProps(state) {
  return {title:state.title}
}
function mapDispatchToProps(dispatch){
  return {
    change(title){
      dispatch(change(title));
    },
    update(title){
      dispatch(update(title));
    }
  }
}
export default connect(
  mapStateToProps,mapDispatchToProps
  
)(App)