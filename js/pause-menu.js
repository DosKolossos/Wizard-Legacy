/**
 * Initiates the pause menu by displaying the pause overlay with relevant statistics.
 * This function only works if the game has not reached a victory condition.
 * 
 * @param {number} health - The player's current health percentage.
 * @param {number} kills - The number of kills the player has achieved.
 * @param {number} level - The player's current level.
 */
function initiatePauseMenu(health, kills, level) {
    if (!world.victoryEnd) {
        let content = document.getElementById('Endscreen');
        content.classList.remove('d-none');
        content.innerHTML = pauseMenuHTML(health, kills, level);
    }
}

/**
 * Generates the HTML content for the pause menu, including player statistics and menu options.
 * 
 * @param {number} health - The player's current health percentage.
 * @param {number} kills - The number of kills the player has achieved.
 * @param {number} level - The player's current level.
 * @returns {string} - The HTML string representing the pause menu.
 */
function pauseMenuHTML(health, kills, level) {
    return `
        <div class="pause-menu-wrapper">
            <h1>PAUSE</h1>
            <img src="data/Zauberer/PNG/Wizard_1/PNG Sequences/Idle Blink/Wizard_01_Idling_000.png" class="pause-image">
            <div class="pause-bottom-wrapper">
                <div class="pause-bottom-column">
                    <div class="pause-statistics"><img class="pause-statistics-icon" src="data/img/items/kills.png">Kills: ${kills}</div>
                    <div class="pause-statistics"><img class="pause-statistics-icon" src="data/img/items/level.png">Level: ${level}</div>
                    <div class="pause-statistics"><img class="pause-statistics-icon" src="data/img/items/health.png">Health: ${health}%</div>
                </div>
                <div class="pause-bottom-column">
                    <div class="function-init" onclick="world.closePauseMenu()"><img class="continue-icon" src="data/img/items/play.png">Continue</div>
                    <div class="function-init" onclick="tryAgain()"><img class="continue-icon" src="data/img/items/reset.png">Reset Game</div>
                    <a href="index.html" class="function-init"><img class="continue-icon" src="data/img/items/home.png">Main Menu</a>
                </div>
            </div>
        </div>`;
}
