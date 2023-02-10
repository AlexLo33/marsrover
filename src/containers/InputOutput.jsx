import React, { Component } from 'react';
import './InputOutput.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { analyseInput } from '../actions';

class InputOutput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: `5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM`,
    };
  }

  onChangeInput = (event) => {
    this.setState({
      input: event.target.value,
    });
  }

  start = () => {
    const { analyseInput } = this.props;
    const { input } = this.state;
    analyseInput(input.split('\n'));
  }

  render() {
    const { input } = this.state;
    const { positions } = this.props;
    let valueOutput = '';
    for (let i = 0; i < positions.length; i += 1) {
      const rover = positions[i];
      valueOutput += `${rover.x} ${rover.y} ${rover.facing}\n`;
    }
    return (
      <div className="InputOutput">
        <div className="input">
          <label htmlFor="input-rover">Input :</label>
          <textarea id="input-rover" rows={6} cols={50} onChange={this.onChangeInput} value={input} />
          <button type="button" onClick={this.start}>Launch Rovers</button>
        </div>
  
        <div className="output">
          <label htmlFor="output-rover">Output :</label>
          <textarea id="output-rover" rows={6} cols={50} value={valueOutput} readOnly/>
        </div>
      </div>
    );
  }
}

const mstp = state => ({
  positions: state.rovers.map(rover => ({ x: rover.x, y: rover.y, facing: rover.facing})),
})

const mapDispatchToProps = dispatch => bindActionCreators({ analyseInput }, dispatch);

export default connect(mstp, mapDispatchToProps)(InputOutput);
