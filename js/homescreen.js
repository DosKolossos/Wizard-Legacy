/**
 * Initiates the home screen by hiding mobile buttons and displaying the title screen.
 */
function initiateHomeScreen() {
    hideMobileButtons();
    let screen = document.getElementById('titleScreen');
    screen.innerHTML = `<div class="title-screen-wrapper">
            <img src="data/img/titleimages/wizard-title.png" class="title-image" alt="">
            <div class="title-screen-right">
                <div class="title-screen-right-play" onclick="prepareForInit()"><img src="data/img/items/play.png" class="title-screen-play-icon">Play</div>
            </div>
        </div>`;
}

/**
 * Prepares the game for initialization by hiding the title screen
 * and calling the `init` function to start the game.
 */
function prepareForInit() {
    let screen = document.getElementById('titleScreen');
    screen.classList.add('d-none');
    init();
}

/**
 * Hides the mobile buttons HUD by adding a CSS class that makes it invisible.
 */
function hideMobileButtons() {
    let hud = document.getElementById('mobileButtons');
    hud.classList.add('d-none');
}
