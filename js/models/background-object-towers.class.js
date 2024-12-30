/**
 * Represents a tower object in the game, which is a type of `MovableObject`.
 * Towers have a fixed height and width, and are positioned horizontally based on the given `x` coordinate.
 * 
 * @class
 * @extends MovableObject
 */
class Towers extends MovableObject {
    /**
     * @property {number} height - The height of the tower.
     * @property {number} width - The width of the tower.
     */
    height = 180;
    width = 772;

    /**
     * Creates an instance of Towers.
     * 
     * @param {string} imagePath - The path to the image used to represent the tower.
     * @param {number} x - The horizontal position of the tower on the game canvas.
     */
    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = 0; // The tower is positioned at the top of the screen.
    }
}
