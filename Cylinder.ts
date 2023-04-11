export class Cylinder {
    public static  getVolume(radius:number,height:number):number{
        let baseArea = this.getArea(radius);
        let preimeter = this.getperimeter(radius);
        let volume: number = preimeter*height+2*baseArea
        return  volume
}

    private static getperimeter(radius: number) {
        let preimeter: number = radius * 2 * Math.PI
        return preimeter;
    }

    private static getArea(radius: number) {
        let baseArea: number = radius * radius * Math.PI
        return baseArea;
    }
}