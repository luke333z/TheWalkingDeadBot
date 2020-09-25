const Discord = require("discord.js");

module.exports = {
    name: 'prefix',
    description: "prefix",
    execute(message, args){
       
            if (args.length) {
                await prefixes.set(message.guild.id, args[0]);
                return message.channel.send(`Successfully set prefix to \`${args[0]}\``);
            }
        
            return message.channel.send(`Prefix is \`${await prefixes.get(message.guild.id) || globalPrefix}\``);
        }

    }
