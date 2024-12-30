class Level{
    world;
    levelID = 1;
    enemies;
    enemiesWithSpell;
    endboss;
    clouds;
    backgroundObjects;
    pickableObjects;
    level_end_x = 4000;

    constructor(enemies, enemiesWithSpell, endboss, clouds, backgroundObjects, pickableObjects){
        this.enemies = enemies;
        this.enemiesWithSpell = enemiesWithSpell;
        this.endboss = endboss;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.pickableObjects = pickableObjects;
    }

}