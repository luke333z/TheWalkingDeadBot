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
                
                
                .addField(`__**My developers:**__`, "Lead developer - luke.#3908\nDeveloper - EfectivRhiana#0721")
                .addField(`__**Special thanks to:**__`, "TheFlagen430297#2546\nshade_0x#2874")
                .addField(`__**Latest update:**__`, "```diff\n-Added bingus command.\n-Started working on something secret.\n-Solved some bugs.\n-Made the Server-only commands really Server-only.\n-Ate Pizza. ```")
                
                .setTimestamp()
    

                message.channel.send(botinfoEmbed);
        }
    }
