const Discord = require("discord.js");

module.exports = {
    name: 'f',
    description: "Pay your respects.",
    execute(message, args){
        const reason = args.slice(0).join(" ");
        if(!reason){

        const fEmbed = new Discord.MessageEmbed()
        .setColor("#FFD700")
        .setDescription(`${message.author.username}` + ` has paid their respects.`)
        .setTimestamp()
        .setFooter(process.env.DEVELOPER)

        message.channel.send(fEmbed);
        } else {
            const fEmbed = new Discord.MessageEmbed()
            .setColor("#FFD700")
            .setDescription(`${message.author.username}` + ` has paid their respects for **${reason}**.`)
            .setTimestamp()
            .setFooter(process.env.DEVELOPER)
            message.channel.send(fEmbed);
        }
    }
}