const Discord = require("discord.js");

module.exports = {
    name: 'ping',
    description: "Shows your ping.",
    execute(message, args){
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