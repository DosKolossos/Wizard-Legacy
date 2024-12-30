/**
 * An array that contains the names of the abilities unlocked at each level.
 * @constant {string[]}
 */
const MOVE_INDEX = ['Single Target Cast', 'Shield', 'Ultimate Target Wave'];

/**
 * An array that contains the file paths of the icons corresponding to the abilities unlocked at each level.
 * @constant {string[]}
 */
const PICTURE_INDEX = ['data/img/casts/icon1.png', 'data/img/casts/icon2.png', 'data/img/casts/icon3.png'];

/**
 * Displays an overlay indicating that the player has reached a new level.
 * The overlay shows the new level and the ability unlocked.
 * 
 * @param {number} level - The current level of the player.
 */
function showLevelRise(level) {
    updateDisabledSpells();
    world.levelUpOpen = true;
    let content = document.getElementById('Endscreen');
    content.classList.remove('d-none');
    content.innerHTML = showLevelRiseHTML(level);
    setInterval(() => {
        if (world.keyboard.ENTER && world.levelUpOpen) {
            toggleEnterForCloseLevelRise();
        }
    }, 100);
}

/**
 * Generates the HTML content for the level-up overlay.
 * The content includes the current level and the new ability unlocked.
 * 
 * @param {number} level - The current level of the player.
 * @returns {string} The HTML string for the level-up overlay.
 */
function showLevelRiseHTML(level) {
    return `
    <div class="level-screen-wrapper">
        <h1>NEW LEVEL</h1>
        <div class="level-up-wrapper">
            <div class="pause-bottom-column">
                <div class="new-level-font">Your current level: ${level}</div>
                <div class="level-up-content-row">
                <div class="picture-positioner"><img id="learnedAbilityIcon" src='${PICTURE_INDEX[level - 1]}'></div>
                <div id="learnedAbility" class="align-items-center">New Ability: ${MOVE_INDEX[level - 1]}</div>
                </div>
            </div>
            <div class="pause-bottom-column align-items-center">
                <div class="function-init top-minus-11px" onclick="closeLevelRise()"><img class="continue-icon" src="data/img/items/play.png">Continue<span id="pressEnter"> (press Enter)<span></div>
            </div>
        </div>
    </div>
    `;
}

/**
 * Toggles the closing of the level-up overlay when the "Enter" key is pressed.
 * This function is called repeatedly to check for the "Enter" key press.
 */
function toggleEnterForCloseLevelRise() {
    closeLevelRise();
}

/**
 * Closes the level-up overlay, re-enables the keyboard, and resumes the game.
 * This function is triggered either by clicking "Continue" or by pressing the "Enter" key.
 */
function closeLevelRise() {
    let content = document.getElementById('Endscreen');
    content.classList.add('d-none');
    world.keyboard.enabled = true;
    world.levelUpOpen = false;
    world.startIntervals();
}
