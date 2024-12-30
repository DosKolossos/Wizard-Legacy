class EnemyWithSpell extends MovableObject {
    world;
    isDead = false;
    y = 255;
    interval1;
    interval2;
    interval3;
    interval4;
    interval5;
    timeout1;
    id = new Date().getTime();
    IMAGES_WALKING = [
        'data/Fallen Angel/Fallen_Angels_3/PNG/PNG Sequences/Walking/0_Fallen_Angels_Walking_000.png',
        'data/Fallen Angel/Fallen_Angels_3/PNG/PNG Sequences/Walking/0_Fallen_Angels_Walking_001.png',
        'data/Fallen Angel/Fallen_Angels_3/PNG/PNG Sequences/Walking/0_Fallen_Angels_Walking_002.png',
        'data/Fallen Angel/Fallen_Angels_3/PNG/PNG Sequences/Walking/0_Fallen_Angels_Walking_003.png',
        'data/Fallen Angel/Fallen_Angels_3/PNG/PNG Sequences/Walking/0_Fallen_Angels_Walking_004.png',
        'data/Fallen Angel/Fallen_Angels_3/PNG/PNG Sequences/Walking/0_Fallen_Angels_Walking_005.png',
        'data/Fallen Angel/Fallen_Angels_3/PNG/PNG Sequences/Walking/0_Fallen_Angels_Walking_006.png',
        'data/Fallen Angel/Fallen_Angels_3/PNG/PNG Sequences/Walking/0_Fallen_Angels_Walking_007.png',
        'data/Fallen Angel/Fallen_Angels_3/PNG/PNG Sequences/Walking/0_Fallen_Angels_Walking_008.png',
        'data/Fallen Angel/Fallen_Angels_3/PNG/PNG Sequences/Walking/0_Fallen_Angels_Walking_009.png',
        'data/Fallen Angel/Fallen_Angels_3/PNG/PNG Sequences/Walking/0_Fallen_Angels_Walking_010.png',
        'data/Fallen Angel/Fallen_Angels_3/PNG/PNG Sequences/Walking/0_Fallen_Angels_Walking_011.png',
        'data/Fallen Angel/Fallen_Angels_3/PNG/PNG Sequences/Walking/0_Fallen_Angels_Walking_012.png',
        'data/Fallen Angel/Fallen_Angels_3/PNG/PNG Sequences/Walking/0_Fallen_Angels_Walking_013.png',
        'data/Fallen Angel/Fallen_Angels_3/PNG/PNG Sequences/Walking/0_Fallen_Angels_Walking_014.png',
        'data/Fallen Angel/Fallen_Angels_3/PNG/PNG Sequences/Walking/0_Fallen_Angels_Walking_015.png',
        'data/Fallen Angel/Fallen_Angels_3/PNG/PNG Sequences/Walking/0_Fallen_Angels_Walking_016.png',
        'data/Fallen Angel/Fallen_Angels_3/PNG/PNG Sequences/Walking/0_Fallen_Angels_Walking_017.png',
        'data/Fallen Angel/Fallen_Angels_3/PNG/PNG Sequences/Walking/0_Fallen_Angels_Walking_018.png',
        'data/Fallen Angel/Fallen_Angels_3/PNG/PNG Sequences/Walking/0_Fallen_Angels_Walking_019.png',
        'data/Fallen Angel/Fallen_Angels_3/PNG/PNG Sequences/Walking/0_Fallen_Angels_Walking_020.png',
        'data/Fallen Angel/Fallen_Angels_3/PNG/PNG Sequences/Walking/0_Fallen_Angels_Walking_021.png',
        'data/Fallen Angel/Fallen_Angels_3/PNG/PNG Sequences/Walking/0_Fallen_Angels_Walking_022.png',
        'data/Fallen Angel/Fallen_Angels_3/PNG/PNG Sequences/Walking/0_Fallen_Angels_Walking_023.png'
    ];

    IMAGES_IDLING = [
        'data/Fallen Angel/Fallen_Angels_3/PNG/PNG Sequences/Idle Blinking/0_Fallen_Angels_Idle Blinking_000.png',
        'data/Fallen Angel/Fallen_Angels_3/PNG/PNG Sequences/Idle Blinking/0_Fallen_Angels_Idle Blinking_001.png',
        'data/Fallen Angel/Fallen_Angels_3/PNG/PNG Sequences/Idle Blinking/0_Fallen_Angels_Idle Blinking_002.png',
        'data/Fallen Angel/Fallen_Angels_3/PNG/PNG Sequences/Idle Blinking/0_Fallen_Angels_Idle Blinking_003.png',
        'data/Fallen Angel/Fallen_Angels_3/PNG/PNG Sequences/Idle Blinking/0_Fallen_Angels_Idle Blinking_004.png',
        'data/Fallen Angel/Fallen_Angels_3/PNG/PNG Sequences/Idle Blinking/0_Fallen_Angels_Idle Blinking_005.png',
        'data/Fallen Angel/Fallen_Angels_3/PNG/PNG Sequences/Idle Blinking/0_Fallen_Angels_Idle Blinking_006.png',
        'data/Fallen Angel/Fallen_Angels_3/PNG/PNG Sequences/Idle Blinking/0_Fallen_Angels_Idle Blinking_007.png',
        'data/Fallen Angel/Fallen_Angels_3/PNG/PNG Sequences/Idle Blinking/0_Fallen_Angels_Idle Blinking_008.png',
        'data/Fallen Angel/Fallen_Angels_3/PNG/PNG Sequences/Idle Blinking/0_Fallen_Angels_Idle Blinking_009.png',
        'data/Fallen Angel/Fallen_Angels_3/PNG/PNG Sequences/Idle Blinking/0_Fallen_Angels_Idle Blinking_010.png',
        'data/Fallen Angel/Fallen_Angels_3/PNG/PNG Sequences/Idle Blinking/0_Fallen_Angels_Idle Blinking_011.png',
        'data/Fallen Angel/Fallen_Angels_3/PNG/PNG Sequences/Idle Blinking/0_Fallen_Angels_Idle Blinking_012.png',
        'data/Fallen Angel/Fallen_Angels_3/PNG/PNG Sequences/Idle Blinking/0_Fallen_Angels_Idle Blinking_013.png',
        'data/Fallen Angel/Fallen_Angels_3/PNG/PNG Sequences/Idle Blinking/0_Fallen_Angels_Idle Blinking_014.png',
        'data/Fallen Angel/Fallen_Angels_3/PNG/PNG Sequences/Idle Blinking/0_Fallen_Angels_Idle Blinking_015.png',
        'data/Fallen Angel/Fallen_Angels_3/PNG/PNG Sequences/Idle Blinking/0_Fallen_Angels_Idle Blinking_016.png',
        'data/Fallen Angel/Fallen_Angels_3/PNG/PNG Sequences/Idle Blinking/0_Fallen_Angels_Idle Blinking_017.png'
    ];

    IMAGES_ATTACK = [
        'data/Fallen Angel/Fallen_Angels_3/PNG/PNG Sequences/Slashing/0_Fallen_Angels_Slashing_000.png',
        'data/Fallen Angel/Fallen_Angels_3/PNG/PNG Sequences/Slashing/0_Fallen_Angels_Slashing_001.png',
        'data/Fallen Angel/Fallen_Angels_3/PNG/PNG Sequences/Slashing/0_Fallen_Angels_Slashing_002.png',
        'data/Fallen Angel/Fallen_Angels_3/PNG/PNG Sequences/Slashing/0_Fallen_Angels_Slashing_003.png',
        'data/Fallen Angel/Fallen_Angels_3/PNG/PNG Sequences/Slashing/0_Fallen_Angels_Slashing_004.png',
        'data/Fallen Angel/Fallen_Angels_3/PNG/PNG Sequences/Slashing/0_Fallen_Angels_Slashing_005.png',
        'data/Fallen Angel/Fallen_Angels_3/PNG/PNG Sequences/Slashing/0_Fallen_Angels_Slashing_006.png',
        'data/Fallen Angel/Fallen_Angels_3/PNG/PNG Sequences/Slashing/0_Fallen_Angels_Slashing_007.png',
        'data/Fallen Angel/Fallen_Angels_3/PNG/PNG Sequences/Slashing/0_Fallen_Angels_Slashing_008.png',
        'data/Fallen Angel/Fallen_Angels_3/PNG/PNG Sequences/Slashing/0_Fallen_Angels_Slashing_009.png',
        'data/Fallen Angel/Fallen_Angels_3/PNG/PNG Sequences/Slashing/0_Fallen_Angels_Slashing_010.png',
        'data/Fallen Angel/Fallen_Angels_3/PNG/PNG Sequences/Slashing/0_Fallen_Angels_Slashing_011.png'
    ];

    constructor() {
        super().loadImage('data/Fallen Angel/Fallen_Angels_3/PNG/PNG Sequences/Walking/0_Fallen_Angels_Walking_000.png');
        this.intervals = [];
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_IDLING);
        this.loadImages(this.IMAGES_ATTACK);
        this.x = 1000 + Math.random() * 2500;

        this.speed = 0.5 + Math.random() * 0.5;
        this.movingRight = true;
        this.startEnemyIntervals();
        this.animate();
        this.enemySpellsInterval();

    }
    /**
     * Animates the enemy, making it move left or right at intervals.
     */
    animate() {
        let interval3 = setInterval(() => {
            if (this.movingRight) {
                this.moveRight();
            } else {
                this.moveLeft();
            }
        }, 50);

        let interval4 = setInterval(() => {
            this.movingRight = !this.movingRight;
        }, Math.random() * 3000 + 500);
    }

    /**
     * Stops all active intervals related to the enemy.
     */
    stopEveryEnemyInterval() {
        for (let i = 0; i < this.intervals.length; i++) {
            clearInterval(this.intervals[i].id);
        }
    }

    /**
     * Starts all intervals related to the enemy's behavior.
     */
    startEnemyIntervals() {
        for (let i = 0; i < this.intervals.length; i++) {
            let interval = this.intervals[i];
            interval.id = setInterval(interval.func, interval.time);
        }
    }

    /**
     * Handles the interval logic for casting spells and checking for collisions.
     */
    enemySpellsInterval() {
        let interval1 = setInterval(() => {
            if (!this.movingRight && !this.isDead && !world.menuOpen && !world.levelUpOpen) {
                this.moveAnimation(this.IMAGES_ATTACK);
                let enemySpell = new EnemySpell(this.x - 70, this.y + 60);
                world.enemySpells.push(enemySpell);
                let timeout1 = setTimeout(() => {
                    world.enemySpells.splice(enemySpell, 1);
                }, 1000);
            }
        }, 4000);

        let interval2 = setInterval(() => {
            this.checkCollisionsByCastAtCharacter();
        }, 100);
    }

    /**
     * Handles the logic to stop all intervals when the enemy is killed.
     */
    kill() {
        let interval5 = setInterval(() => {
            if (this.isDead) {
                clearInterval(this.interval1, this.interval2, this.interval3, this.interval4, this.interval5);
                clearTimeout(this.timeout1);
            }
        }, 50);
    }
}

