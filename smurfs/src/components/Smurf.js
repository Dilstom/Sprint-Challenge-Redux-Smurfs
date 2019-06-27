import React from 'react';

const Smurf = props => {
 return (
  <div>
   <div>Name: {props.smurf.name}</div>
   <div>Age: {props.smurf.age}</div>
   <div>Height: {props.smurf.height}</div>
  </div>
 );
};

export default Smurf;
