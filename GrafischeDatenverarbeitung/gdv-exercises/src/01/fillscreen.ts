import { swapBuffers } from './setup-fillscreen';

/**
 * Determines the color of a pixel (x, y)
 * and saves it into the data array.
 * The data array holds the linearised pixel data of the target canvas
 * row major. Each pixel is of RGBA format.
 * @param data The linearised pixel array
 * @param x The x coordinate of the pixel
 * @param y The y coordinate of the pixel
 * @param width The width of the canvas
 * @param height The height of the canvas
 */
export function fillscreen(data: Uint8ClampedArray, x: number, y: number, width: number, height: number) {

    // TODO: Compute the position of pixel (x, y) in the linearised 'data' array. Each pixel is using 4 bytes in the data array, one each for red, green, blue and alpha.
    // TODO:  Set the red and alpha component of pixel (x, y) to maximum (255).
}
console.log("Hallo")
class Point {
    readonly x: number;
    readonly y: number;

    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }
}
const pt = new Point(5);
console.log(pt.x)