/**
 * Represents a basic enemy that moves and can be killed.
 * Inherits from MovableObject.
 */

class Enemy extends MovableObject {
    world;
    isDead = false;
    width = 200;
    height = 128;
    y = 260;
    interval1;
    interval2;
    interval3;
    IMAGES_WALKING = [
        'data/Golem/PNG/Golem_01/PNG Sequences/Walking/Golem_01_Walking_000.png',
        'data/Golem/PNG/Golem_01/PNG Sequences/Walking/Golem_01_Walking_001.png',
        'data/Golem/PNG/Golem_01/PNG Sequences/Walking/Golem_01_Walking_002.png',
        'data/Golem/PNG/Golem_01/PNG Sequences/Walking/Golem_01_Walking_003.png',
        'data/Golem/PNG/Golem_01/PNG Sequences/Walking/Golem_01_Walking_004.png',
        'data/Golem/PNG/Golem_01/PNG Sequences/Walking/Golem_01_Walking_005.png',
        'data/Golem/PNG/Golem_01/PNG Sequences/Walking/Golem_01_Walking_006.png',
        'data/Golem/PNG/Golem_01/PNG Sequences/Walking/Golem_01_Walking_007.png',
        'data/Golem/PNG/Golem_01/PNG Sequences/Walking/Golem_01_Walking_008.png',
        'data/Golem/PNG/Golem_01/PNG Sequences/Walking/Golem_01_Walking_009.png',
        'data/Golem/PNG/Golem_01/PNG Sequences/Walking/Golem_01_Walking_010.png',
        'data/Golem/PNG/Golem_01/PNG Sequences/Walking/Golem_01_Walking_011.png',
        'data/Golem/PNG/Golem_01/PNG Sequences/Walking/Golem_01_Walking_012.png',
        'data/Golem/PNG/Golem_01/PNG Sequences/Walking/Golem_01_Walking_013.png',
        'data/Golem/PNG/Golem_01/PNG Sequences/Walking/Golem_01_Walking_014.png',
        'data/Golem/PNG/Golem_01/PNG Sequences/Walking/Golem_01_Walking_015.png',
        'data/Golem/PNG/Golem_01/PNG Sequences/Walking/Golem_01_Walking_016.png',
        'data/Golem/PNG/Golem_01/PNG Sequences/Walking/Golem_01_Walking_017.png',
    ];

