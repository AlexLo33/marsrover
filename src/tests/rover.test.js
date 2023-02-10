import { Rover } from "../actions/game";

describe("Rover", () => {
  describe("Rover - analyzeMovements", () => {
    test("Should call rotateLeft", () => {
      const rover = new Rover("1 2 N", "L");
      jest.spyOn(rover, "rotateLeft");

      rover.analyzeMovements();

      expect(rover.rotateLeft).toHaveBeenCalled();
      expect(rover.rotateLeft.mock.calls.length).toBe(1);
    });

    test("Should call rotateLeft twice", () => {
      const rover = new Rover("1 2 N", "LL");
      jest.spyOn(rover, "rotateLeft");

      rover.analyzeMovements();

      expect(rover.rotateLeft).toHaveBeenCalled();
      expect(rover.rotateLeft.mock.calls.length).toBe(2);
    });

    test("Should call rotateRight", () => {
      const rover = new Rover("1 2 N", "R");
      jest.spyOn(rover, "rotateRight");
      rover.analyzeMovements();
      expect(rover.rotateRight).toHaveBeenCalled();
    });

    test("Should call move", () => {
      const rover = new Rover("1 2 N", "M");
      jest.spyOn(rover, "move");
      rover.analyzeMovements();
      expect(rover.move).toHaveBeenCalled();
    });
  });

  describe("Rover - move", () => {
    test("Should increment Y when facing north and move", () => {
      const rover = new Rover("1 2 N", "M");
      expect(rover.x).toEqual(1);
      expect(rover.y).toEqual(2);
      expect(rover.facingDirection).toEqual("N");
      rover.move();
      expect(rover.x).toEqual(1);
      expect(rover.y).toEqual(3);
      expect(rover.facingDirection).toEqual("N");
    });

    test("Should decrement Y when facing south and move", () => {
      const rover = new Rover("1 2 S", "M");
      rover.move();
      expect(rover.x).toEqual(1);
      expect(rover.y).toEqual(1);
      expect(rover.facingDirection).toEqual("S");
    });

    test("Should increment X when facing east and move", () => {
      const rover = new Rover("1 2 E", "M");
      rover.move();
      expect(rover.x).toEqual(2);
      expect(rover.y).toEqual(2);
      expect(rover.facingDirection).toEqual("E");
    });

    test("Should decrement X when facing west and move", () => {
      const rover = new Rover("1 2 W", "M");
      rover.move();
      expect(rover.x).toEqual(0);
      expect(rover.y).toEqual(2);
      expect(rover.facingDirection).toEqual("W");
    });
  });
});
