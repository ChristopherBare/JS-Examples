const assert = require("assert");

function fibonacciTest(num) {
  var a = 1,
    b = 0,
    temp;

  while (num >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
}

it("should return fibonacci series", () => {
  for (let i = 0; i < 5; i++) {
      assert.equal(fibonacciTest(i), fibonacci(i));
  }
});
