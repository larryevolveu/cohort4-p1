import React from 'react';
import './App.css';

import NewPipeComp from './components/NewPipeComp.js';
import CurrentPipeComp from './components/CurrentPipeComp.js';
import ButtonsComp from './components/ButtonsComp.js';
import ProjectComp from './components/ProjectComp';

import funcs from './pipebusiness/pipelogic.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = { todo: "" };
    this.pipeLine = new funcs.PipeLine();
  }

  onSavePipe = (l, w, q) => {
    // console.log(l, w, q);
    this.pipeLine.insert(l, w, q);
    this.setState({ todo: null });
  }

  onClick = (e) => {
    const todo = e.target.getAttribute('todo');
    // console.log('Should do a click thing', this.todo);
    if (todo) {
      // console.log(todo);
      
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
  
  getPipeLine = () => {
    return this.pipeLine;
  }

  render() {
    // console.log("!!! - in App.rendor", this.state.todo);

    let output = [];

    if (this.state.todo === "new") {
      output.push(<NewPipeComp key="new" onSave={this.onSavePipe} />);
    } else {
      if (this.pipeLine.get()) {
        output.push(<CurrentPipeComp key="current" pipe={this.pipeLine.get()} />);
      } else {
        output.push(<ButtonsComp key="buttons" />);
      }
    }


    return (
      <div onClick={this.onClick} className="App">
        <h1>Pipe Linked List v.03</h1>
        {output}
        <ProjectComp/>
      </div>
    )
  }
}

export default App;
