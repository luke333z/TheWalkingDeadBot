const Discord = require("discord.js");

module.exports = {
    name: 'ban',
    description: "bans someone.",
    execute(message, args){
        const user = message.mentions.users.first();
        const reason = args.slice(1).join(" ");
        if(!message.member.hasPermission("BAN_MEMBERS")){
            message.channel.send("You don't have permission to ban.")
        }else{
            if(!reason){
                const bannoreasEmbed = new Discord.MessageEmbed()
                .setColor('#ff00cd')
                .setDescription( `Please insert a reason. ` )
                .setTimestamp()
                .setFooter("> luke.#0003")
                    message.channel.send(bannoreasEmbed);
                }else if(user){
            const member = message.guild.member(user);
        
        if(member){
            member
            .ban({
                reason: reason,
              })
              
            .then(() => {
              
                const banEmbed = new Discord.MessageEmbed()
                .setColor('#ff00cd')
                .setDescription( `${user.tag} was successfully banned. ` )
                .addField('Reason:', `${reason}`)
                .addField('Moderator:', `${message.author.tag}`)
                .setImage('https://cdn.discordapp.com/attachments/705049194682908782/758245013947285514/rcik_ban.gif')
                .setTimestamp()
                .setFooter("> luke.#0003")
                    message.channel.send(banEmbed);
            })
            .catch(err => {
              message.channel.send('I was unable to ban the member');
              console.error(err);
            });
        }else{
            const bannoEmbed = new Discord.MessageEmbed()
            .setColor('#ff00cd')
            .setDescription( `This user isn't in this server. ` )
            .setTimestamp()
            .setFooter("> luke.#0003")
                message.channel.send(bannoEmbed);
            }
        }else{
            const banhelpEmbed = new Discord.MessageEmbed()
            .setColor('#ff00cd')
            .setTitle("-ban [member] [reason]")
            .setDescription( `Bans a mamber.` )
            .setTimestamp()
            .setFooter("> luke.#0003")
                message.channel.send(banhelpEmbed);
        }

    }





    }
}