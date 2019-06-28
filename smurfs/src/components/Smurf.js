import React from 'react';
import { connect } from 'react-redux';
import { updateSmurf } from '../actions';

class Smurf extends React.Component {
 constructor() {
  super();
  this.state = {
   show: false,
   smurf: {
    name: '',
    age: '',
    height: '',
   },
  };
 }

 handleChange = e => {
  this.setState({
   smurf: { ...this.state.smurf, [e.target.name]: e.target.value },
  });
  console.log(' handleUupdate: ', this.state.smurf);
 };

 toggleUpdate = e => {
  this.setState({ show: !this.state.show });
 };

 handleSubmit = e => {
  e.preventDefault();
  this.props.updateSmurf(this.props.smurf.id, this.state.smurf);
  this.setState({ show: !this.state.show });
 };

 render() {
  console.log('state in Smurf: ', this.state);
  return (
   <div>
    <div>Name: {this.props.smurf.name}</div>
    <div>Age: {this.props.smurf.age}</div>
    <div>Height: {this.props.smurf.height}</div>
    {this.state.show ? (
     <form onSubmit={this.handleSubmit}>
      <input
       name="name"
       onChange={this.handleChange}
       placeholder={this.props.smurf.name}
       value={this.state.name}
      />
      <input
       name="age"
       onChange={this.handleChange}
       placeholder={this.props.smurf.age}
       value={this.state.age}
      />
      <input
       name="height"
       onChange={this.handleChange}
       placeholder={this.props.smurf.height}
       value={this.state.height}
      />
      <button>Update {this.props.smurf.name}</button>
      <button onClick={this.toggleUpdate}>Cancel</button>
     </form>
    ) : (
     <button onClick={this.toggleUpdate}>Update</button>
    )}
   </div>
  );
 }
}

export default connect(
 null,
 { updateSmurf }
)(Smurf);
