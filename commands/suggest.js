const Discord = require("discord.js");

module.exports = {
    name: 'suggest',
    description: "Suggest something.",
    execute(message, args){
        const msg = args.slice(0).join(" ");
       const suggest = new Discord.MessageEmbed()
       .setColor("RANDOM")
        .setDescription(`<@${message.author.id}> suggests:`)
        .addField(msg , "Vote 👍 if you want to see this added or vote 👎 if you don't.")
        .setTimestamp()
        .setFooter(process.env.DEVELOPER)
        message.delete()
        message.channel.send(suggest).then(sentEmbed => {
            sentEmbed.react("👍");
            sentEmbed.react("👎");
        });
    }
}
