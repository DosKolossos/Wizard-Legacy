/**
 * Initiates the end screen by displaying either the victory or losing screen
 * based on the game outcome.
 */
function initiateEndScreen() {
    let endscreen = document.getElementById('Endscreen');
    endscreen.innerHTML = '<div id="Endtext"></div>';
    let text = document.getElementById('Endtext');
    endscreen.classList.remove('d-none');
    world.level.endboss.splice();
    if (world.victoryEnd) {
        initiateVictoryScreen(text);
    } else {
        initiateLosingScreen(text);
    }
}

/**
 * Displays the victory screen with victory text and relevant statistics.
 * @param {HTMLElement} text - The HTML element where the victory text will be inserted.
 */
function initiateVictoryScreen(text) {
    text.innerHTML = 'Victory! <div id="Content"></div>';
    let content = document.getElementById('Content');
    content.innerHTML = initiateVictoryScreenHTML();
}

/**
 * Generates the HTML content for the victory screen.
 * @returns {string} - The HTML string for the victory screen statistics and options.
 */
function initiateVictoryScreenHTML() {
    return `
    <div id="Stats">
    <div style="gap: 8px; display:flex;"><img class="pause-statistics-icon" src="data/img/items/kills.png">Kills: ${world.kills}<br></div>
    <div style="gap: 8px; display:flex;"><img class="pause-statistics-icon" src="data/img/items/level.png">Level: ${world.character.LEVEL}<br></div>
    <div id="TryAgain" onclick="tryAgain()" class="function-init"><img class="continue-icon" src="data/img/items/reset.png">Try again</div>
    <a href="index.html" class="function-init"><img class="continue-icon" src="data/img/items/home.png">Main Menu</a>
    </div>
    `;
}

/**
 * Displays the losing screen with a defeat message and relevant statistics.
 * @param {HTMLElement} text - The HTML element where the losing text will be inserted.
 */
function initiateLosingScreen(text) {
    text.innerHTML = 'You have been slayed! <div id="Content"></div>';
    let content = document.getElementById('Content');
    content.innerHTML = initiateLosingScreenHTML();
}

/**
 * Generates the HTML content for the losing screen.
 * @returns {string} - The HTML string for the losing screen statistics and options.
 */
function initiateLosingScreenHTML() {
    return `
    <div id="Stats">
    <div style="gap: 8px; display:flex;"><img class="pause-statistics-icon" src="data/img/items/kills.png">Kills: ${world.kills}<br></div>
    <div style="gap: 8px; display:flex;"><img class="pause-statistics-icon" src="data/img/items/level.png">Level: ${world.character.LEVEL}<br></div>
    <div id="TryAgain" onclick="tryAgain()" class="function-init"><img class="continue-icon" src="data/img/items/reset.png">Try again</div>
    <a href="index.html" class="function-init"><img class="continue-icon" src="data/img/items/home.png">Main Menu</a>
    </div>
    `;
}
