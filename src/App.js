import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Classroom extends Component {
  static defaultProps = {
    height:     150,
    width:      500,
    children:   5,
  };
  render () {
    const { height, width, children, ...props } = this.props;
    var rows = [];
    var startx = 50;
    var stepx  = (width - 100)/(children - 1);
    for (var i = 0; i < children; i++) {
      rows.push(<Child x={startx + i*stepx} y={height/2} />);
    }
    return (
      <svg height={height} width={width}>
        {rows}
      </svg>
    );
  }
}

class Child extends Component {
  static defaultProps = { muddy: false };
  render () {
    return (
      <circle 
        class="child"
        cx={this.props.x}
        cy={this.props.y + this.state.vary}
        r="20"
        stroke="black"
        stroke-width="2"
        fill="red"
      />
    );
  }

  constructor(props) {
    super(props);
    this.state = {vary: 10};
  }

  tick() {
    this.setState({
      vary: this.state.vary * -1
    });
  }

  componentDidMount() {
    this.timerID = setInterval(
        () => this.tick(), 1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <Classroom children="4" width="500"/>
          <Classroom children="3" width="500"/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
