"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Characters = void 0;
var Characters = /** @class */ (function () {
    function Characters(data) {
        this.data = data;
    }
    Object.defineProperty(Characters.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    Characters.prototype.compare = function (leftIndex, rightIndex) {
        return (this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase());
    };
    Characters.prototype.swap = function (leftIndex, rightIndex) {
        var chars = this.data.split('');
        var leftHand = chars[leftIndex];
        chars[leftIndex] = chars[rightIndex];
        chars[rightIndex] = leftHand;
        this.data = chars.join('');
    };
    return Characters;
}());
exports.Characters = Characters;
