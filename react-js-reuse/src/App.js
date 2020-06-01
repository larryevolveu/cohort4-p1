import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import OurPepsComp from './OurPepsComp.js';

import peps from './person.js';


let p1 = new peps.Person();
let p2 = new peps.Person()

let arr = [
  {fname:"Larry", lname:"Shumlich"},
  {fname:"Lorraine", lname:"Shumlich"},
  {fname:"Jessica", lname:"Shumlich"},
]

function App() {
  console.log("Hello from App");
  const [age, setAge] = useState(0);

  useEffect(() => {
    // This effect will run any time a state variable changes
    console.log('----useEffect: general');
  });
  
  useEffect(() => {
    // This effect will run any time a state variable changes
    console.log('----useEffect: Only run once');
  },[]);


  function myClick(e) {
    console.log("Hello from myClick");
    p1.birthday();
    setAge(p1.age);
    // setStuff(p1.age);
  }
  
  let lop = arr.map((v,i) => <div key={i}> {v.fname}  </div>);
  let lop2 = arr.map((v,i) => <OurPepsComp person={v} key={i} />);

  return (
    <div className="App">
      <h1>Hello World from Larry</h1>
      <h3 onClick={myClick}>Do the birthday thing</h3>
      P1 is {age} old.<br/>
      P2 is {p2.age} old.<br/>
      {lop}
      {lop2}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
