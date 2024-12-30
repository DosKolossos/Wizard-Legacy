/**
 * Represents a character in the game, extending the MovableObject class.
 * The character has various states, animations, and abilities.
 * 
 * @class Character
 * @extends MovableObject
 */

class Character extends MovableObject {
    LEVEL = 1;
    speed = 5;
    BASE_POWER = 2;
    CURRENT_POWER = this.LEVEL * this.BASE_POWER;
    XPLIMIT = 10;
    XP = 0;
    MAX_LEVEL = 3;
    HEALTH = 100 * this.LEVEL;


    isDying = false;
    CharacterIsDead = false;

    IMAGES_IDLING = [
        'data/Zauberer/PNG/Wizard_1/PNG Sequences/Idle Blink/Wizard_01_Idling_000.png',
        'data/Zauberer/PNG/Wizard_1/PNG Sequences/Idle Blink/Wizard_01_Idling_000.png',
        'data/Zauberer/PNG/Wizard_1/PNG Sequences/Idle Blink/Wizard_01_Idling_001.png',
        'data/Zauberer/PNG/Wizard_1/PNG Sequences/Idle Blink/Wizard_01_Idling_001.png',
        'data/Zauberer/PNG/Wizard_1/PNG Sequences/Idle Blink/Wizard_01_Idling_002.png',
        'data/Zauberer/PNG/Wizard_1/PNG Sequences/Idle Blink/Wizard_01_Idling_002.png',
        'data/Zauberer/PNG/Wizard_1/PNG Sequences/Idle Blink/Wizard_01_Idling_003.png',
        'data/Zauberer/PNG/Wizard_1/PNG Sequences/Idle Blink/Wizard_01_Idling_003.png',
        'data/Zauberer/PNG/Wizard_1/PNG Sequences/Idle Blink/Wizard_01_Idling_004.png',
        'data/Zauberer/PNG/Wizard_1/PNG Sequences/Idle Blink/Wizard_01_Idling_004.png',
        'data/Zauberer/PNG/Wizard_1/PNG Sequences/Idle Blink/Wizard_01_Idling_005.png',
        'data/Zauberer/PNG/Wizard_1/PNG Sequences/Idle Blink/Wizard_01_Idling_005.png',
        'data/Zauberer/PNG/Wizard_1/PNG Sequences/Idle Blink/Wizard_01_Idling_006.png',
        'data/Zauberer/PNG/Wizard_1/PNG Sequences/Idle Blink/Wizard_01_Idling_006.png',
        'data/Zauberer/PNG/Wizard_1/PNG Sequences/Idle Blink/Wizard_01_Idling_007.png',
        'data/Zauberer/PNG/Wizard_1/PNG Sequences/Idle Blink/Wizard_01_Idling.png',
        'data/Zauberer/PNG/Wizard_1/PNG Sequences/Idle Blink/Wizard_01_Idling.png',
    ];
    IMAGES_WALKING = [
        'data/Zauberer/PNG/Wizard_1/PNG Sequences/Idle Blink/Wizard_01_Idling_000.png',
        'data/Zauberer/PNG/Wizard_1/PNG Sequences/Idle Blink/Wizard_01_Idling_000.png',
        'data/Zauberer/PNG/Wizard_1/PNG Sequences/Idle Blink/Wizard_01_Idling_001.png',
        'data/Zauberer/PNG/Wizard_1/PNG Sequences/Idle Blink/Wizard_01_Idling_001.png',
        'data/Zauberer/PNG/Wizard_1/PNG Sequences/Idle Blink/Wizard_01_Idling_002.png',
        'data/Zauberer/PNG/Wizard_1/PNG Sequences/Idle Blink/Wizard_01_Idling_002.png',
        'data/Zauberer/PNG/Wizard_1/PNG Sequences/Idle Blink/Wizard_01_Idling_003.png',
        'data/Zauberer/PNG/Wizard_1/PNG Sequences/Idle Blink/Wizard_01_Idling_003.png',
        'data/Zauberer/PNG/Wizard_1/PNG Sequences/Idle Blink/Wizard_01_Idling_004.png',
        'data/Zauberer/PNG/Wizard_1/PNG Sequences/Idle Blink/Wizard_01_Idling_004.png',
        'data/Zauberer/PNG/Wizard_1/PNG Sequences/Idle Blink/Wizard_01_Idling_005.png',
        'data/Zauberer/PNG/Wizard_1/PNG Sequences/Idle Blink/Wizard_01_Idling_005.png',
        'data/Zauberer/PNG/Wizard_1/PNG Sequences/Idle Blink/Wizard_01_Idling_006.png',
        'data/Zauberer/PNG/Wizard_1/PNG Sequences/Idle Blink/Wizard_01_Idling_006.png',
        'data/Zauberer/PNG/Wizard_1/PNG Sequences/Idle Blink/Wizard_01_Idling_007.png',
        'data/Zauberer/PNG/Wizard_1/PNG Sequences/Idle Blink/Wizard_01_Idling_007.png',
        'data/Zauberer/PNG/Wizard_1/PNG Sequences/Idle Blink/Wizard_01_Idling.png',
        'data/Zauberer/PNG/Wizard_1/PNG Sequences/Idle Blink/Wizard_01_Idling.png',
    ];
    IMAGES_JUMPING = [
        'data/Zauberer/PNG/Wizard_1/PNG Sequences/Idle Blink/Wizard_01_Idling.png',
    ];
    IMAGES_DYING = [
        'data/Zauberer/PNG/Wizard_1/PNG Sequences/Dying/Wizard_01_Dying_000.png',
        'data/Zauberer/PNG/Wizard_1/PNG Sequences/Dying/Wizard_01_Dying_001.png',
        'data/Zauberer/PNG/Wizard_1/PNG Sequences/Dying/Wizard_01_Dying_002.png',
        'data/Zauberer/PNG/Wizard_1/PNG Sequences/Dying/Wizard_01_Dying_003.png',
        'data/Zauberer/PNG/Wizard_1/PNG Sequences/Dying/Wizard_01_Dying_004.png',
        'data/Zauberer/PNG/Wizard_1/PNG Sequences/Dying/Wizard_01_Dying_005.png',
        'data/Zauberer/PNG/Wizard_1/PNG Sequences/Dying/Wizard_01_Dying_006.png',
        'data/Zauberer/PNG/Wizard_1/PNG Sequences/Dying/Wizard_01_Dying_007.png',
        'data/Zauberer/PNG/Wizard_1/PNG Sequences/Dying/Wizard_01_Dying_008.png',
    ];
    IMAGES_DEAD = [
        'data/Zauberer/PNG/Wizard_1/PNG Sequences/Dying/Wizard_01_Dying_008.png',
    ];
    IMAGES_HURT = [
        'data/Zauberer/PNG/Wizard_1/PNG Sequences/Dying/Wizard_01_Dying_000.png',
        'data/Zauberer/PNG/Wizard_1/PNG Sequences/Dying/Wizard_01_Dying_001.png',
        'data/Zauberer/PNG/Wizard_1/PNG Sequences/Dying/Wizard_01_Dying_002.png',
        'data/Zauberer/PNG/Wizard_1/PNG Sequences/Dying/Wizard_01_Dying_003.png',
        'data/Zauberer/PNG/Wizard_1/PNG Sequences/Dying/Wizard_01_Dying_004.png',
    ];
    IMAGES_ATTACK = [
        'data/Zauberer/PNG/Wizard_1/PNG Sequences/Attacking/Wizard_01_Attacking_000.png',
        'data/Zauberer/PNG/Wizard_1/PNG Sequences/Attacking/Wizard_01_Attacking_001.png',
        'data/Zauberer/PNG/Wizard_1/PNG Sequences/Attacking/Wizard_01_Attacking_002.png',
        'data/Zauberer/PNG/Wizard_1/PNG Sequences/Attacking/Wizard_01_Attacking_003.png',
        'data/Zauberer/PNG/Wizard_1/PNG Sequences/Attacking/Wizard_01_Attacking_004.png',
        'data/Zauberer/PNG/Wizard_1/PNG Sequences/Attacking/Wizard_01_Attacking_005.png',
        'data/Zauberer/PNG/Wizard_1/PNG Sequences/Attacking/Wizard_01_Attacking_006.png',
        'data/Zauberer/PNG/Wizard_1/PNG Sequences/Attacking/Wizard_01_Attacking_007.png',
        'data/Zauberer/PNG/Wizard_1/PNG Sequences/Attacking/Wizard_01_Attacking_008.png',
        'data/Zauberer/PNG/Wizard_1/PNG Sequences/Attacking/Wizard_01_Attacking_009.png',
        'data/Zauberer/PNG/Wizard_1/PNG Sequences/Attacking/Wizard_01_Attacking_010.png',
    ]
    IMAGES_TAUNT = [
        'data/Zauberer/PNG/Wizard_1/PNG Sequences/Taunt/Wizard_001_Taunt_000.png',
        'data/Zauberer/PNG/Wizard_1/PNG Sequences/Taunt/Wizard_001_Taunt_001.png',
        'data/Zauberer/PNG/Wizard_1/PNG Sequences/Taunt/Wizard_001_Taunt_002.png',
        'data/Zauberer/PNG/Wizard_1/PNG Sequences/Taunt/Wizard_001_Taunt_003.png',
        'data/Zauberer/PNG/Wizard_1/PNG Sequences/Taunt/Wizard_001_Taunt_004.png',
        'data/Zauberer/PNG/Wizard_1/PNG Sequences/Taunt/Wizard_001_Taunt_005.png',
        'data/Zauberer/PNG/Wizard_1/PNG Sequences/Taunt/Wizard_001_Taunt_006.png',
        'data/Zauberer/PNG/Wizard_1/PNG Sequences/Taunt/Wizard_001_Taunt_007.png',
    ];
    world;
    walking_sound = new Audio('data/audio/step.mp3');
    jumping_sound = new Audio('data/audio/jump.mp3');
    attack_sound = new Audio('data/audio/whooshsword.mp3');
    reached_higher_level = new Audio('data/audio/Pkmn move learnt.ogg');

