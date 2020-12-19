const Discord = require("discord.js");

module.exports = {
    name: 'react',
    description: "¯\_(ツ)_/¯",
    execute(message, args){
        async function declaredAsAsync() {
            const ptk = new Discord.MessageEmbed()
            .setDescription(`<@${message.author.id}> requests permission to kill`);

            const embed1 = new Discord.MessageEmbed()
            .setDescription("dont loff u mig");

            var Msg = await message.channel.send(embed);
            message.react('👍').then(() => message.react('👎'));

            const filter = (reaction, user) => {
                return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.mentions.users.first().id;
            };
            
            message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
                .then(collected => {
                    const reaction = collected.first();
            
                    if (reaction.emoji.name === '👍') {
                        message.channel.send(`<@${message.mentions.users.first().id}>` + "thumbs up");
                        Msg.edit(embed1)
                    } else {
                        message.channel.send(`<@${message.mentions.users.first().id}>` + "thumbs down");
                        Msg.edit(embed1)
                    }
                })
                .catch(collected => {
                    message.reply('you reacted with neither a thumbs up, nor a thumbs down.');
                    Msg.edit(embed1)
                });
                
    }
    declaredAsAsync()
}
}