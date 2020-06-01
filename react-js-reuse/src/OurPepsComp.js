import React from 'react';

function OurPepsComp(props) {
    console.log(props);
  return (
    <div className="App">
      <h1>Hello World from OurPeopsComp {props.person.fname}</h1>
      </div>
  );
}

export default OurPepsComp;
