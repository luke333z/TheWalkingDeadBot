const Discord = require("discord.js");

module.exports = {
    name: 'ping',
    description: "Shows your ping.",
    execute(message, args){
        var ping = Date.now() -  message.createdTimestamp + " ms";
        const pingEmbed = new Discord.MessageEmbed()
        .setColor('#ff0808')
        .setTitle('🏓 Pong!')
        .addField( `${message.author.username}` + `'s ping is:`, ping)
        .setTimestamp()
        .setFooter("> luke.#0003")

        message.channel.send(pingEmbed);
    }
}