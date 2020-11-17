import React from 'react';
import Terminal from './Components/Terminal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {command: ''};
  }
  update(command) {
    this.setState({
      command
    });
  }
  exec() {
    // we access internal representation, but we need this in order to have
    // enter in input to trigger enter in terminal
    this.terminal.exec(this.state.command);
    this.update('');
  }
  render() {
    let command = this.state.command;
    return (
      <div>
        <Terminal
          interpreter={(command, term) => {term.echo('you typed ' + command); }}
          outputLimit={0}
          command={command}
          onInit={(term) => {this.terminal = term}}
          onCommandChange={(command) => this.update(command)}
          greetings="ReactJS Terminal"/>
      </div>
    );
  }
}

export default App;
