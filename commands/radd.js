const Discord = require("discord.js");

module.exports = {
    name: 'radd',
    description: "Adds a role.",
    execute(message, args){
        if(message.author.id != "332867444505051137") return;
        else{
            const user = message.guild.member(message.mentions.users.first());
            const gibRole = message.guild.roles.cache.find(r => r.name === `${args[0]}`)
            user.roles.add(gibRole)
            message.channel.send("Role Added")
            }
    }
}