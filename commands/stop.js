const Discord = require("discord.js");

module.exports = {
    name: 'stop',
    description: "Stops the bot.",
    execute(message, args){
        if(message.author.id != "332867444505051137") 
            return message.channel.send("Noob")
        else
            client.stop()
    }
}