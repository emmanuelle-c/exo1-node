const userInformation = require('./information');

const cowsay = require("cowsay");

console.log(cowsay.say({
    text : " Hello I'm "+ userInformation.name + " from the campus of " + userInformation.campus,
    e : "**",
    T : " ",
}));