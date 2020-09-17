const Discord = require("discord.js");

module.exports = {
    name: 'f',
    description: "pay your respects",
    execute(message, args){
        const fEmbed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setDescription(`${message.author.username}` + ` has paid their respects.`)
        .setTimestamp()
        .setFooter("> luke.#0003")
        message.channel.send(fEmbed);
    }
}