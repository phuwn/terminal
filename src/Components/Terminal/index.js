import React from 'react';
import $ from 'jquery';
import * as terminal from 'jquery.terminal'
import './index.css';

class Terminal extends React.Component {
  componentDidMount() {
    // ignore command
    var {interpreter, command, ...options} = this.props;
    this.terminal = $(this.node).terminal(interpreter, options);
  }
  componentWillUnmount() {
    this.terminal.destroy();
  }
  isCommandControlled() {
    return this.props.command != undefined;
  }
  render() {
    if (this.terminal && this.isCommandControlled()) {
      this.terminal.set_command(this.props.command, true);
    }
    return (
      <div ref={(node) => this.node = node}></div>
    );
  }
}

export default Terminal;