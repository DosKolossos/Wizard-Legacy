/**
 * Represents a drawable object on the canvas.
 */
class DrawableObject {
    /** 
     * The image associated with the drawable object.
     * @type {HTMLImageElement}
     */
    img;

    /** 
     * Cache for loaded images.
     * @type {Object<string, HTMLImageElement>}
     */
    imageCache = {};

    /** 
     * Index of the current image to be displayed.
     * @type {number}
     */
    currentImage = 0;

    /** 
     * X-coordinate of the drawable object.
     * @type {number}
     */
    x = 120;

    /** 
     * Y-coordinate of the drawable object.
     * @type {number}
     */
    y = 250;

    /** 
     * Height of the drawable object.
     * @type {number}
     */
    height = 150;

    /** 
     * Width of the drawable object.
     * @type {number}
     */
    width = 150;

    /**
     * Loads an image from the specified path.
     * @param {string} path - The path to the image file.
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * Draws the image of the drawable object on the canvas.
     * @param {CanvasRenderingContext2D} ctx - The 2D rendering context of the canvas.
     */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    /** 
     * Loads multiple images into the image cache.
     * @param {Array<string>} arr - An array of image paths to load.
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }
}
