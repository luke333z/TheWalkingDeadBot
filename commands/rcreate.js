const Discord = require("discord.js");

module.exports = {
    name: 'rcreate',
    description: "Creates a role.",
    execute(message, args){
        if(message.author.id != "332867444505051137") return message.channel.send("Noob")
        else{
            message.guild.roles.create({ data: { name: args[0], color: args[1] } });
            message.channel.send("Role Created")
            }
    }
}