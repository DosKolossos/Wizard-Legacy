// SOUND SECTION

/**
 * Background music audio object.
 * @type {HTMLAudioElement}
 */
let backgroundMusic = new Audio('data/audio/title.mp3');

/**
 * Indicates whether the background music is currently playing.
 * @type {boolean}
 */
let musicIsOn = false;

/**
 * Toggles the background music on or off depending on the current state.
 */
function musicSwitcher() {
    if (musicIsOn) {
        stopMusic();
    } else {
        startMusic();
    }
}

/**
 * Starts playing the background music and updates the UI to reflect that music is on.
 * Music will loop indefinitely until stopped.
 */
function startMusic() {
    document.getElementById('mobileSoundOffButton').classList.add('d-none');
    musicIsOn = true;
    backgroundMusic.play();
    backgroundMusic.loop = true;
    setInterval(() => {
        changeMusicButton();
    }, 100);
}

/**
 * Stops the background music and updates the UI to reflect that music is off.
 */
function stopMusic() {
    document.getElementById('mobileSoundOffButton').classList.remove('d-none');
    backgroundMusic.pause();
    musicIsOn = false;
    setInterval(() => {
        changeMusicButton();
    }, 100);
}

/**
 * Updates the music button icon to reflect the current state of the music (on or off).
 * The icon will change based on the value of `musicIsOn`.
 */
function changeMusicButton() {
    const Interval = setInterval(() => {
        let icon = document.getElementById('audioSwitcher');
        if (musicIsOn) {
            icon.src = 'data/img/items/soundon.png';
        } else {
            icon.src = "data/img/items/soundoff.png";
        }
        clearInterval(Interval);
    }, 10);
}

// SPELL ICONS

/**
 * Updates the availability of spell icons based on the player's level.
 * Unlocks additional spells when the player reaches levels 2 and 3.
 */
function updateDisabledSpells() {
    if (world.character.LEVEL > 1) {
        document.getElementById('spell2').classList.remove('disabled');
        document.getElementById('btnSpellW').classList.remove('disabled');
    }
    
    if (world.character.LEVEL > 2) {
        document.getElementById('spell3').classList.remove('disabled');
        document.getElementById('btnSpellR').classList.remove('disabled');
    }
}

/**
 * Initializes the ability bar UI by adding the appropriate HTML structure.
 * The ability bar displays available spells and player actions.
 */
function initiateAbilityBar() {
    let screen = document.getElementById('abilityBar');
    screen.innerHTML = `
    <div class="overlay-bottom">
        <img src="data/img/casts/profile.png" alt="Profile" class="overlay-bottom-profile">
        <div class="overlay-bottom-action-row">
            <img src="data/img/casts/walkleft.png" class="spell-icon">
            <img src="data/img/casts/jump.png" class="spell-icon">
            <img src="data/img/casts/walkright.png" class="spell-icon">
            <img src="data/img/casts/icon1.png" id="spell1" class="spell-icon">
            <img src="data/img/casts/icon2.png" id="spell2" class="spell-icon disabled">
            <img src="data/img/casts/icon3.png" id="spell3" class="spell-icon disabled">
        </div>
    </div>`;
}
