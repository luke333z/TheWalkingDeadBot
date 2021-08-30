const Discord = require("discord.js");

module.exports = {
    name: 'coinflip',
    description: "Heads or tails.",
    execute(message, args){
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }
        var random = getRandomInt(0,2)
        
       
        if(random == 0 ){
            const tailsEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription( `**Tails!**` )
            .setImage("https://cdn.discordapp.com/attachments/705049194682908782/881863209307471872/Tails.gif")
            .setTimestamp()
            .setFooter(process.env.DEVELOPER)
    
            message.channel.send(tailsEmbed);
        } else if(random == 1){
    
        const headsEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription( `**Heads!**` )
        .setImage("https://cdn.discordapp.com/attachments/705049194682908782/881863195462103070/Heads.gif")
        .setTimestamp()
        .setFooter(process.env.DEVELOPER)
            message.channel.send(headsEmbed);
    
    }
}
}