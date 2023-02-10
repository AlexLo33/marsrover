import React from 'react';
import { connect } from 'react-redux';

import Rover from './Rover';

import './MarsLand.scss';

const MarsLand = ({ width, height, rovers }) => {
  const arrayX = Array.from({ length: width }, (_, index) => index);
  const arrayY = Array.from({ length: height }, (_, index) => index).reverse();
  return (
    <div className="MarsLand" style={{ width: `${width * 74}px`, height: `${height * 74}px` }}>
      {
        arrayY.map((y) => (
          arrayX.map((x) => (
            <div key={`${x}-${y}`} className="tile">{`${x}-${y}`}</div>
          ))
        ))
      }

      {
        rovers.map((rover) => (
          <Rover key={rover.id} rover={rover} />
        ))
      }
    </div>
  );
}

const mapStateToProps = state => ({
  width: state.width,
  height: state.height,
  rovers: state.rovers,
});

export default connect(mapStateToProps)(MarsLand);