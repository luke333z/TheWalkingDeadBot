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
            .setColor('#ff00cd')
            .setDescription( `Tails!` )
            .setTimestamp()
            .setFooter("> luke.#8235")
    
            message.channel.send(tailsEmbed);
        } else if(random == 1){
    
        const headsEmbed = new Discord.MessageEmbed()
        .setColor('#ff00cd')
        .setDescription( `Heads!` )
        .setTimestamp()
        .setFooter("> luke.#8235")
            message.channel.send(headsEmbed);
    
    }
}
}