const Game = require('../src/HelloWorld');

/*describe('HelloWorld', () => {
  describe('#greet', () => {
    it('returns the classic hello world', () => {
      const expectedGreet = 'Hello, world!';

      expect(HelloWorld.greet()).toEqual(expectedGreet);
    });
  });
});*/


describe('Game', () => {
  let game = new Game();
  fit('tests the initial number of frames', () => {

    expect(game.score.toEqual(0));
  });
});