/**
 * Represents the game world and handles all game logic.
 */
class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar(this.character);
    manaBar = new ManaBar(this);
    bossBar = new BossBar(this.level.endboss);
    spells = [];
    shield = [];
    enemySpells = [];
    backgroundMusic = new Audio('data/audio/bgmusic.mp3');
    kills = 0;
    victoryEnd = false;
    menuOpen = false;
    shieldIsActive = false;
    levelUpOpen = false;

    /**
     * @constructor
     * @param {HTMLCanvasElement} canvas - The canvas element where the game is drawn.
     * @param {Keyboard} keyboard - The keyboard input handler.
     */
    constructor(canvas, keyboard) {
        this.intervals = [];
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
        this.initPauseMenu();
        if (musicIsOn) {
            startMusic();
        }
    }

    /**
     * Initializes the pause menu and sets up the event listener for the ESC key.
     */
    initPauseMenu() {
        setInterval(() => {
            if (!this.menuOpen && this.keyboard.ESC && !this.levelUpOpen) {
                this.openPauseMenu();
            } else if (this.menuOpen && this.keyboard.ESC && !this.levelUpOpen) {
                this.closePauseMenu();
            }
        }, 100);
    }

    /**
     * Opens the pause menu, stops all game intervals, and disables keyboard input.
     */
    openPauseMenu() {
        hideMobileButtons();
        this.stopEveryInterval();
        this.menuOpen = true;
        this.keyboard.enabled = false;
        initiatePauseMenu(this.statusBar.health, this.kills, this.character.LEVEL);
    }

    /**
     * Closes the pause menu, resumes game intervals, and re-enables keyboard input.
     */
    closePauseMenu() {
        initiateMobileButtons();
        let content = document.getElementById('Endscreen');
        content.classList.add('d-none');
        content.innerHTML = ``;
        this.menuOpen = false;
        this.keyboard.enabled = true;
        this.startIntervals();
    }

    /**
     * Stops all intervals that have been added to the world.
     */
    stopEveryInterval() {
        for (let i = 0; i < this.intervals.length; i++) {
            clearInterval(this.intervals[i].id);
        }
    }

    /**
     * Restarts all intervals that have been added to the world.
     */
    startIntervals() {
        for (let i = 0; i < this.intervals.length; i++) {
            let interval = this.intervals[i];
            interval.id = setInterval(interval.func, interval.time);
        }
    }

    /**
     * Adds an interval to the world and saves it for later management.
     * @param {Function} func - The function to be executed at each interval.
     * @param {number} time - The time in milliseconds between executions.
     * @returns {number} The ID of the created interval.
     */
    addInterval(func, time) {
        let id = setInterval(func, time);
        this.intervals.push({ id: id, func: func, time: time });
        return id;
    }

    /**
     * Clears an interval by its ID and removes it from the saved intervals list.
     * @param {number} id - The ID of the interval to clear.
     */
    clearIntervalById(id) {
        let index = this.intervals.findIndex(interval => interval.id === id);
        if (index !== -1) {
            clearInterval(id);
            this.intervals.splice(index, 1);
        }
    }

    /**
     * Links the character to the world.
     */
    setWorld() {
        this.character.world = this;
    }

    /**
     * Runs the main game loop, handling various game logic like collisions and spell casting.
     */
    run() {
        this.runInterval = setInterval(() => {
            if (!this.character.isDying && !this.character.CharacterIsDead) {
                this.checkCollisions();
                this.checkThrowObjects();
                this.checkCollisionsByCast();
                this.checkCollisionsByCastAtBoss();
                this.checkPickup();
                this.checkCollisionsWithBoss();
                this.checkShield();
                this.checkCollisionsByCastAtEnemiesWithSpell();
            } else {
                clearInterval(this.runInterval);
            }
        }, 90);
    }

    /**
     * Checks if the player is trying to throw objects (spells) and handles the logic.
     */
    checkThrowObjects() {
        if (this.keyboard.E && this.manaBar.mana >= 10) {
            let e = new E(this.character.x + 70, this.character.y + 65, this.manaBar && this.keyboard.spellsAvailable);
            this.spells.push(e);
            this.keyboard.spellsAvailable = false;
            document.getElementById('spell1').classList.add('disabled');
            setTimeout(() => {
                this.spells.splice(this.e);
                this.keyboard.spellsAvailable = true;
                document.getElementById('spell1').classList.remove('disabled');
            }, 1000);
        }
        if (this.keyboard.R && this.manaBar.mana >= 50 && this.character.LEVEL > 2 && this.keyboard.spellsAvailable) {
            let r = new R(this.character.x + 70, this.character.y, this.manaBar);
            this.spells.push(r);
            this.keyboard.spellsAvailable = false;
            document.getElementById('spell3').classList.add('disabled');
            setTimeout(() => {
                this.spells.splice(this.r);
                this.keyboard.spellsAvailable = true;
                document.getElementById('spell3').classList.remove('disabled');
            }, 3000);
        }
    }

    /**
     * Checks if the player is activating a shield and handles the logic.
     */
    checkShield() {
        if (this.keyboard.W && this.manaBar.mana >= 10 && this.keyboard.spellsAvailable && this.character.LEVEL > 1) {
            this.shieldIsActive = true;
            let w = new W(this.character.x, this.character.y, this.manaBar);
            this.shield.push(w);
            document.getElementById('spell2').classList.add('disabled');
            console.log('Schild ist aktiv!');
            this.keyboard.shieldAvailable = false;
            setTimeout(() => {
                this.shield.splice(this.w);
                this.shieldIsActive = false;
            }, 1000);
            setTimeout(() => {
                this.keyboard.shieldAvailable = true;
                document.getElementById('spell2').classList.remove('disabled');
            }, 2000);
        }
    }

    /**
     * Checks for collisions between the character and enemies.
     */
    checkCollisions() {
        if (!this.shieldIsActive) {
            this.level.enemies.forEach((enemy) => {
                if (this.character.isColliding(enemy)) {
                    this.character.hit();
                    this.statusBar.setPlayerHealth(this.character.energy);
                }
            });
            this.level.enemiesWithSpell.forEach((enemy) => {
                if (this.character.isColliding(enemy)) {
                    this.character.hit();
                    this.statusBar.setPlayerHealth(this.character.energy);
                }
            });
        }
    }

    /**
     * Checks for collisions between the character and the boss.
     */
    checkCollisionsWithBoss() {
        if (!this.shieldIsActive) {
            this.level.endboss.forEach((enemy) => {
                if (this.character.isColliding(enemy)) {
                    this.character.hit();
                    this.statusBar.setPlayerHealth(this.character.energy);
                }
            });
        }
    }

    /**
     * Checks for collisions between player spells and enemies.
     */
    checkCollisionsByCast() {
        this.spells.forEach((spell, spellIndex) => {
            this.level.enemies.forEach((enemy, enemyIndex) => {
                if (spell.isColliding(enemy)) {
                    if (spell instanceof E) {
                        enemy.isDead = true;
                        this.spells.splice(spellIndex, 1);
                    }
                    if (spell instanceof R) {
                        enemy.isDead = true;
                    }
                    this.level.enemies.splice(enemyIndex, 1);
                    this.kills++;
                }
            });
        });
    }

    /**
     * Checks for collisions between player spells and enemies that cast spells.
     */
    checkCollisionsByCastAtEnemiesWithSpell() {
        this.spells.forEach((spell, spellIndex) => {
            this.level.enemiesWithSpell.forEach((enemy, enemyIndex) => {
                if (spell.isColliding(enemy)) {
                    if (spell instanceof E) {
                        enemy.isDead = true;
                        this.spells.splice(spellIndex, 1);
                    }
                    if (spell instanceof R) {
                        enemy.isDead = true;
                    }
                    this.level.enemiesWithSpell.splice(enemyIndex, 1);
                    this.kills++;
                }
            });
        });
    }

    /**
     * Checks for collisions between player spells and the boss.
     */
    checkCollisionsByCastAtBoss() {
        this.spells.forEach((spell, spellIndex) => {
            if (spell.isColliding(this.level.endboss[0])) {
                if (spell instanceof E) {
                    this.bossBar.reduceBossHealth(spell.power);
                    this.spells.splice(spellIndex, 1);
                }
                if (spell instanceof R) {
                    this.bossBar.reduceBossHealth(spell.power);
                    this.spells.splice(spellIndex, 1);
                }
            }
        });
    }

    /**
     * Checks for collisions between the character and pickable objects, like mana potions.
     */
    checkPickup() {
        this.level.pickableObjects.forEach((PickableObject) => {
            if (this.character.isColliding(PickableObject)) {
                this.manaBar.setMana(100);
                this.level.pickableObjects.splice(PickableObject, 1);
            }
        });
    }

    /**
     * Draws all objects in the game world onto the canvas.
     */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);

        this.addToMap(this.character);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.enemiesWithSpell);
        this.addObjectsToMap(this.enemySpells);
        if (this.character.x > 3300) {
            this.addObjectsToMap(this.level.endboss);
        }
        this.addObjectsToMap(this.level.pickableObjects);
        this.ctx.translate(-this.camera_x, 0);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.spells);
        this.addObjectsToMap(this.shield);
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.manaBar);
        this.addToMap(this.statusBar);
        if (this.character.x > 3300) {
            this.addToMap(this.bossBar);
        }
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    /**
     * Adds an array of objects to the map by drawing them.
     * @param {Array} objects - An array of movable objects to be drawn.
     */
    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        })
    }

    /**
     * Adds a single movable object to the map by drawing it.
     * @param {MovableObject} mo - The movable object to be drawn.
     */
    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    /**
     * Flips an image horizontally for drawing.
     * @param {MovableObject} mo - The movable object to be flipped.
     */
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0)
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    /**
     * Restores the image after it has been flipped.
     * @param {MovableObject} mo - The movable object to restore.
     */
    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}
