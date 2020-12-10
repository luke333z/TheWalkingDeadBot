const Discord = require("discord.js");

module.exports = {
    name: 'serverinfo',
    description: "serverinfo",
    execute(message, args){
       
        const serverinfoEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`**Information for:** ${message.guild.name}`)
        .addField(`**Server ID:**`, message.guild.id, true)
        .addField(`**Server Owner:**`, message.guild.owner, true)
        .addField(`**Total Roles:**`, message.guild.roles.cache.size, true)
        .addField(`**Created on:**`, message.guild.createdAt, true)
        .addField('**Members:**', `Total: ${message.guild.memberCount}\nHumans: ${message.guild.members.cache.filter(m => !m.user.bot).size}\nBots: ${message.guild.members.cache.filter(m => m.user.bot).size}`, true)
        .setThumbnail(message.guild.iconURL({size: 2048, dynamic: true}))
        .setTimestamp()
        .setFooter(process.env.DEVELOPER);
        message.channel.send(serverinfoEmbed);
    }
}