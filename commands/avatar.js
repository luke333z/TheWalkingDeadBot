const Discord = require("discord.js");

module.exports = {
    name: 'avatar',
    description: "Shows your avatar",
    execute(message, args){
        const user = message.mentions.users.first() || message.author;
        const avatarEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setAuthor(user.tag)
        .setImage(user.displayAvatarURL({size: 2048, dynamic: true}))
        .setTimestamp()
        .setFooter(process.env.DEVELOPER);
        message.channel.send(avatarEmbed);
    }
}