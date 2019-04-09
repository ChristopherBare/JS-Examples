const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

let s = 0;

class Test {
    constructor(s) {
        this.s = s;
    }
}
rl.question("Enter a number: ", function(answer) {
    s = answer;
    let test = new Test(s);
    console.log("Test is now: " + test.s);
    rl.close();
})



