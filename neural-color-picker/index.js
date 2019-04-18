const input = document.querySelector("input");
const example = document.getElementById("example");

input.addEventListener("change", (e) => {
    const rgbValue = getRgb(e.target.value);

    const net = new brain.NeuralNetwork();

    var rgb = [
        { input: { r: 0, g: 0, b: 0 }, output: { white: 1 } },
        { input: { r: 84, g: 168, b: 169 }, output: { white: 1 } },
        { input: { r: 186, g: 218, b: 85 }, output: { white: 1 } },
        { input: { r: 96, g: 96, b: 81 }, output: { white: 1 } },
        { input: { r: 255, g: 255, b: 255 }, output: { black: 1 } },
        { input: { r: 79, g: 248, b: 41 }, output: { black: 1 } },
        { input: { r: 210, g: 212, b: 231 }, output: { black: 1 } }
    ];

    var data = rgb.map(o => ({
        input: { r: o.input.r / 255, g: o.input.g / 255, b: o.input.b / 255 },
        output: o.output
    }));

    net.train(data);

    const result = brain.likely(rgbValue, net);
    example.style.background = e.target.value;
    console.log(result);
    example.style.color = result === "black" ? "white" : "black";

});

 //brain.js and getRGB helper function
 function getRgb(hex) {
   var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
   hex = hex.replace(shorthandRegex, function(m, r, g, b) {
       return r + r + g + g + b + b;
   });
 
   var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
   return result ? {
       r: Math.round(parseInt(result[1], 16) / 2.55) / 100,
       g: Math.round(parseInt(result[2], 16) / 2.55) / 100,
       b: Math.round(parseInt(result[3], 16) / 2.55) / 100,
   } : null;
}