    /**
     * Creates an instance of Character.
     * Initializes the character with images, animations, and sets up gravity and periodic checks.
     * 
     * @constructor
     */
    constructor() {
        super().loadImage('data/Zauberer/PNG/Wizard_1/PNG Sequences/Idle Blink/Wizard_01_Idling_000.png');
        this.loadImages(this.IMAGES_IDLING);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DYING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_TAUNT);
        this.triggerBossIntro();

        this.applyGravity();

        setInterval(() => {
            this.checkXP();
            this.checkDying();
        }, 100);
        this.animate();
    }

    /**
     * Handles the overall character animations by checking movement and idling.
     */
    animate() {
        this.walk();
        this.checkIdling();
    }

    /**
     * Plays the attacking animation.
     */
    attacking() {
        this.moveAnimation(this.IMAGES_ATTACK);
    }

    /**
     * Handles the character's walking behavior and animation.
     * It checks for keyboard input and moves the character accordingly.
     */
    walk() {
        let interval = setInterval(() => {
            if (this.isHurt() && !this.isDying && !this.CharacterIsDead) {
                this.moveAnimation(this.IMAGES_HURT);
            }
            this.walking_sound.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                if (musicIsOn) {
                    this.walking_sound.play();
                }
                this.moveRight();
            };
            if (this.world.keyboard.LEFT && this.x > 0 && !this.world.level.endboss[0].animationPlayed) {
                if (musicIsOn) {
                    this.walking_sound.play();
                }
                this.moveLeft();
            };
            if (this.world.keyboard.LEFT && this.x > 3400 && this.world.level.endboss[0].animationPlayed) {
                if (musicIsOn) {
                    this.walking_sound.play();
                }
                this.moveLeft();
            };

            if (this.world.keyboard.SPACE && !this.isAboveGround()) {
                this.jump();
                if (musicIsOn) {
                    this.jumping_sound.play();
                }
            }
            if (this.world.keyboard.E && !this.isAboveGround()) {
                this.attacking();
                if (musicIsOn) {
                    this.attack_sound.play();
                }
            }
            if (this.world.keyboard.R && !this.isAboveGround()) {
                this.attacking();
                if (musicIsOn) {
                    this.attack_sound.play();
                }
            }

            if (!this.world.keyboard.RIGHT && !this.world.keyboard.LEFT && !this.world.keyboard.SPACE && !this.world.keyboard.E && !this.world.keyboard.R) {
                // Do nothing
            }

            if (this.isDying) {
                clearInterval(interval);
            }
            this.world.camera_x = -this.x + 100;

        }, 1000 / 60);
    }

    /**
     * Checks if the character is idling and plays the idling animation.
     */
    checkIdling() {
        setInterval(() => {
            if (!this.CharacterIsDead) {
                this.moveAnimation(this.IMAGES_IDLING);
            }
        }, 100);
    }

    /**
     * Checks if the character's XP has reached the limit to level up.
     * If so, it increases the level of the character.
     */
    checkXP() {
        if (this.world.kills >= this.XPLIMIT) {
            this.XPLIMIT += this.XPLIMIT * this.LEVEL;
            this.increaseLevel();
        }
    }

    /**
     * Increases the character's level and updates its power.
     * Plays a sound effect and stops all intervals in the game.
     */
    increaseLevel() {
        this.LEVEL++;
        this.CURRENT_POWER = this.LEVEL * this.BASE_POWER;
        if (musicIsOn) {
            this.reached_higher_level.play();
        }
        world.stopEveryInterval();
        world.keyboard.enabled = false;
        showLevelRise(this.LEVEL);
    }

    /**
     * Checks if the character is in the process of dying and triggers the dying animation.
     */
    checkDying() {
        if (this.isDying && !this.CharacterIsDead) {
            this.dying();
        }
    }

    /**
     * Plays the dying animation and transitions to the dead state.
     */
    dying() {
        let deathFrame = 0;
        let isReset = true;
        disableKeyboard();
        if (this.charInterval) {
            clearInterval(this.charInterval);
        }
        let charInterval = setInterval(() => {
            if (this.isDying && deathFrame < this.IMAGES_DYING.length) {
                this.deathAnimation(this.IMAGES_DYING, isReset);
                isReset = false;
                deathFrame++;
                if (deathFrame === this.IMAGES_DYING.length) {
                    clearInterval(charInterval);
                    this.isDying = false;
                    this.stayDead();
                }
            } else {
                this.currentImage = 0;
            }
        });
    }

    /**
     * Keeps the character in the dead state and triggers the end screen.
     */
    stayDead() {
        this.CharacterIsDead = true;
        if (this.CharacterIsDead) {
            this.moveAnimation(this.IMAGES_DEAD);
            setTimeout(() => {
                initiateEndScreen();
            }, 2000);
        }
    }

    /**
     * Triggers the boss intro animation when the character reaches a certain position in the game.
     */
    triggerBossIntro() {
        let interval = setInterval(() => {
            if (this.x > 3300 && !world.level.endboss[0].animationPlayed) {
                world.keyboard.enabled = false;
                setTimeout(() => {
                    this.playTauntAnimation();
                    world.level.endboss[0].playBossIntro();
                    clearInterval(interval);
                    world.level.endboss[0].animationPlayed = true;
                }, 100);
            }
        }, 100);
    }

    /**
     * Plays the taunt animation.
     */
    playTauntAnimation() {
        this.moveAnimation(this.IMAGES_TAUNT);
    }
}