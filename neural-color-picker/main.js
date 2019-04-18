const brain = require("brain.js");
const data = require("./500_person_gender_height_weight_index.json");

const net = new brain.NeuralNetwork();

const trainingData = data.map(item => ({
  input: {height: item.height/1000, weight: item.weight/1000},
  output: {index: item.index/5}
}));

net.train(trainingData);

const result = net.run({ height: 180/1000, weight: 100/1000});

console.log(result);