    IMAGES_IDLING = [
        'data/Golem/PNG/Golem_01/PNG Sequences/Idle Blink/Golem_01_Idle Blinking_000.png',
        'data/Golem/PNG/Golem_01/PNG Sequences/Idle Blink/Golem_01_Idle Blinking_001.png',
        'data/Golem/PNG/Golem_01/PNG Sequences/Idle Blink/Golem_01_Idle Blinking_002.png',
        'data/Golem/PNG/Golem_01/PNG Sequences/Idle Blink/Golem_01_Idle Blinking_003.png',
        'data/Golem/PNG/Golem_01/PNG Sequences/Idle Blink/Golem_01_Idle Blinking_004.png',
        'data/Golem/PNG/Golem_01/PNG Sequences/Idle Blink/Golem_01_Idle Blinking_005.png',
        'data/Golem/PNG/Golem_01/PNG Sequences/Idle Blink/Golem_01_Idle Blinking_006.png',
        'data/Golem/PNG/Golem_01/PNG Sequences/Idle Blink/Golem_01_Idle Blinking_007.png',
        'data/Golem/PNG/Golem_01/PNG Sequences/Idle Blink/Golem_01_Idle Blinking_008.png',
        'data/Golem/PNG/Golem_01/PNG Sequences/Idle Blink/Golem_01_Idle Blinking_009.png',
        'data/Golem/PNG/Golem_01/PNG Sequences/Idle Blink/Golem_01_Idle Blinking_010.png',
        'data/Golem/PNG/Golem_01/PNG Sequences/Idle Blink/Golem_01_Idle Blinking_011.png',
    ];

