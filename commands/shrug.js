const Discord = require("discord.js");

module.exports = {
    name: 'shrug',
    description: "¯\_(ツ)_/¯",
    execute(message, args){
        message.delete();
        message.channel.send(`¯\\_(ツ)_/¯`);
    }
}