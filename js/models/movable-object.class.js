/**
 * Represents a movable object in the game that can move, jump, and interact with other objects.
 * @extends DrawableObject
 */
class MovableObject extends DrawableObject {
    /**
     * @property {number} speed - The horizontal speed of the object.
     * @property {boolean} otherDirection - Indicates if the object is facing the opposite direction.
     * @property {number} speedY - The vertical speed of the object.
     * @property {number} acceleration - The acceleration applied to vertical movement (gravity).
     * @property {number} energy - The health or energy level of the object.
     * @property {number} lastHit - The timestamp of the last time the object was hit.
     * @property {number} bossEnergy - The energy level of the boss.
     */
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 1;
    energy = 100;
    lastHit = 0;
    bossEnergy = 200;

    /**
     * Applies gravity to the object, causing it to fall if it is above the ground.
     */
    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    /**
     * Checks if the object is above the ground.
     * @returns {boolean} True if the object is above the ground, false otherwise.
     */
    isAboveGround() {
        return this.y < 250;
    }

    /**
     * Checks if the object is colliding with another movable object.
     * @param {MovableObject} mo - The other movable object.
     * @returns {boolean} True if the objects are colliding, false otherwise.
     */
    isColliding(mo) {
        return this.x - this.width < mo.x + mo.width * 0.5 && 
            this.x + this.width > mo.x + mo.width * 0.5 && 
            this.y < mo.y + mo.height &&
            this.y + this.height * 0.8 > mo.y;
    }

    /**
     * Checks if the object is colliding with a character, taking into account shield activation.
     * @param {MovableObject} mo - The character object.
     * @returns {boolean|undefined} True if colliding without shield, undefined if shield is active.
     */
    isCollidingWithCharacter(mo) {
        if (!world.shieldIsActive) {
            return this.x + (this.width * 0.25) < mo.x + (this.width * 0.25) + mo.width * 0.5 &&
                this.x + (this.width * 0.25) + this.width * 0.5 > mo.x + (this.width * 0.25) &&
                this.y < mo.y + mo.height &&
                this.y + this.height > mo.y;
        }
    }

    /**
     * Checks if a spell is colliding with a character.
     * @param {MovableObject} mo - The spell object.
     * @returns {boolean} True if the spell is colliding with the character, false otherwise.
     */
    spellIsCollidingWithCharacter(mo) {
        return mo.x < world.character.x + world.character.width * 0.6 &&
            mo.x < world.character.x + world.character.width * 0.6 &&
            mo.y < world.character.y + world.character.height * 0.7 &&
            mo.y + mo.height > world.character.y; 
    }

    /**
     * Checks for collisions between enemy spells and the character. 
     * If a collision is detected and certain conditions are met, the character takes damage.
     */
    checkCollisionsByCastAtCharacter() {
        world.enemySpells.forEach((spell, spellIndex) => {
            if (world.character.spellIsCollidingWithCharacter(spell) && world.character.x < spell.x && !world.level.endboss[0].isDying && !world.menuOpen && !world.levelUpOpen && !world.shieldIsActive) {
                if (spell instanceof EnemySpell || spell instanceof EnemyUlt) {
                    world.character.hit();
                    world.statusBar.setPlayerHealth(world.character.energy);
                    world.enemySpells.splice(spellIndex, 1);
                }
            }
        });
    }

    /**
     * Reduces the object's energy when it is hit. If energy falls below 0, it is set to 0.
     */
    hit() {
        this.energy -= 10;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    /**
     * Reduces the boss's energy when it is hit by a spell. If energy falls below 0, it is set to 0.
     */
    hitBoss() {
        this.bossEnergy -= this.spell.power;
        if (this.bossEnergy < 0) {
            this.bossEnergy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    /**
     * Checks if the object is currently hurt based on the time elapsed since the last hit.
     * @returns {boolean} True if the object was hit within the last 0.5 seconds, false otherwise.
     */
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; // Diff in ms
        timepassed = timepassed / 1000; // Diff in s
        return timepassed < 0.5;
    }

    /**
     * Checks if the object is dead (i.e., its energy is 0).
     * @returns {boolean} True if the object's energy is 0, false otherwise.
     */
    isDead() {
        return this.energy == 0;
    }

    /**
     * Animates the object's movement by cycling through a set of images.
     * @param {string[]} images - An array of image paths for the animation.
     */
    moveAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    /**
     * Animates the object's death by cycling through a set of images.
     * @param {string[]} images - An array of image paths for the death animation.
     * @param {boolean} isReset - Whether to reset the animation index.
     */
    deathAnimation(images, isReset) {
        if (isReset) {
            this.currentImage = 0;
        }
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    /**
     * Moves the object to the right and plays the walking animation.
     */
    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;
        if (this.IMAGES_WALKING) {
            this.moveAnimation(this.IMAGES_WALKING);
        }
    }

    /**
     * Moves the object to the left and plays the walking animation.
     */
    moveLeft() {
        this.x -= this.speed;
        this.otherDirection = true;
        if (this.IMAGES_WALKING) {
            this.moveAnimation(this.IMAGES_WALKING);
        }
    }

    /**
     * Idles the object by cycling through the idle animation images.
     */
    idling() {
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_IDLING.length;
            let path = this.IMAGES_IDLING[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 100);
    }

    /**
     * Makes the object jump by setting its vertical speed and playing the jump animation.
     */
    jump() {
        this.speedY = 15;

        if (this.IMAGES_JUMPING) {
            this.moveAnimation(this.IMAGES_JUMPING);
        }
    }
}
