/**
 * Opens the imprint section by displaying the imprint content and hiding the game canvas.
 * The imprint content is dynamically generated and displayed within the designated HTML element.
 */
function openImprint() {
    let content = document.getElementById('imprint');

    content.classList.remove('d-none');
    let canvas = document.getElementById('canvas');
    canvas.classList.add('d-none');
    content.innerHTML = openImprintHTML();
    let closeBtn = document.getElementById('closeImprint');
    closeBtn.classList.remove('d-none');
}

/**
 * Generates the HTML content for the imprint section.
 * This content includes contact details, sources, and credits.
 *
 * @returns {string} The HTML string for the imprint section.
 */
function openImprintHTML() {
    return `
    <img id="closeImprint" class="d-none" onclick="closeImprint()"></img>
    <div id="imprintText">
    <h2>Impressum</h2>

    <p>David Kolosza<br>
    Hauptstra&szlig;e 43<br>
    53859 Niederkassel</p>

    <h2>Kontakt</h2>
    E-Mail: <a href="mailto:david.kolosza@gmx.de">david.kolosza@gmx.de</a></p>

    <p>Quelle: <a href="https://www.e-recht24.de">https://www.e-recht24.de</a></p>

    <p>Sonstige Quellen:<br><br>
    Zauber: <a href="https://www.istockphoto.com/de/vektor/laserpistolenstrahlen-cartoon-power-blast-effekte-energiewaffenangriff-2d-spiel-gm1436902866-477833151">Tetiana Lazunova</a><br>

    Ability Icons: <a href="https://sunshinewalker.artstation.com/projects/OoGAJJ">Irina Ryzhova</a><br>

    Title Screen Image: <a href="https://dribbble.com/shots/8679093-Wizard">Alfrey Davilla</a><br>

    Title Song: 
    <a href="https://www.youtube.com/watch?v=3ObfdDcRGVs">PianoMan333</a><br>
    </p>
    </div>`
};

/**
 * Closes the imprint section by hiding its content and restoring the visibility of the game canvas.
 * The imprint content is also cleared from the DOM.
 */
function closeImprint() {
    let content = document.getElementById('imprint');
    content.classList.add('d-none');
    content.innerHTML = '';
    let canvas = document.getElementById('canvas');
    canvas.classList.remove('d-none');
}
