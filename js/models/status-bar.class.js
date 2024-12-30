
class StatusBar extends DrawableObject {

    IMAGES_HEALTH = [
        'data/bars/0.png',
        'data/bars/10.png',
        'data/bars/20.png',
        'data/bars/30.png',
        'data/bars/40.png',
        'data/bars/50.png',
        'data/bars/60.png',
        'data/bars/70.png',
        'data/bars/80.png',
        'data/bars/90.png',
        'data/bars/100.png',
    ];

    percentage = 100;
    constructor(character) {
        super();
        this.character = character;
        this.loadImages(this.IMAGES_HEALTH);
        this.x = character.x-10; // stick the bar on the character.x-axes
        setInterval(() => {
            this.y = character.y-40; // stick the bar on the character.y-axes
        }, 1000/60);

        this.height = 40;
        this.width = 149;
        this.health = this.character.HEALTH;
        this.setPlayerHealth(this.health);
    }



    setPlayerHealth(health) {
        this.health = health;
        let path = this.IMAGES_HEALTH[this.resolveImageIndex()]
        this.img = this.imageCache[path];
        if (this.health == 0 && !world.character.isDying) { // checking for character death at 0 LP
            this.character.isDying = true;
        }
    }
    resolveImageIndex() {
        if (this.health == 100) {
            return 10;
        } else if (this.health == 90) {
            return 9;
        } else if (this.health == 80) {
            return 8;
        } else if (this.health == 70) {
            return 7;
        } else if (this.health == 60) {
            return 6;
        } else if (this.health == 50) {
            return 5;
        } else if (this.health == 40) {
            return 4;
        } else if (this.health == 30) {
            return 3;
        } else if (this.health == 20) {
            return 2;
        } else if (this.health == 10) {
            return 1;
        } else {
            return 0;
        }
    }

}

class ManaBar extends DrawableObject {
    IMAGES_MANA = [
        'data/bars/mana0.png',
        'data/bars/mana10.png',
        'data/bars/mana20.png',
        'data/bars/mana30.png',
        'data/bars/mana40.png',
        'data/bars/mana50.png',
        'data/bars/mana60.png',
        'data/bars/mana70.png',
        'data/bars/mana80.png',
        'data/bars/mana90.png',
        'data/bars/mana100.png',
    ];

    mana = 50;

    constructor(world) {
        super();
        this.loadImages(this.IMAGES_MANA); 
        this.x = world.character.x -10; // stick the bar on the character.x-axes
        setInterval(() => {
            this.y = world.character.y-15;  // stick the bar on the character.y-axes
        }, 1000/60);

        this.height = 40;
        this.width = 149;
        this.setMana(this.mana);
        this.world = world;
        this.manaRecovery = 10;

        setInterval(() => {
            this.addMana(this.manaRecovery); // character receives 10% Mana Recovery each second
        }, 1000);
    }

    addMana(value) { // Max Mana = 100
        if (this.mana < 100) {
            this.mana += value;
            this.setMana(this.mana);
        }
    }

    reduceMana(power) { // important for not spamming Spells 24/7
        this.mana = Math.max(0, this.mana - power);
        this.setMana(this.mana);
    }

    setMana(mana) {
        this.mana = mana;
        let path = this.IMAGES_MANA[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.mana >= 100) {
            return 10;
        } else if (this.mana >= 90) {
            return 9;
        } else if (this.mana >= 80) {
            return 8;
        } else if (this.mana >= 70) {
            return 7;
        } else if (this.mana >= 60) {
            return 6;
        } else if (this.mana >= 50) {
            return 5;
        } else if (this.mana >= 40) {
            return 4;
        } else if (this.mana >= 30) {
            return 3;
        } else if (this.mana >= 20) {
            return 2;
        } else if (this.mana >= 10) {
            return 1;
        } else {
            return 0;
        }
    }
}

class BossBar extends DrawableObject {
    IMAGES_HEALTH = [
        'data/bars/bosshealth0.png',
        'data/bars/bosshealth10.png',
        'data/bars/bosshealth20.png',
        'data/bars/bosshealth30.png',
        'data/bars/bosshealth40.png',
        'data/bars/bosshealth50.png',
        'data/bars/bosshealth60.png',
        'data/bars/bosshealth70.png',
        'data/bars/bosshealth80.png',
        'data/bars/bosshealth90.png',
        'data/bars/bosshealth100.png',
    ];

    constructor(endboss) {
        super();
        this.endboss = endboss;
        this.loadImages(this.IMAGES_HEALTH);
        this.x = 370;
        this.y = 20;
        this.height = 79;
        this.width = 298;
        this.setBossHealth(100); // Set initial health to 100%
    }

    defense = 2; // Defense factor, reduces damage taken
    health = 100; // Initial health

    setBossHealth(health) {
        this.health = health; // Update boss health
        let path = this.IMAGES_HEALTH[this.resolveImageIndex()]; // Select the correct health image
        this.img = this.imageCache[path]; // Load the corresponding image
    }

    reduceBossHealth(power) {
        this.health = Math.max(0, this.health - (power / this.defense)); // Reduce health considering defense
        this.setBossHealth(this.health); // Update the health bar
        if (this.health === 0 && !this.endboss[0].isDying) {
            disableKeyboard(); // Disable keyboard when boss dies
            this.endboss[0].isDying = true; // Set boss to dying state
            world.victoryEnd = true; // Set victory condition
        }
    }

    resolveImageIndex() {
        if (this.health >= 100) return 10;
        if (this.health >= 90) return 9;
        if (this.health >= 80) return 8;
        if (this.health >= 70) return 7;
        if (this.health >= 60) return 6;
        if (this.health >= 50) return 5;
        if (this.health >= 40) return 4;
        if (this.health >= 30) return 3;
        if (this.health >= 20) return 2;
        if (this.health >= 10) return 1;
        return 0; // Health below 10%
    }
}
