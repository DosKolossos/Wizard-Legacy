/**
 * Represents the Endboss character, a subclass of MovableObject.
 */
class Endboss extends MovableObject {
    /** 
     * Reference to the world object where the endboss exists.
     * @type {World}
     */
    world;

    /** 
     * Height of the Endboss.
     * @type {number}
     */
    height = 300;

    /** 
     * Width of the Endboss.
     * @type {number}
     */
    width = 300;

    /** 
     * Y-coordinate of the Endboss.
     * @type {number}
     */
    y = 150;

    /** 
     * Indicates if the Endboss is currently in the dying state.
     * @type {boolean}
     */
    isDying = false;

    /** 
     * Indicates if the Endboss is dead.
     * @type {boolean}
     */
    isDead = false;

    /** 
     * Speed at which the Endboss moves.
     * @type {number}
     */
    speed = 2;

    /** 
     * Indicates if the introduction animation has been played.
     * @type {boolean}
     */
    animationPlayed = false;

    /** 
     * Indicates if the introduction sequence is over.
     * @type {boolean}
     */
    introIsOver = false;

    /**
     * Array of image paths for the walking animation.
     * @type {Array<string>}
     */
    IMAGES_WALKING = [
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Walking/0_Reaper_Man_Walking_000.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Walking/0_Reaper_Man_Walking_001.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Walking/0_Reaper_Man_Walking_002.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Walking/0_Reaper_Man_Walking_003.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Walking/0_Reaper_Man_Walking_004.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Walking/0_Reaper_Man_Walking_005.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Walking/0_Reaper_Man_Walking_006.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Walking/0_Reaper_Man_Walking_007.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Walking/0_Reaper_Man_Walking_008.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Walking/0_Reaper_Man_Walking_009.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Walking/0_Reaper_Man_Walking_010.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Walking/0_Reaper_Man_Walking_011.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Walking/0_Reaper_Man_Walking_012.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Walking/0_Reaper_Man_Walking_013.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Walking/0_Reaper_Man_Walking_014.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Walking/0_Reaper_Man_Walking_015.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Walking/0_Reaper_Man_Walking_016.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Walking/0_Reaper_Man_Walking_017.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Walking/0_Reaper_Man_Walking_018.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Walking/0_Reaper_Man_Walking_019.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Walking/0_Reaper_Man_Walking_020.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Walking/0_Reaper_Man_Walking_021.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Walking/0_Reaper_Man_Walking_022.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Walking/0_Reaper_Man_Walking_023.png',
    ];

    IMAGES_IDLING = [
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Idle/0_Reaper_Man_Idle_000.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Idle/0_Reaper_Man_Idle_001.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Idle/0_Reaper_Man_Idle_002.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Idle/0_Reaper_Man_Idle_003.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Idle/0_Reaper_Man_Idle_004.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Idle/0_Reaper_Man_Idle_005.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Idle/0_Reaper_Man_Idle_006.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Idle/0_Reaper_Man_Idle_007.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Idle/0_Reaper_Man_Idle_008.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Idle/0_Reaper_Man_Idle_009.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Idle/0_Reaper_Man_Idle_010.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Idle/0_Reaper_Man_Idle_011.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Idle/0_Reaper_Man_Idle_012.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Idle/0_Reaper_Man_Idle_013.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Idle/0_Reaper_Man_Idle_014.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Idle/0_Reaper_Man_Idle_015.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Idle/0_Reaper_Man_Idle_016.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Idle/0_Reaper_Man_Idle_017.png',
    ];

    IMAGES_DYING = [
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Dying/0_Reaper_Man_Dying_000.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Dying/0_Reaper_Man_Dying_001.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Dying/0_Reaper_Man_Dying_002.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Dying/0_Reaper_Man_Dying_003.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Dying/0_Reaper_Man_Dying_004.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Dying/0_Reaper_Man_Dying_005.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Dying/0_Reaper_Man_Dying_006.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Dying/0_Reaper_Man_Dying_007.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Dying/0_Reaper_Man_Dying_008.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Dying/0_Reaper_Man_Dying_009.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Dying/0_Reaper_Man_Dying_010.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Dying/0_Reaper_Man_Dying_011.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Dying/0_Reaper_Man_Dying_012.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Dying/0_Reaper_Man_Dying_013.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Dying/0_Reaper_Man_Dying_014.png',

    ];

