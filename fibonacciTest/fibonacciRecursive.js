function fibonacci(num) {
  if (num <= 1) {
      return 1;
} else {
    return fibonacci(num - 1) + fibonacci(num - 2);
}
}

let count = 1;
for(let i = 0; i < 50; i++){
    console.log(count + ": " + fibonacci(i));
    count++;
}

