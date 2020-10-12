const Discord = require("discord.js");
 
module.exports = {
    name: 'botinfo',
    description: "Information about the bot",
    execute(message, args, prefix){
                
                const botinfoEmbed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setDescription("**Hi!**\n I'm The Walking Dead Bot!\n If you want to  see all the things I'm programmed to do, just type `-help` ")
                .addField(`**Server count:**`, message.client.guilds.cache.size, true)
                .addField(`**Total users:**`, message.client.users.cache.size, true)
                .addField(`**Server prefix:**`, prefix, true)
                
                
                .addField(`__**My developers:**__`, "Lead developer - luke.#8235\nDeveloper - TaraChambler13#0721")
                .addField(`__**Special thanks to:**__`, "TheFlagen430297#2546\nnot_clipz#2874")
                .setFooter("[Invite Me](https://discord.com/api/oauth2/authorize?client_id=748105665301708883&permissions=8&scope=bot), [The Walking Dead Server](https://discord.gg/pqckK8q)")
                .setTimestamp()
    

                message.channel.send(botinfoEmbed);
        }
    }
