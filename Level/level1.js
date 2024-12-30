let level1 = null;

function initLevel() {
    level1 = new Level([

        new Enemy(),
        new Enemy(),
        new Enemy(),
        new Enemy(),
        new Enemy(),
        new Enemy(),
        new Enemy(),
        new Enemy(),
        new Enemy(),
        new Enemy(),
        new Enemy(),
        new Enemy(),
        new Enemy(),
        new Enemy(),
        new Enemy(),
        new Enemy(),
        new Enemy(),
        new Enemy(),
        new Enemy(),
        new Enemy(),
        new Enemy(),
        new Enemy(),
        new Enemy(),
    ],
        [
            new EnemyWithSpell(),
            new EnemyWithSpell(),
            new EnemyWithSpell(),
            new EnemyWithSpell(),
            new EnemyWithSpell(),
            new EnemyWithSpell(),
            new EnemyWithSpell(),
        ],
        [
            new Endboss(world),
        ],
        [
            new Cloud(),
            new Cloud(),
            new Cloud(),
            new Cloud(),
        ],
        [
            new Towers('data/backgrounds/3/tower.png', -771),
            new Towers('data/backgrounds/3/tower.png', 0),
            new Towers('data/backgrounds/3/tower.png', 771),
            new Towers('data/backgrounds/3/tower.png', 771 * 2),
            new Towers('data/backgrounds/3/tower.png', 771 * 3),
            new Towers('data/backgrounds/3/tower.png', 771 * 4),
            new Towers('data/backgrounds/3/tower.png', 771 * 5),
            new Towers('data/backgrounds/3/tower.png', 771 * 6),
            new BackgroundObjekt('data/backgrounds/3/bridge.png', -771),
            new BackgroundObjekt('data/backgrounds/3/bridge.png', 0),
            new BackgroundObjekt('data/backgrounds/3/bridge.png', 771),
            new BackgroundObjekt('data/backgrounds/3/bridge.png', 771 * 2),
            new BackgroundObjekt('data/backgrounds/3/bridge.png', 771 * 3),
            new BackgroundObjekt('data/backgrounds/3/bridge.png', 771 * 4),
            new BackgroundObjekt('data/backgrounds/3/bridge.png', 771 * 5),
            new BackgroundObjekt('data/backgrounds/3/bridge.png', 771 * 6),
        ],
        [
            new PickableObject('data/img/items/manapotion.png', 1300),
            new PickableObject('data/img/items/manapotion.png', 2600),

        ],)

}