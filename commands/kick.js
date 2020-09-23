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
            member
            .kick(reason)
            .then(() => {
              
                const kickEmbed = new Discord.MessageEmbed()
                .setColor('#ff00cd')
                .setDescription( `${user.tag} was successfully kicked. ` )
                .addField('Reason:', `${reason}`)
                .addField('Moderator:', `${message.author.tag}`)
                .setTimestamp()
                .setFooter("> luke.#0003")
                    message.channel.send(kickEmbed);
            })
            .catch(err => {
              message.channel.send('I was unable to kick the member');
              console.error(err);
            });
        }else{
            const kicknoEmbed = new Discord.MessageEmbed()
            .setColor('#ff00cd')
            .setDescription( `This user isn't in this server. ` )
            .setTimestamp()
            .setFooter("> luke.#0003")
                message.channel.send(kicknoEmbed);
            }
        }else{
            const kickhelpEmbed = new Discord.MessageEmbed()
            .setColor('#ff00cd')
            .setTitle("-kick [member] [reason]")
            .setDescription( `Kicks a mamber.` )
            .setTimestamp()
            .setFooter("> luke.#0003")
                message.channel.send(kickhelpEmbed);
        }

    }





    }
}