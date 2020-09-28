const Discord = require("discord.js");

module.exports = {
    name: 'random',
    description: "Random number.",
    execute(message, args){
        var amount = parseInt(args[0]);
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        } 
        if(!args[0]){
            var random = getRandomInt(1, 6);
        message.channel.send(random);
        }else if (isNaN(amount)) {
            return;
       
        }else{
        var random = getRandomInt(1, Number.parseInt(amount) + 1);
        message.channel.send(random);
    }
}
}