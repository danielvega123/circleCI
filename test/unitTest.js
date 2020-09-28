var assert = require("assert");

describe("Numbers", function() {
    it('should add two numbers', function() {
        var a = require('../server').addNumer(2, 3)
        console.log(a)
        assert.equal(5, require('../server').addNumer('2', '3'));
    })
});