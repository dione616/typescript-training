"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
var Node = /** @class */ (function () {
    function Node(data) {
        this.data = data;
        this.next = null;
    }
    return Node;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
    }
    //add Node to List
    LinkedList.prototype.add = function (data) {
        var node = new Node(data);
        if (!this.head) {
            this.head = node;
            return;
        }
        var tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = node; //add Node at the end
    };
    Object.defineProperty(LinkedList.prototype, "length", {
        //length
        get: function () {
            if (!this.head) {
                return 0;
            }
            var length = 1;
            var node = this.head;
            while (node === null || node === void 0 ? void 0 : node.next) {
                node = node.next;
                length++;
            }
            return length;
        },
        enumerable: false,
        configurable: true
    });
    //get Node by index
    LinkedList.prototype.at = function (index) {
        if (!this.head) {
            throw new Error('No head Node!');
        }
        var counter = 0;
        var node = this.head;
        while (node.next) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        throw new Error('Out of bounds');
    };
    //compare node values
    LinkedList.prototype.compare = function (left, right) {
        if (!this.head) {
            throw new Error('No head Node');
        }
        return this.at(left).data > this.at(right).data;
    };
    //swap
    LinkedList.prototype.swap = function (left, right) {
        var leftNode = this.at(left);
        var rightNode = this.at(right);
        var leftHand = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = leftHand;
    };
    //print
    LinkedList.prototype.print = function () {
        if (!this.head) {
            return;
        }
        var node = this.head;
        while (node) {
            console.log(node);
            node = node.next;
        }
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
