import React from 'react';
import './App.css';

import NewPipeComp from './components/newpipe.js';
import CurrentPipeComp from './components/currentpipe.js';
import ButtonsComp from './components/buttons.js';

import funcs from './pipebusiness/pipelogic.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = { todo: "" };
    this.pipeLine = new funcs.PipeLine();
  }

  onSavePipe = (l, w, q) => {
    console.log(l, w, q);
    this.pipeLine.insert(l, w, q);
    this.setState({ todo: null });
  }

  onClick = (e) => {
    const todo = e.target.getAttribute('todo');
    // console.log('Should do a click thing', this.todo);
    if (todo) {
      this.setState({ todo: todo });
      if (todo === 'save') {
        console.log("Do Save Stuff");
      } else if (todo === 'cancel') {
        console.log("Do Save Stuff");
      } else if (todo === 'next') {
        this.pipeLine.next();
      } else if (todo === 'prev') {
        this.pipeLine.prev();
      }
    }
  }

  render() {
    console.log("!!! - in App.rendor", this.state.todo);

    let output = [];

    if (this.state.todo === "new") {
      output.push(<NewPipeComp key="new" onSave={this.onSavePipe} />);
    } else {
      if (this.pipeLine.get()) {
        output.push(<CurrentPipeComp key="current" pipe={this.pipeLine.get()} />);
      }
      output.push(<ButtonsComp key="buttons" />);
    }


    return (
      <div onClick={this.onClick} className="App">
        <h1>Pipe Linked List v02</h1>;
        {output}
      </div>
    )
  }
}

export default App;
