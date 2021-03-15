const Discord = require("discord.js");

module.exports = {
    name: 'kick',
    description: "Kicks someone.",
    execute(message, args){
        const user = message.mentions.users.first();
        const reason = args.slice(1).join(" ");
      if(!message.member.hasPermission("KICK_MEMBERS")){
           message.channel.send("You don't have permission to kick.")
     }else{
        if(user){
            const member = message.guild.member(user);
        
        if(member){
            if(!reason){
                const bannoreasEmbed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setDescription( `Please insert a reason. ` )
                .setTimestamp()
                .setFooter(process.env.DEVELOPER)
                    message.channel.send(bannoreasEmbed);
                }else{
                    if(message.mentions.users.first() == message.author ) {
                        const noBanModz = new Discord.MessageEmbed()
                        .setColor("RANDOM")
                        .setDescription( `The user you tried to kick is a mod/admin. ` )
                        .setTimestamp()
                        .setFooter(process.env.DEVELOPER)
                        return message.channel.send(noBanModz)
                    }

            member
            .kick(reason)
            .then(() => {
              
                const kickEmbed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setDescription( `${user.tag} was successfully kicked. ` )
                .addField('Reason:', `${reason}`)
                .addField('Moderator:', `${message.author.tag}`)
                .setTimestamp()
                .setFooter(process.env.DEVELOPER)
                    message.channel.send(kickEmbed);
            })
            .catch(err => {
              message.channel.send('I was unable to kick the member');
              console.error(err);
            });
        }
        }else{
            const kicknoEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription( `This user isn't in this server. ` )
            .setTimestamp()
            .setFooter(process.env.DEVELOPER)
                message.channel.send(kicknoEmbed);
            }
        }else{
            const kickhelpEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("-kick (member) (reason)")
            .setDescription( `Kicks a mamber.` )
            .setFooter(`${process.env.DEVELOPER} • ()-required arguments, []-optional arguments`);
                message.channel.send(kickhelpEmbed);
        }

 }





    }
}