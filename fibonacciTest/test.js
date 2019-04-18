
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

let count = 1;
for (let i = 0; i < 50; i++) {
  console.log(count + ": " + fibonacciTest(i));
  count++;
}