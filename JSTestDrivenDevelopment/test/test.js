const mocha = require('mocha');
const assert = require('chai').assert;
const Camera = require('../index');

let c = new Camera();

describe("the camera", function() {
    it("takes a photo with flash", function() {
        assert.equal(c.takePictureWithFlash(), "You are now blind");
    });

    it("takes photo without flash", function() {
        assert.equal(c.takePictureWithoutFlash(), "It's blurry");
    });

    it("Has a lens.", function(){
        assert.isTrue(c.getLens());
    });

    it("Has an SD Card.", function() {
        assert.isTrue(c.getSdCard());
    });

    it("Has a flash.", function() {
        assert.isTrue(c.getFlash());
    });

})










/**************************************
List of assert methods - See  http://chaijs.com/api/assert/#method_assert
                        for the full list
fail(actual, expected, msg)
equal(a, b)
notEqual
isAbove     isAtLeast
isBelow     isAtMost
typeOf
isOk        strictEqual         deepEqual
isNotOk     strictNotEqual      deepNotEqual
isTrue      isNotTrue
isFalse     isNotFalse
isNull      isNaN           isNotNull       isNotNaN
exists      notExists
isUndefined isDefined
isFunction  isObject    isArray isString    isNumber
isBoolean
instanceOf
match       notMatch        <-- regular expressions
property    notProperty
propertyVal notPropertyVal
lengthOf
hasAnyKeys  hasAllKeys      containsAllKeys <!--- in objects
throws      doesNotThrow
closeTo     approximately
oneOf       <--- look in an array
changes     doesNotChange
increases   increasesBy     increasesButNotBy
decreases   decreasesBy     decreasesButNotBy
**************************************/