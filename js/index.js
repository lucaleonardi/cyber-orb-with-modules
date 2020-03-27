import BALL from './BALL.js';

const GAME = new Phaser.Game(320, 480, Phaser.CANVAS, 'game');

GAME.state.add('Boot', BALL.Boot);
GAME.state.add('Preloader', BALL.Preloader);
GAME.state.add('MainMenu', BALL.MainMenu);
GAME.state.add('Howto', BALL.Howto);
GAME.state.add('Game', BALL.Game);
GAME.state.start('Boot');