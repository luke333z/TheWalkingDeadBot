const Discord = require("discord.js");

module.exports = {
    name: 'simp',
    description: "simp",
    execute(message, args){
        let user = message.mentions.users.first(5)
        if(!user){
            message.delete();
            message.channel.send("🇸 🇮 🇲 🇵")
        }else{
            const embed = new Discord.MessageEmbed().setColor("RANDOM").setDescription(`**${message.guild.member(user).displayName}** is a 🇸 🇮 🇲 🇵`).setTimestamp().setFooter(process.env.DEVELOPER);
            message.channel.send(embed);
        }
     
    }
}