const Discord = require("discord.js");
const fs =require('fs')
module.exports = {
    name: 'loot',
    description: "Random loot",
    execute(message, args){
        fs.readFile('./random_stuff.txt', 'utf8', (err, data) => {
            if(err) return console.log(err)
            let max = 5
            let min = 1
            let random = Math.random() * (max - min) + min;
            data=data.split(',')
            console.log(data[random])
        
        })
    }
}