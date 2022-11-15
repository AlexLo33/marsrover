export class Game {
  constructor() {
    this.gameboard = { x: 0, y: 0 };
    this.rovers = [];
  }

  analyseInput(input) {
    const lines = input.split("\n");
    const coordsGames = lines[0].split(" ");
    const coordX = parseInt(coordsGames[0]);
    const coordY = parseInt(coordsGames[1]);
    this.gameboard = { x: coordX, y: coordY };

    for (let i = 1; i < lines.length; i += 2) {
      const initialPosition = lines[i];
      const movements = lines[i+1]
      const rover = new Rover(initialPosition, movements);
      this.rovers.push(rover)
    }
  }
}

export class Rover {
  constructor(initialPosition, movements) {
    this.initialPosition = initialPosition;
    this.movements = movements;
  }
}
