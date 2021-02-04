const Discord = require("discord.js");
const client = new Discord.Client();
module.exports = {
    name: 'request',
    description: "¯\_(ツ)_/¯",
    execute(message, args){
        async function declaredAsAsync() {
            ch = client.channels.cache.get('783692577202634773');
    
            const oc = args.slice(0).join(" ");
            if(!oc) return;
            let user =message.author.username;
            const request = new Discord.MessageEmbed()
            .setTitle(`${user}'s oc:`)
            .setDescription(oc);

            const embed1 = new Discord.MessageEmbed()
            .setTitle(`${user}, your oc request has been approved.`)
            .setDescription(oc);
            const embed2 = new Discord.MessageEmbed()
            .setTitle(`${user}, your oc request has been rejected.`)
            .setDescription(oc);

            var Msg = await message.channel.send(request);
            message.channel.send("<@332867444505051137>")
            Msg.react('✅').then(() => Msg.react('❌'));

            const filter = (reaction, user) => {
                return ['✅', '❌'].includes(reaction.emoji.name) && user.id === '332867444505051137';
            };
            
            Msg.awaitReactions(filter, { max: 1, time: 900000, errors: ['time'] })
                .then(collected => {
                    const reaction = collected.first();
                    if (reaction.emoji.name === '✅') {
                        message.channel.send(`<@${message.author.id}>`);
                        Msg.edit(embed1)
                    } else {
                        message.channel.send(`<@${message.author.id}>`);
                        Msg.edit(embed2)
                    }
                })
                .catch(notcollected => {
                    message.reply('Your request was not reviewed. Please make another one.');
                });
                
    }
    declaredAsAsync()
}
}