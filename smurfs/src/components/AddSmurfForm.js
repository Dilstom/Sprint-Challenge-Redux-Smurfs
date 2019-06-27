import React from 'react';
import { addSmurf } from '../actions';
import { connect } from 'react-redux';

class AddSmurfForm extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   name: '',
   age: '',
   height: '',
  };
 }

 handleChange = e => {
  this.setState({ [e.target.name]: e.target.value });
 };

 handleSubmit = e => {
  e.preventDefault();
  this.props.addSmurf(this.state);
  this.setState({ name: '', age: '', height: '' });
 };

 render() {
  return (
   <div>
    <form onSubmit={this.handleSubmit}>
     <input
      name="name"
      onChange={this.handleChange}
      placeholder="name"
      value={this.state.name}
     />
     <input
      name="age"
      onChange={this.handleChange}
      placeholder="age"
      value={this.state.age}
     />
     <input
      name="height"
      onChange={this.handleChange}
      placeholder="height"
      value={this.state.height}
     />
     <button>Add New Smurf</button>
    </form>
   </div>
  );
 }
}

export default connect(
 null,
 { addSmurf }
)(AddSmurfForm);
