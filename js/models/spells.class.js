// Shield
/**
 * Represents a shield ability that follows the character and reduces mana when cast.
 * @extends MovableObject
 */
class W extends MovableObject {
    /**
     * Creates an instance of the shield ability.
     * @param {number} x - The initial x position of the shield.
     * @param {number} y - The initial y position of the shield.
     * @param {ManaBar} manaBar - The mana bar associated with the character.
     */
    constructor(x, y, manaBar) {
        super().loadImage('data/img/casts/shield.png');
        this.name = 'Shield';
        this.x = x;
        this.y = y;
        this.height = 150;
        this.width = 150;
        this.power = 10;
        this.manaBar = manaBar;
        this.cast();
    }

    /**
     * Activates the shield, reducing the mana and updating the shield's position.
     */
    cast() {
        this.manaBar.reduceMana(this.power);
        setInterval(() => {
            this.x = world.character.x;
            this.y = world.character.y;
        }, 1000 / 60);
    }
}

// first Ability
/**
 * Represents a single target ability (E) that moves horizontally across the screen.
 * @extends MovableObject
 */
class E extends MovableObject {
    /**
     * Creates an instance of the single target ability.
     * @param {number} x - The initial x position of the ability.
     * @param {number} y - The initial y position of the ability.
     * @param {ManaBar} manaBar - The mana bar associated with the character.
     */
    constructor(x, y, manaBar) {
        super().loadImage('data/img/casts/e.png');
        this.name = 'Single Target Cast';
        this.width = 118.5;
        this.height = 38.5;
        this.x = x;
        this.y = y;
        this.power = 20;
        this.manaBar = manaBar;
        this.cast(x);
    }

    /**
     * Activates the ability, reducing mana and moving the ability across the screen.
     * @param {number} x - The initial x position of the ability.
     */
    cast(x) {
        world.manaBar.reduceMana(this.power);
        this.x = x;
        setInterval(() => {
            this.x += 50;
        }, 75);
    }
}

// ultimate Ability
/**
 * Represents an ultimate ability (R) that moves horizontally across the screen and plays a sound.
 * @extends MovableObject
 */
class R extends MovableObject {

    /**
     * The sound effect played when the ultimate ability is cast.
     * @type {Audio}
     */
    ult_sound = new Audio('data/audio/spell.mp3');

    /**
     * Creates an instance of the ultimate ability.
     * @param {number} x - The initial x position of the ability.
     * @param {number} y - The initial y position of the ability.
     * @param {ManaBar} manaBar - The mana bar associated with the character.
     */
    constructor(x, y, manaBar) {
        super().loadImage('data/img/casts/r.png');
        this.name = 'Ultimate Target Wave';
        this.x = x;
        this.y = y;
        this.power = 60;
        this.manaBar = manaBar;
        this.width = 243;
        this.height = 154;
        this.cast(x);
    }

    /**
     * Activates the ultimate ability, reducing mana, moving the ability across the screen, and playing a sound.
     * @param {number} x - The initial x position of the ability.
     */
    cast(x) {
        this.x = x;
        setInterval(() => {
            this.x += 25;
        }, 90);

        this.manaBar.reduceMana(this.power);
        if (musicIsOn) {
            this.ult_sound.play();
        }
    }
}

/**
 * Represents an enemy's spell that moves horizontally across the screen.
 * @extends MovableObject
 */
class EnemySpell extends MovableObject {
    /**
     * Creates an instance of the enemy spell.
     * @param {number} x - The initial x position of the spell.
     * @param {number} y - The initial y position of the spell.
     */
    constructor(x, y) {
        super().loadImage('data/img/casts/enemySpell.png');
        this.width = 118.5;
        this.height = 38.5;
        this.x = x;
        this.y = y;
        this.power = 10;
        this.cast(x);
    }

    /**
     * Activates the enemy spell, moving it across the screen.
     * @param {number} x - The initial x position of the spell.
     */
    cast(x) {
        this.x = x;
        setInterval(() => {
            this.x -= 25;
        }, 75);
    }
}

/**
 * Represents an enemy's ultimate ability that moves horizontally across the screen.
 * @extends MovableObject
 */
class EnemyUlt extends MovableObject {
    /**
     * Creates an instance of the enemy ultimate ability.
     * @param {number} x - The initial x position of the ability.
     * @param {number} y - The initial y position of the ability.
     */
    constructor(x, y) {
        super().loadImage('data/img/casts/enemyUlt.png');
        this.width = 243;
        this.height = 154;
        this.x = x;
        this.y = y;
        this.power = 30;
        this.cast(x);
    }

    /**
     * Activates the enemy ultimate ability, moving it across the screen.
     * @param {number} x - The initial x position of the ability.
     */
    cast(x) {
        this.x = x;
        setInterval(() => {
            this.x -= 20;
        }, 50);
    }
}
