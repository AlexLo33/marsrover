export class Game {
  constructor() {
    this.gameboard = { x: 0, y: 0 };
    this.rovers = [];
  }

  analyseInput(input) {
    const lines = input.split("\n");

    // Extract gameboard
    const coordsGame = lines[0].split(" ");
    const coordX = parseInt(coordsGame[0], 10);
    const coordY = parseInt(coordsGame[1], 10);
    this.gameboard = { x: coordX, y: coordY };

    // Extract Rovers
    for (let i = 1; i < lines.length; i += 2) {
      const initialPosition = lines[i];
      const movements = lines[i + 1];
      const rover = new Rover(initialPosition, movements);
      this.rovers.push(rover);
    }
  }
}

export class Rover {
  constructor(initialPosition, movements) {
    this.initialPosition = initialPosition;
    this.movements = movements;
    this.x = parseInt(initialPosition[0]);
    this.y = parseInt(initialPosition[2]);
    this.facingDirection = initialPosition[4];
  }

  analyzeMovements() {
    for (let i = 0; i < this.movements.length; i++) {
      const movement = this.movements[i];
      if (movement === "L") {
        this.rotateLeft();
      }
      if (movement === "R") {
        this.rotateRight();
      }
      if (movement === "M") {
        this.move();
      }
    }
  }

  move() {
    if (this.facingDirection === "N") {
      this.y += 1;
    }
    if (this.facingDirection === "S") {
      this.y -= 1;
    }
    if (this.facingDirection === "E") {
      this.x += 1;
    }
    if (this.facingDirection === "W") {
      this.x -= 1;
    }
  }

  rotateLeft() {
    if (this.facingDirection === "N") {
      this.facingDirection = "W";
    }
    if (this.facingDirection === "W") {
      this.facingDirection = "S";
    }
    if (this.facingDirection === "S") {
      this.facingDirection = "E";
    }
    if (this.facingDirection === "E") {
      this.facingDirection = "N";
    }
  }

  rotateRight() {
    if (this.facingDirection === "N") {
      this.facingDirection = "E";
    }
    if (this.facingDirection === "E") {
      this.facingDirection = "S";
    }
    if (this.facingDirection === "S") {
      this.facingDirection = "W";
    }
    if (this.facingDirection === "W") {
      this.facingDirection = "N";
    }
  }
}
