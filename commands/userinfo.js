const Discord = require("discord.js");

module.exports = {
    name: 'userinfo',
    description: "User information",
    execute(message, args){
      
        const user = message.mentions.users.first() || message.author;
        const play = message.guild.member(user).presence.activities;
   
        if(play.toString()  === ''){
            const infoaEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setAuthor(user.tag, user.displayAvatarURL({size: 2048, dynamic: true}))
            .setThumbnail(user.displayAvatarURL({size: 2048, dynamic: true}))
            .addField('**ID**', `${user.id}`, true)
            .addField('**Nickname**', `${message.guild.member(user).displayName}`, true)
            .addField('**Status**', `${message.guild.member(user).presence.status}`, true)
            .addField('**Playing**', `N/A`, true)
            .addField('**Mention**', `<@${user.id}>`, true)
            .addField('**Created on**', `${user.createdAt}`, true)
            .addField('**Joined on**', `${message.guild.member(user).joinedAt}`, true)
            .addField('**Roles**', `${message.guild.member(user).roles.cache.map(r => r.name)}`, true)

            .setTimestamp()
            .setFooter(process.env.DEVELOPER);
            message.channel.send(infoaEmbed);
        
    }else{
        const infoEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setAuthor(user.tag, user.displayAvatarURL({size: 2048, dynamic: true}))
        .setThumbnail(user.displayAvatarURL({size: 2048, dynamic: true}))
        .addField('**ID**', `${user.id}`, true)
        .addField('**Nickname**', `${message.guild.member(user).displayName}`, true)
        .addField('**Status**', `${message.guild.member(user).presence.status}`, true)
        .addField('**Playing**', `${play}`, true)
        .addField('**Mention**', `<@${user.id}>`, true)
        .addField('**Created on**', `${user.createdAt}`, true) 
        .addField('**Joined on**', `${message.guild.member(user).joinedAt}`, true)
        .addField('**Roles**', `${message.guild.member(user).roles.cache.map(r => r.name)}`, true)
        .setTimestamp()
        .setFooter(process.env.DEVELOPER);
        message.channel.send(infoEmbed);
       
    }
}
}
