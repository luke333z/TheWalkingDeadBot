const Discord = require("discord.js");

module.exports = {
    name: 'bingus',
    description: "Bingus emoji.",
    execute(message, args){
        message.channel.send("<:bingus:829475084598509601>")
    }
}