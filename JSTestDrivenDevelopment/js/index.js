/**
 *
 *
 * @class Camera
 */
class Camera {
    
  
    /**
     *Creates an instance of Camera.
     * @memberof Camera
     */
    constructor() {
        this.lens = true;
        this.flash = true;
        this.sdCard = true;
    }

   
    /**
     *
     *
     * @returns
     * @memberof Camera
     */
    takePictureWithFlash() {
        return "You are now blind";
    }

    /**
     *
     *
     * @returns
     * @memberof Camera
     */
    takePictureWithoutFlash() {
        return "It's blurry"
    }

    /**
     *
     *
     * @returns
     * @memberof Camera
     */
    getLens() {
        return this.lens;
    }

    /**
     *
     *
     * @returns
     * @memberof Camera
     */
    getFlash() {
        return this.flash;
    }

    /**
     *
     *
     * @returns
     * @memberof Camera
     */
    getSdCard() {
        return this.sdCard;
    }
}

module.exports = Camera;