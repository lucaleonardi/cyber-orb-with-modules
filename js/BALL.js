import Boot from '../js/gameStates/Boot.js';
import Preloader from '../js/gameStates/Preloader.js';
import MainMenu from '../js/gameStates/MainMenu.js';
import Howto from '../js/gameStates/Howto.js';
import Game from '../js/gameStates/Game.js';

const BALL = {
	_WIDTH: 320,
	_HEIGHT: 480,
	Boot: Boot,
	Preloader: Preloader,
	MainMenu: MainMenu,
	Howto: Howto,
	Game: Game
};

export default BALL;