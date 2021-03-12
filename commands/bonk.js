const Discord = require("discord.js");

module.exports = {
    name: 'bonk',
    description: "go to horny jail.",
    execute(message, args){
        const purrson = message.mentions.users.first();
        if(!purrson || message.author.id == purrson.id){
            const hEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription( `BONK! <@${message.author.id}>` + ' sent himself to Horny Jail' )
            .setImage('https://cdn.discordapp.com/attachments/705049194682908782/819947273014083614/Ricc_BONK.gif')
            .setTimestamp()
            .setFooter(process.env.DEVELOPER)
    
            message.channel.send(hEmbed);
        } else {
        
        
        const hornyEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription( `BONK <@${message.author.id}>` + ' sent ' + `${purrson}` + ' to Horny Jail' )
            .setImage('https://cdn.discordapp.com/attachments/705049194682908782/819947273014083614/Ricc_BONK.gif')
            .setTimestamp()
            .setFooter(process.env.DEVELOPER)
            message.channel.send(hornyEmbed);
    
    }
    }
}