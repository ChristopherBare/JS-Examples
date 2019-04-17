// const lion = {
//     roar: function(){console.log('roar')},
//     thing: function(){console.log("stuff")}
// }
// const goat = {
// 	kick: function(){console.log('kick')}
// }
// const lizard = {
// 	tail: true
// }
// const chimera = {}
// Object.assign(chimera, lion, goat, lizard);
// chimera.roar();
// chimera.kick();
// chimera.thing();
// chimera.tail;

//Real World Example:
const baseConfig = {
  appName: "Slick",
  apiKey: "secretPassword",
  apiBaseUrl: "http://slickapp.co/api/"
};

const localConfig = Object.assign({}, baseConfig, {
  apiKey: "localPassword",
  apiBaseUrl: "http://localhost:3000/api"
});

console.log(localConfig.appName, localConfig.apiBaseUrl);
