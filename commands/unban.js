const Discord = require("discord.js");

module.exports = {
    name: 'unban',
    description: "unbans someone.",
    execute(message, args){
        const user = message.guild.member(message.mentions.users.first());
        const iusar = message.mentions.users.first();
        const Role = message.guild.roles.cache.find(r => r.name === 'TheWalkingDeadFan')
        if(!message.member.hasPermission("BAN_MEMBERS")){
            message.channel.send("You don't have permission to unban.")
        }else{
         if(user){

            
               if(user.roles.cache.has('772699412144324668')){
                    
                    user.roles.set([]).catch(console.error)
                    
                    .then(() => {
                        user.roles.add(Role.id)
                        const banEmbed = new Discord.MessageEmbed()
                        .setColor("RANDOM")
                        .setDescription( `${iusar.tag} was successfully unbanned. ` )
                        .addField('Moderator:', `${message.author.tag}`)
                        .setTimestamp()
                        .setFooter(process.env.DEVELOPER)
                            message.channel.send(banEmbed);
                        })
                        .catch(err => {
                          message.channel.send('I was unable to unban the member');
                          console.error(err);
                        });
                    }else return message.channel.send("That member isn't banned.")
          
        
      
            }else{
            const banhelpEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("-unban (member)")
            .setDescription( `Unbans a mamber.` )
            .setFooter(`${process.env.DEVELOPER} • ()-required arguments, []-optional arguments`);
                message.channel.send(banhelpEmbed);
        }

    }

    



    }
}