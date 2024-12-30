/**
 * Represents a background object in the game, which is a type of `MovableObject`.
 * Background objects have a fixed height and width, and are positioned horizontally based on the given `x` coordinate.
 * The vertical position is calculated to place the object at the bottom of the screen.
 * 
 * @class
 * @extends MovableObject
 */
class BackgroundObjekt extends MovableObject {
    /**
     * @property {number} height - The height of the background object.
     * @property {number} width - The width of the background object.
     */
    height = 320;
    width = 772;

    /**
     * Creates an instance of BackgroundObjekt.
     * 
     * @param {string} imagePath - The path to the image used to represent the background object.
     * @param {number} x - The horizontal position of the background object on the game canvas.
     */
    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = 480 - this.height; // Positions the object at the bottom of the screen.
    }
}
