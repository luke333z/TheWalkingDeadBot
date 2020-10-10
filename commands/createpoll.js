const Discord = require("discord.js");

module.exports = {
    name: 'createpoll',
    description: "Creates a poll.",
    execute(message, args){
        if(!message.member.hasPermission("MANAGE_MESSAGES"))return message.channel.send("You don't have permission to do this.");
        const q = args.slice(0).join(" ");
        message.delete();
        const pollEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(q)
        .setDescription(`👍 -  Yes. \n\n👎 - No. `)
        .setTimestamp()
        .setFooter(process.env.DEVELOPER);
        
        message.channel.send(pollEmbed).then(sentEmbed => {
            sentEmbed.react("👍");
            sentEmbed.react("👎");
        });
    }
}