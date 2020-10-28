const Discord = require('discord.js');
const fs = require('fs');


module.exports = {
    name: 'ping',
    description: "Shows your ping.",
    execute(message, args){
        let quantity;
     
        let type;
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }
        function getLoot(type, quantity){
            let quality= getRandomInt(10, 101);
            return `You found **${quantity}** **${type}**. Quality: **${quality}%**`;
        }
        let quantitynumber = getRandomInt(x, y)
    }
}