import React, { Component, Fragment } from 'react'

class Pie extends Component {
  polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;

    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  }

  describeArc = (x, y, radius, startAngle, endAngle) => {

    var start = this.polarToCartesian(x, y, radius, endAngle);
    var end = this.polarToCartesian(x, y, radius, startAngle);

    var arcSweep = endAngle - startAngle <= 180 ? "0" : "1";

    var d = [
      "M", start.x, start.y,
      "A", radius, radius, 0, arcSweep, 0, end.x, end.y,
      "L", x, y,
      "L", start.x, start.y
    ].join(" ");

    return d;
  }
  render() {
    return (
      <Fragment>
        <svg>
          <path id="arc1" d={this.describeArc(20, 20, 20, 0, this.props.angle)} fill="orange" />
        </svg>
        <div id="path"></div>
      </Fragment>
    )
  }
}

export default Pie
