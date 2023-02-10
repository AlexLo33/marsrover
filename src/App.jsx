import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import InputOutput from "./containers/InputOutput";
import MarsLand from "./containers/MarsLand";
import { moveRover, turnRover } from "./actions";

import "./App.scss";

class App extends Component {
  componentDidUpdate(prevProps) {
    const { rovers } = this.props;

    // If there is rovers, and some of them still have some moves, then move them
    if (
      rovers.length > 0 &&
      rovers.filter((rover) => rover.moves !== "").length !== 0
    ) {
      this.moveRovers();
    }
  }

  moveRovers = () => {
    const { rovers } = this.props;
    const rover = rovers.find((rover) => rover.moves !== "");
    setTimeout(() => {
      this.move(rover);
    }, 300);
  };

  move = (rover) => {
    const { moveRover, turnRover } = this.props;
    const moves = rover.moves;
    const move = moves.charAt(0);
    if (move === "M") {
      moveRover(rover.id);
    } else {
      turnRover(rover.id, move);
    }
  };

  render() {
    return (
      <div className="App">
        <h1>Mars Rovers - The Moves</h1>
        <InputOutput />
        <hr />
        <MarsLand />
      </div>
    );
  }
}

const mstp = (state) => ({
  rovers: state.rovers,
});

const mdtp = (dispatch) =>
  bindActionCreators({ moveRover, turnRover }, dispatch);

export default connect(mstp, mdtp)(App);
