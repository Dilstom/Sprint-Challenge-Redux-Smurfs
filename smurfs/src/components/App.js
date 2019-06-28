import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';
import Smurf from './Smurf';
import AddSmurfForm from './AddSmurfForm';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
 componentDidMount() {
  this.props.getSmurfs();
 }

 render() {
  return (
   <div className="App">
    <h1>SMURFS! 2.0 W/ Redux</h1>
    <Link to="/login">Login Form </Link>

    <Link to="/api/smurfs"> Smurfs Village</Link>
    {localStorage.getItem('userToken') ? null : (
     <h3>Please, login to use this app</h3>
    )}
    <Route path="/login" component={LoginForm} />
    <PrivateRoute path="/api/smurfs" component={Smurfs} />
   </div>
  );
 }
}

const mapStateToProps = state => {
 console.log('state', state);
 return {
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs,
 };
};

export default connect(
 mapStateToProps,
 { getSmurfs }
)(App);
