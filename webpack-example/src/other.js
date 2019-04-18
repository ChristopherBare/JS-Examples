const Another = require("./another.js");

class Other {
    thing() {
        console.log("thing");
        let another = new Another();
        another.that();
    }
}
module.exports = Other;