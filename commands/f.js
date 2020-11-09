const Discord = require("discord.js");

module.exports = {
    name: 'f',
    description: "Pay your respects.",
    execute(message, args){
        const negan = args.slice(0).join(" ");
        if(!negan){
        const fEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`${message.author.username}` + ` has paid their respects.`)
        .setTimestamp()
        .setFooter(process.env.DEVELOPER)
        message.channel.send(fEmbed);
        } else {
            const neganEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`${message.author.username}` + ` has paid their respects for **${negan}**.`)
            .setTimestamp()
            .setFooter(process.env.DEVELOPER)
            message.channel.send(neganEmbed);
        }
    }
}