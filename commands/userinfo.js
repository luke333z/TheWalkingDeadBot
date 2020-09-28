const Discord = require("discord.js");

module.exports = {
    name: 'userinfo',
    description: "User information",
    execute(message, args){
        const user = message.mentions.users.first() || message.author;
        const play = message.guild.members.cache.get(user.id).presence.activities;
        if(play.toString()  === ''){
            const infoaEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setAuthor(user.tag, user.displayAvatarURL({size: 2048, dynamic: true}))
            .setThumbnail(user.displayAvatarURL({size: 2048, dynamic: true}))
            .addField('**ID**', `${user.id}`, true)
            .addField('**Nickname**', `${message.guild.members.cache.get(user.id).displayName}`, true)
            .addField('**Status**', `${message.guild.members.cache.get(user.id).presence.status}`, true)
            .addField('**Playing**', `N/A`, true)
            .addField('**Mention**', `<@${user.id}>`, true)
            .setTimestamp()
            .setFooter("> luke.#8235");
            message.channel.send(infoaEmbed);
        
    }else if(!play.toString().startsWith('n')){
        const infoEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setAuthor(user.tag, user.displayAvatarURL({size: 2048, dynamic: true}))
        .setThumbnail(user.displayAvatarURL({size: 2048, dynamic: true}))
        .addField('**ID**', `${user.id}`, true)
        .addField('**Nickname**', `${message.guild.members.cache.get(user.id).displayName}`, true)
        .addField('**Status**', `${message.guild.members.cache.get(user.id).presence.status}`, true)
        .addField('**Playing**', `${play}`, true)
        .addField('**Mention**', `<@${user.id}>`, true)
        .setTimestamp()
        .setFooter("> luke.#8235");
        message.channel.send(infoEmbed);
       
    }
}
}