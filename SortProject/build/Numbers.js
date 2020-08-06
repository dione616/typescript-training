"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Numbers = void 0;
var Numbers = /** @class */ (function () {
    function Numbers(data) {
        this.data = data;
    }
    Numbers.prototype.length = function () {
        return this.data.length;
    };
    Numbers.prototype.compare = function (leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    };
    Numbers.prototype.swap = function (leftIndex, rightIndex) {
        var leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
        console.log(this.data[leftIndex], this.data[rightIndex]);
    };
    return Numbers;
}());
exports.Numbers = Numbers;
