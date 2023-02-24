const Discord = require("discord.js");

module.exports = {
    name: 'invite',
    description: "Sends bot invite link.",
    execute(message, args){
        const negan = args.slice(0).join(" ");
    
        const invEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription("[Invite Me To Your Server](https://discord.com/api/oauth2/authorize?client_id=748105665301708883&permissions=8&scope=bot)")
        .setTimestamp()
        .setFooter(process.env.DEVELOPER)
        message.channel.send(invEmbed);
       
    }
}