const Discord = require("discord.js");

module.exports = {
    name: 'shrug',
    description: "¯\_(ツ)_/¯",
    execute(message, args){
        message.channel.bulkDelete(1);
        message.channel.send(`¯\\_(ツ)_/¯`);
    }
}