    IMAGES_DEAD = [
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Dying/0_Reaper_Man_Dying_014.png',

    ];
    IMAGES_TAUNT = [
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Throwing/0_Reaper_Man_Throwing_000.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Throwing/0_Reaper_Man_Throwing_001.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Throwing/0_Reaper_Man_Throwing_002.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Throwing/0_Reaper_Man_Throwing_003.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Throwing/0_Reaper_Man_Throwing_004.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Throwing/0_Reaper_Man_Throwing_005.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Throwing/0_Reaper_Man_Throwing_006.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Throwing/0_Reaper_Man_Throwing_007.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Throwing/0_Reaper_Man_Throwing_008.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Throwing/0_Reaper_Man_Throwing_009.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Throwing/0_Reaper_Man_Throwing_010.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Throwing/0_Reaper_Man_Throwing_011.png',

    ];
    IMAGES_ATTACK = [
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Slashing/0_Reaper_Man_Slashing_000.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Slashing/0_Reaper_Man_Slashing_001.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Slashing/0_Reaper_Man_Slashing_002.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Slashing/0_Reaper_Man_Slashing_003.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Slashing/0_Reaper_Man_Slashing_004.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Slashing/0_Reaper_Man_Slashing_005.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Slashing/0_Reaper_Man_Slashing_006.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Slashing/0_Reaper_Man_Slashing_007.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Slashing/0_Reaper_Man_Slashing_008.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Slashing/0_Reaper_Man_Slashing_009.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Slashing/0_Reaper_Man_Slashing_010.png',
        'data/Reaper/Reaper_Man_1/PNG/PNG Sequences/Slashing/0_Reaper_Man_Slashing_011.png',
    ];
    /**
     * Initializes the Endboss, loads images, and starts the animation.
     */
    constructor() {
        super();
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DYING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_IDLING);
        this.loadImages(this.IMAGES_TAUNT);
        this.loadImages(this.IMAGES_ATTACK);
        this.x = 3800;
        // this.x = 500;
        this.animate();
    }

    /**
     * Starts the animation for the Endboss, including movement and state checks.
     */
    animate() {
        this.moveLeft();
        setInterval(() => {
            if (!this.isDying && !this.isDead) {
                this.moveAnimation(this.IMAGES_IDLING);
            }
            if (this.isDying && !this.isDead) {
                this.dying();
            }
        }, 100);
    }

    /**
     * Handles the dying animation of the Endboss.
     * The Endboss transitions to the dead state after completing the dying animation.
     */
    dying() {
        this.isDying = false; // Ensure dying animation only runs once.
        let index = 0;
        let dyingInterval = setInterval(() => {
            this.img = this.imageCache[this.IMAGES_DYING[index]];
            index++;
            if (index >= this.IMAGES_DYING.length) {
                clearInterval(dyingInterval);
                this.isDead = true;
                this.stayDead();
            }
        }, 100);
    }

    /**
     * Handles the Endboss's state when it is dead and initiates the end screen.
     */
    stayDead() {
        if (this.isDead) {
            this.moveAnimation(this.IMAGES_DEAD);
        }
        setTimeout(() => {
            initiateEndScreen();
        }, 2000);
    }

    /**
     * Plays the introductory animation for the Endboss.
     * Enables world keyboard input and initiates the Endboss spells intervals after the introduction.
     */
    playBossIntro() {
        if (this.animationPlayed) {
            console.log('playBossIntro läuft!');
            setTimeout(() => {
                this.moveAnimation(this.IMAGES_TAUNT);
            }, 1000);

            setTimeout(() => {
                this.introIsOver = true;
                world.keyboard.enabled = true;
                this.initiateEndbossSpellsIntervals();
            }, 1000);
        }
    }

    /**
     * Initiates intervals for the Endboss to cast spells and attack.
     * Also includes checking collisions with the character.
     */
    initiateEndbossSpellsIntervals() {
        setInterval(() => {
            if (!this.movingRight && this.introIsOver && !this.isDead && !world.menuOpen && !world.levelUpOpen && !this.isDying && !world.character.CharacterIsDead) {
                this.moveAnimation(this.IMAGES_ATTACK);
                let enemySpell = new EnemySpell(this.x - 70, this.y + 150);
                world.enemySpells.push(enemySpell);
                console.log(world.enemySpells);
            }
        }, Math.random() * 10000 + 1000);

        setInterval(() => {
            if (!this.movingRight && this.introIsOver && !this.isDead && !world.menuOpen && !world.levelUpOpen && !this.isDying && !world.character.CharacterIsDead) {
                this.moveAnimation(this.IMAGES_ATTACK);
                let enemyUlt = new EnemyUlt(this.x - 70, this.y + 100);
                world.enemySpells.push(enemyUlt);
                console.log(world.enemySpells);
                setTimeout(() => {
                    world.enemySpells.splice(world.enemySpells.indexOf(enemyUlt), 1);
                }, 2000);
            }
        }, Math.random() * 2000 + 2000);

        setInterval(() => {
            this.checkCollisionsByCastAtCharacter();
        }, 10);
    }
}