const Discord = require("discord.js");

module.exports = {
    name: 'ban',
    description: "Bans someone.",
    execute(message, args){
        const user = message.mentions.users.first();
        const reason = args.slice(1).join(" ");
      if(!message.member.hasPermission("BAN_MEMBERS")){
          message.channel.send("You don't have permission to ban.")
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
                    if(message.mentions.users.first() == message.author  ) {
                        const noBanModz = new Discord.MessageEmbed()
                        .setColor("RANDOM")
                        .setDescription( `The user you tried to ban is a mod/admin. ` )
                        .setTimestamp()
                        .setFooter(process.env.DEVELOPER)
                        return message.channel.send(noBanModz)
                    }


            member
            .ban({
                reason: reason,
              })
              
            .then(() => {
              
                const banEmbed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setDescription( `${user.tag} was successfully banned. ` )
                .addField('Reason:', `${reason}`)
                .addField('Moderator:', `${message.author.tag}`)
                .setImage('https://cdn.discordapp.com/attachments/705049194682908782/819947273014083614/Ricc_BONK.gif')
                .setTimestamp()
                .setFooter(process.env.DEVELOPER)
                    message.channel.send(banEmbed);
            })
            .catch(err => {
              message.channel.send("I was unable to ban the member.");
              console.error(err);
            });
        }
        }else{
            const bannoEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription( `This user isn't in this server. ` )
            .setTimestamp()
            .setFooter(process.env.DEVELOPER)
                message.channel.send(bannoEmbed);
            }
        }else{
            const banhelpEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("-ban (member) (reason)")
            .setDescription( `Bans a mamber.` )
            .setFooter(`${process.env.DEVELOPER} • ()-required arguments, []-optional arguments`);
                message.channel.send(banhelpEmbed);
        }

   }





    }
}