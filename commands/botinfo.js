const Discord = require("discord.js");
 
module.exports = {
    name: 'botinfo',
    description: "Information about the bot",
    execute(message, args){
    
                const botinfoEmbed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .addField(`**Server count:**`, message.client.guilds.cache.size);
    

                message.channel.send(botinfoEmbed);
        }
    }
