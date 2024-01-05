import React, { Component } from "react";

class MousePositionTracker extends Component {
  constructor() {
    super();
    this.state = {
      mouseX: 0,
      mouseY: 0,
    };
  }

  handleMouseMove = (event) => {
    this.setState({
      mouseX: event.clientX,
      mouseY: event.clientY,
    });

    this.props.onMousePositionChange([event.clientX, event.clientY]);
  };

  componentDidMount() {
    document.addEventListener("mousemove", this.handleMouseMove);
  }

  componentWillUnmount() {
    document.removeEventListener("mousemove", this.handleMouseMove);
  }

  render() {
    return <div></div>;
  }
}

export default MousePositionTracker;