    constructor() {
        super().loadImage('data/Golem/PNG/Golem_01/PNG Sequences/Walking/Golem_01_Walking_000.png');
        this.intervals = [];
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_IDLING);

        this.x = 400 + Math.random() * 2500;

        this.speed = 0.5 + Math.random() * 0.5;
        this.movingRight = true;
        this.startEnemyIntervals();
        this.animate();
        this.kill();
    }
        /**
     * Animates the enemy, making it move left or right at intervals.
     */
        animate() {
            let interval1 = setInterval(() => {
                if (this.movingRight) {
                    this.moveRight();
                } else {
                    this.moveLeft();
                }
            }, 50);
    
            let interval2 = setInterval(() => {
                this.movingRight = !this.movingRight;
            }, Math.random() * 3000 + 500);
        }
    
        /**
         * Handles the logic to stop all intervals when the enemy is killed.
         */
        kill() {
            let interval3 = setInterval(() => {
                if (this.isDead) {
                    clearInterval(this.interval1, this.interval2, this.interval3);
                }
            }, 50);
        }
    
        /**
         * Stops all active intervals related to the enemy.
         */
        stopEveryEnemyInterval() {
            for (let i = 0; i < this.intervals.length; i++) {
                clearInterval(this.intervals[i].id);
            }
        }
    
        /**
         * Starts all intervals related to the enemy's behavior.
         */
        startEnemyIntervals() {
            for (let i = 0; i < this.intervals.length; i++) {
                let interval = this.intervals[i];
                interval.id = setInterval(interval.func, interval.time);
            }
        }
    }