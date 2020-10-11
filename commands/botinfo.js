const Discord = require("discord.js");
 
module.exports = {
    name: 'botinfo',
    description: "Information about the bot",
    execute(message, args){
                let uptime = message.client.uptime;
                const botinfoEmbed = new Discord.MessageEmbed()
                .setColor("RANDOM")

                .addField(`**Server count:**`, message.client.guilds.cache.size)
                .addField(`**Uptime:**`, `${uptime}ms.`);
    

                message.channel.send(botinfoEmbed);
        }
    }
