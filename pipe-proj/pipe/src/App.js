import React from 'react';
import './App.css';

import NewPipeComp from './components/NewPipeComp.js';
import CurrentPipeComp from './components/CurrentPipeComp.js';
import ButtonsComp from './components/ButtonsComp.js';
import ProjectLoadComp from './components/ProjectLoadComp';
import ProjectSaveComp from './components/ProjectSaveComp';

import pipeFuncs from './pipebusiness/pipelogic.js';
import commFuncs from './pipebusiness/communicate.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = { todo: "" };
    this.pipeline = new pipeFuncs.PipeLine();
  }

  onSavePipe = (l, w, q) => {
    // console.log(l, w, q);
    this.pipeline.insert(l, w, q);
    this.setState({ todo: 'show' });
  }

  onShow = () => {
    this.setState({ todo: 'show' });
  }

  onClick = async (e) => {
    const todo = e.target.getAttribute('todo');

    // console.log('onClick', todo);
    if (todo) {
      this.setState({ todo: todo });

      if (todo === 'newproject') {
        this.pipeline = new pipeFuncs.PipeLine();

      } else if (todo === 'savepage') {
        if (!this.pipeline.get()) {
          this.setState({ todo: "show" });
        }

      } else if (todo === 'load') {
        const id = e.target.getAttribute("id");
        const name = e.target.textContent;

        this.pipeline = new pipeFuncs.PipeLine();
        this.pipeline.id = id;
        this.pipeline.name = name;

        const loaddata = await commFuncs.loadProject(id);
        this.pipeline.loadFromJSON(loaddata);

        this.setState({ todo: "show" });

      } else if (todo === 'next') {
        this.pipeline.next();

      } else if (todo === 'prev') {
        this.pipeline.prev();
      }
    }
  }

  render() {
    let output = [];

    // Note... key is a react thing and not a functional attribute
    if (this.state.todo === "new") {
      output.push(<NewPipeComp key="new" onSave={this.onSavePipe} />);

    } else if (this.state.todo === "savepage") {
      output.push(<ProjectSaveComp key="save" pipeline={this.pipeline} show={this.onShow} />);

    } else if (this.state.todo === "projects") {
      output.push(<ProjectLoadComp key="projects" />);

    } else {
      if (this.pipeline.get()) {
        output.push(<CurrentPipeComp key="current" pipeline={this.pipeline} />);
      }
      output.push(<ButtonsComp key="buttons" />);
    }

    return (
      <div onClick={this.onClick} className="App">
        <h1>Pipe Linked List v.05</h1>
        {output}
      </div>
    )
  }
}

export default App;
