const Discord = require("discord.js");

module.exports = {
    name: 'oc',
    description: "oc requests",
    execute(message, args){
        if(args[0]== "approve"){
         message.delete();
         let user =message.mentions.users.first().username;
          let hi = args.slice(2).join(" ");
          if(!user || !hi) return;
          const embd = new Discord.MessageEmbed()
          .setTitle(`${user}'s OC has been approved!`)
          .setDescription(hi)
          .setFooter(process.env.DEVELOPER)
          .setTimestamp();
          
          message.channel.send(embd);
        }
    }
}