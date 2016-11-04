"use strict";
var chai_1 = require('chai');
var getPi = function () {
    return Math.PI;
};
var processMath = function (numArray) {
    var total = numArray.join('');
    return eval(total);
};
var processMathValue = processMath([1, '+', 2]);
describe('test functions return value', function () {
    it('should return ~ PI', function () {
        chai_1.assert.equal(getPi().toFixed(12), 3.14159265359);
    });
    it('should return the computed value', function () {
        chai_1.assert.equal(Number(processMathValue), 3);
    });
});
//# sourceMappingURL=testFile.js.map