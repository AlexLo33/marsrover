import { Game } from '../actions/game';

describe("Game", () => {
    describe("Game - analyseInput", () => {
        test("Should initialize gameboard", () => {
            const game = new Game();
            const input = `5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM`;

            expect(game.gameboard).toEqual({ x: 0, y: 0});

            game.analyseInput(input);

            expect(game.gameboard).toEqual({ x: 5, y: 5});
        });

        test("Should instantiate 2 Rovers", () => {
            const game = new Game();
            const input = `5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM`;
            expect(game.rovers).toHaveLength(0);
            game.analyseInput(input);
            expect(game.rovers).toHaveLength(2);
        })

        test("Should instantiate 3 Rovers", () => {
            const game = new Game();
            const input = `5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM
4 2 W
LLMRMRRMMRM`;
            expect(game.rovers).toHaveLength(0);
            game.analyseInput(input);
            expect(game.rovers).toHaveLength(3);
        });
    });
});