import React, { Component } from 'react';

/// SVG circle, one of the shapes used by Overlap
class Circle extends Component {
  static defaultProps = {fill:"empty"};
  render() {
    const fill = "fill-" + this.props.fill;
    return (
      <circle class={fill} cx={this.props.x} cy={this.props.y} r={20} />
    );
  }
}

/// SVG rectangle, one of the shapes used by Overlap
class Rect extends Component {
  static defaultProps = {fill:"empty"};
  render() {
    const fill = "fill-" + this.props.fill;
    const width = 40;
    const height = 40;
    return (
      <rect class={fill} 
        x={this.props.x - width/2} y={this.props.y - height/2}
        width={width} height={height} />
    );
  }
}

/// Figure representing the local view of the Overlap Problem
class Overlap extends Component {
  render() {
    const height = 100;
    const width  = 400;
    const cx = width/2;
    const cy = height/2;

    return (
      <svg class="Overlap" height={height} width={width}>
        <Circle x={cx-100}  y={cy} />
        <Circle x={cx}      y={cy} fill="hatch" />
        <Rect   x={cx+100}  y={cy} fill="hatch" />
        <text   x={cx-140}  y={cy+40}>empty circle</text>
        <text   x={cx-35}  y={cy+40}>filled circle</text>
        <text   x={cx+65}  y={cy+40}>filled square</text>
      </svg>
    );
  }
}

/// Figure representing the global view of the Overlap Problem
class OverlapGlobal extends Component {
  render() {
    const width  = 400;
    const height = 250;
    const cx = width/2;
    const cy = height/2;
    return (
      <svg class="Overlap" width={width} height={height}>
        <line x1={cx-100} y1={cy-75} x2={cx+100} y2={cy-78} />
        <line x1={cx-100} y1={cy-75} x2={cx+100} y2={cy-28} />
        <line x1={cx-100} y1={cy}    x2={cx+100} y2={cy-28} />
        <line x1={cx-100} y1={cy}    x2={cx+100} y2={cy+22} />
        <line x1={cx-100} y1={cy+75} x2={cx+100} y2={cy+22} />
        <line x1={cx-100} y1={cy+75} x2={cx+100} y2={cy+72} />

        <Circle x={cx-100} y={cy-75} />
        <Circle x={cx-100} y={cy}    fill="hatch" />
        <Rect   x={cx-100} y={cy+75} fill="hatch" />

        <text x={cx+100} y={cy-75}>"empty"</text>
        <text x={cx+100} y={cy-25}>"circle"</text>
        <text x={cx+100} y={cy+25}>"filled"</text>
        <text x={cx+100} y={cy+75}>"square"</text>


      </svg>
    );
  }
}

export { Overlap, OverlapGlobal };
