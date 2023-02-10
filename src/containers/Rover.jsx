import React from 'react';
import { connect } from 'react-redux';

import './Rover.scss';

const Rover = ({ height, rover }) => {
  const { x, y, facing } = rover;
  let rotation = 0;
  switch(facing) {
    case 'S': rotation = 180; break;
    case 'E': rotation = 90; break;
    case 'W': rotation = -90; break;
    default: break;
  }

  const base = 5;
  const posY = 74 * (height - y - 1) + base;
  const posX = (74 * x) + base;

  const style = {
    top: `${posY}px`,
    left: `${posX}px`,
    transform: `rotate(${rotation}deg)`,
  }

  return ( 
    <div className="Rover" style={style} />
   );
}

const mstp = state => ({
  height: state.height,
});
 
export default connect(mstp)(Rover);