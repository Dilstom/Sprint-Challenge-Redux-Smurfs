import React from 'react';
import { login } from '../actions';
import { connect } from 'react-redux';

class LoginForm extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   credentials: {
    username: '',
    password: '',
   },
  };
 }

 handleChange = e => {
  this.setState({
   credentials: { ...this.state.credentials, [e.target.name]: e.target.value },
  });
 };

 login = e => {
  e.preventDefault();
  this.props.login(this.state.credentials).then(res => {
   if (res) {
    this.props.history.push('/api/smurfs');
   }
  });
 };

 render() {
  return (
   <form onSubmit={this.login}>
    <input
     name="username"
     value={this.state.credentials.username}
     placeholder="username"
     onChange={this.handleChange}
    />
    <input
     name="password"
     value={this.state.credentials.password}
     placeholder="password"
     onChange={this.handleChange}
    />
    <button>
     {/* {this.props.loggingIn ? (
      <Loader type="ThreeDots" color="green" height="12" width="26" />
     ) : ( */}
     'Log in'
     {/* )} */}
    </button>
    {this.props.error !== '' ? <h5>{this.props.error}</h5> : null}
   </form>
  );
 }
}

const mapStateToProps = state => {
 console.log('check state in loginform: ', state);
 return {
  error: state.errorLogin,
 };
};

export default connect(
 mapStateToProps,
 { login }
)(LoginForm);
