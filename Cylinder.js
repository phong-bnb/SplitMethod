"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cylinder = void 0;
var Cylinder = /** @class */ (function () {
    function Cylinder() {
    }
    Cylinder.getVolume = function (radius, height) {
        var baseArea = this.getArea(radius);
        var preimeter = this.getperimeter(radius);
        var volume = preimeter * height + 2 * baseArea;
        return volume;
    };
    Cylinder.getperimeter = function (radius) {
        var preimeter = radius * 2 * Math.PI;
        return preimeter;
    };
    Cylinder.getArea = function (radius) {
        var baseArea = radius * radius * Math.PI;
        return baseArea;
    };
    return Cylinder;
}());
exports.Cylinder = Cylinder;
