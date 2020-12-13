const Discord = require("discord.js");

module.exports = {
    name: 'softban',
    description: "softbans someone.",
    execute(message, args){
        const user = message.guild.member(message.mentions.users.first());
        const reason = args.slice(1).join(" ");
        const iusar = message.mentions.users.first();
        const banRole = message.guild.roles.cache.find(r => r.name === 'Hammered')
        if(!message.member.hasPermission("BAN_MEMBERS")){
            message.channel.send("You don't have permission to ban.")
        }else{
         if(user){

            if(!reason){
                const bannoreasEmbed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setDescription( `Please insert a reason. ` )
                .setTimestamp()
                .setFooter(process.env.DEVELOPER)
                    message.channel.send(bannoreasEmbed);
                }else{
                    if(message.mentions.users.first() == message.author || user.hasPermission('BAN_MEMBERS') ||  user.hasPermission('ADMINISTRATOR') ) {
                        const noBanModz = new Discord.MessageEmbed()
                        .setColor("RANDOM")
                        .setDescription( `The user you tried to ban is a mod/admin. ` )
                        .setTimestamp()
                        .setFooter(process.env.DEVELOPER)
                        return message.channel.send(noBanModz)
                    }
                    user.roles.set([]).catch(console.error)
                    
                    .then(() => {
                        user.roles.add(banRole.id)
                        const banEmbed = new Discord.MessageEmbed()
                        .setColor("RANDOM")
                        .setDescription( `${iusar.tag} was successfully banned. ` )
                        .addField('Reason:', `${reason}`)
                        .addField('Moderator:', `${message.author.tag}`)
                        .setImage('https://cdn.discordapp.com/attachments/705049194682908782/758245013947285514/rcik_ban.gif')
                        .setTimestamp()
                        .setFooter(process.env.DEVELOPER)
                            message.channel.send(banEmbed);
                        })
                        .catch(err => {
                          message.channel.send('I was unable to ban the member');
                          console.error(err);
                        });
                }
          
        
      
        }else{
            const banhelpEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("-softban (member) (reason)")
            .setDescription( `Softbans a mamber.` )
            .setFooter(`${process.env.DEVELOPER} • ()-required arguments, []-optional arguments`);
                message.channel.send(banhelpEmbed);
        }

    }

    



    }
}