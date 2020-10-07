const Discord = require("discord.js");

module.exports = {
    name: 'ping',//a name
    description: "Shows your ping.",//a descrioption
    execute(message, args){
//your code for the command


        var ping = Date.now() -  message.createdTimestamp + " ms";
        const pingEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle('🏓 Pong!')
        .addField( `${message.author.username}` + `'s ping is:`, ping)
        .setTimestamp()
        .setFooter(process.env.DEVELOPER)

        message.channel.send(pingEmbed);
    }
}