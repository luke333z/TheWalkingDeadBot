const Discord = require("discord.js");

module.exports = {
    name: 'insult',
    description: "fucks you",
    execute(message, args){
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }
        var url1;
        var random = getRandomInt(0,5);
        if(random == 0){
            url1 = "https://cdn.discordapp.com/attachments/705049194682908782/758237314371158046/tara_gif.gif";
        }else if(random == 1){
            url1 = "https://cdn.discordapp.com/attachments/705049194682908782/758236871888601098/tenor_2.gif"
        }else if(random == 2){
            url1 = "https://cdn.discordapp.com/attachments/705049194682908782/758237032337768468/tenor_3.gif"
        }else if(random == 3){
            url1 = "https://cdn.discordapp.com/attachments/705049194682908782/758237088918405130/tenor_4.gif"
        }else if(random == 4){
            url1 = "https://cdn.discordapp.com/attachments/705049194682908782/758247813032181780/tenor_6.gif"
        }
        
        const purrson = message.mentions.users.first(10);
        if(!purrson || message.author.id == purrson.id){
            const fyouEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription( `<@${message.author.id}>` + ' insults themselves? huh' )
            .setImage(URL=url1)
            .setTimestamp()
            .setFooter("> luke.#8235")
    
            message.channel.send(fyouEmbed);
        } else {
        
        
        const fuEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`<@${message.author.id}>` + ' insults ' + `${purrson}` + '. ' )
            .setImage(URL=url1)
            .setTimestamp()
            .setFooter("> luke.#8235")
            message.channel.send(fuEmbed);
    
    }
}
}