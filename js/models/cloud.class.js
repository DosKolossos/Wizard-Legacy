/**
 * Represents a cloud object in the game that moves across the screen.
 * Extends the MovableObject class to inherit movement functionalities.
 */
class Cloud extends MovableObject {
    /**
     * The height of the cloud.
     * @type {number}
     */
    height = 66;

    /**
     * The width of the cloud.
     * @type {number}
     */
    width = 341;

    /**
     * Creates an instance of Cloud.
     * The cloud image is loaded, and the initial position and animation are set up.
     */
    constructor() {
        super().loadImage('data/backgrounds/3/clouds.png');

        /**
         * The initial x-coordinate of the cloud, randomly set within 0 to 500.
         * @type {number}
         */
        this.x = Math.random() * 500;

        /**
         * The y-coordinate of the cloud, set to 20.
         * @type {number}
         */
        this.y = 20;

        this.animate();
    }

    /**
     * Animates the cloud by moving it to the left.
     * This method continuously moves the cloud to the left.
     */
    animate() {
        this.moveLeft();
    }
}
