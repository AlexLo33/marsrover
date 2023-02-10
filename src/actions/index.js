export const analyseInput = inputs => ({
  type: 'ANALYSE_INPUT',
  inputs,
});

export const moveRover = id => ({
  type: 'MOVE_ROVER',
  id,
});

export const turnRover = (id, turn) => ({
  type: 'TURN_ROVER',
  id,
  turn
});