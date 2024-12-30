/**
 * The canvas element used for rendering the game.
 * @type {HTMLCanvasElement}
 */
let canvas;

/**
 * The current instance of the World object.
 * @type {World|null}
 */
let world;

/**
 * The current level of the game.
 * @type {Level}
 */
let level;

/**
 * An instance of the Keyboard class to handle keyboard inputs.
 * @type {Keyboard}
 */
let keyboard = new Keyboard();

/**
 * Initializes the game by setting up the canvas, world, level, and controls.
 * This function creates a new World instance and sets up the initial game state.
 */
function init() {
    canvas = document.getElementById('canvas');
    world = null;
    initLevel();
    initiateAbilityBar();
    initiateMobileButtons();
    keyboard = new Keyboard();
    world = new World(canvas, keyboard, level);
}

/**
 * Resets the game state to allow the player to try again.
 * This function hides the end screen, refreshes mobile touch controls,
 * re-enables the keyboard, and reinitializes the game.
 */
function tryAgain() {
    let endscreen = document.getElementById('Endscreen');
    endscreen.classList.add('d-none');
    refreshMobileTouch();
    enableKeyboard();
    init();
}

// CONTROL AREA

/**
 * Enables keyboard input for the game.
 */
function enableKeyboard() {
    keyboard.enabled = true;
}

/**
 * Disables keyboard input for the game.
 */
function disableKeyboard() {
    keyboard.enabled = false;
}

/**
 * Refreshes mobile touch controls by disabling spell buttons.
 */
function refreshMobileTouch() {
    let w = document.getElementById('btnSpellW');
    let r = document.getElementById('btnSpellR');
    w.classList.add('disabled');
    r.classList.add('disabled');
}

/**
 * Shows the mobile control buttons by removing the 'd-none' class.
 */
function initiateMobileButtons() {
    let hud = document.getElementById('mobileButtons');
    hud.classList.remove('d-none');
}

/**
 * Event listener for keydown events.
 * Updates the state of the keyboard object based on the pressed key.
 * @param {KeyboardEvent} e - The keydown event.
 */
window.addEventListener("keydown", (e) => {
    // console.log(e.keyCode); // zum Ausloggen des Buchstabencodes
    if (e.keyCode == 39 && keyboard.enabled) {
        keyboard.RIGHT = true;
    }
    if (e.keyCode == 37 && keyboard.enabled) {
        keyboard.LEFT = true;
    }
    if (e.keyCode == 38 && keyboard.enabled) {
        keyboard.UP = true;
    }
    if (e.keyCode == 40 && keyboard.enabled) {
        keyboard.DOWN = true;
    }
    if (e.keyCode == 32 && keyboard.enabled) {
        keyboard.SPACE = true;
    }
    if (e.keyCode == 87 && keyboard.enabled && world.keyboard.shieldAvailable) {
        keyboard.W = true;
    }
    if (e.keyCode == 69 && keyboard.enabled && world.keyboard.spellsAvailable) {
        keyboard.E = true;
    }
    if (e.keyCode == 82 && keyboard.enabled && world.keyboard.spellsAvailable) {
        keyboard.R = true;
    }
    if (e.keyCode == 27) {
        keyboard.ESC = true;
    }
    if (e.keyCode == 13) {
        keyboard.ENTER = true;
    }
});

/**
 * Event listener for keyup events.
 * Updates the state of the keyboard object based on the released key.
 * @param {KeyboardEvent} e - The keyup event.
 */
window.addEventListener("keyup", (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = false;
    }
    if (e.keyCode == 37) {
        keyboard.LEFT = false;
    }
    if (e.keyCode == 38) {
        keyboard.UP = false;
    }
    if (e.keyCode == 40) {
        keyboard.DOWN = false;
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = false;
    }
    if (e.keyCode == 87) {
        keyboard.W = false;
    }
    if (e.keyCode == 69) {
        keyboard.E = false;
    }
    if (e.keyCode == 82) {
        keyboard.R = false;
    }
    if (e.keyCode == 27) {
        keyboard.ESC = false;
    }
    if (e.keyCode == 13) {
        keyboard.ENTER = false;
    }
});

