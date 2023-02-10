const initialState = {
  rovers: [],
};
const directions = ['N', 'E', 'S', 'W'];

const input = (state = initialState, action) => {
  switch (action.type) {
    case 'ANALYSE_INPUT': {
      const { inputs } = action;
      const newState = {
        rovers: [],
      };
      for (let i = 0; i < inputs.length; i += 1) {
        const line = inputs[i];
        if (i === 0) {
          // it's the size of the land
          const sizes = line.split(' ');
          newState.width = +sizes[0] + 1;
          newState.height = +sizes[1] + 1;
        } else if (i % 2 !== 0) {
          // it's the starting position of a mars rover
          const positions = line.split(' ');
          const nextLine = inputs[i + 1];
          const rover = {
            id: newState.rovers.length + 1,
            x: +positions[0],
            y: +positions[1],
            facing: positions[2],
            moves: nextLine,
          };
          newState.rovers.push(rover);
        }
      }
      return newState;
    }

    case 'MOVE_ROVER': {
      // Get the index of the mars rover to move
      const { id } = action;

      // Map through the rovers
      return {
        ...state,
        rovers: state.rovers.map(rover => {
          // If the rover match with the index passed in action
          if (rover.id === id) {
            // Move the rover toward the direction he faces
            switch (rover.facing) {
              case 'N': rover.y += 1; break;
              case 'S': rover.y -= 1; break;
              case 'E': rover.x += 1; break;
              case 'W': rover.x -= 1; break;
              default: break;
            }
            rover.moves = rover.moves.substring(1);
          }
          return {...rover};
        }),
      }
    }

    case 'TURN_ROVER': {
      const { id, turn } = action;
      // Map through the rovers
      return {
        ...state,
        rovers: state.rovers.map(rover => {
          // If the rover match with the index passed in action
          if (rover.id === id) {
            // Turn the rover to the correct direction
            switch (turn) {
              case 'L': {
                const currentDirection = directions.indexOf(rover.facing);
                const newDirection = (currentDirection === 0) ? directions.length - 1 : currentDirection - 1;
                rover.facing = directions[newDirection];
                break;
              };
              case 'R': {
                const currentDirection = directions.indexOf(rover.facing);
                const newDirection = (currentDirection === directions.length - 1) ? 0 : currentDirection + 1;
                rover.facing = directions[newDirection];
                break;
              };
              default: break;
            }
            rover.moves = rover.moves.substring(1);
          }
          return {...rover};
        }),
      }
    }

    default:
      return state;
  }
};

export default input;
