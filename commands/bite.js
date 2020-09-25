const Discord = require("discord.js");

module.exports = {
    name: 'bite',
    description: "twd walker bite;-;",
    execute(message, args){
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }
        var url1;
        var random = getRandomInt(0,3);
        if(random == 0){
            url1 = "https://cdn.discordapp.com/attachments/705049194682908782/754700612649877634/TWD_1002_JD_0708_0604_RT-1024x650.jpg";
        }else if(random == 1){
            url1 = "https://cdn.discordapp.com/attachments/705049194682908782/754703252205076480/unknown.png";
        }else if(random == 2){
            url1 = "https://cdn.discordapp.com/attachments/705049194682908782/754704053006630972/unknown.png"
        }
        
        const purrson = message.mentions.users.first(10);
        if(!purrson || message.author.id == purrson.id){
            const authorbitEmbed = new Discord.MessageEmbed()
            .setColor('#ff6600')
            .setDescription('Oh no, ' + `<@${message.author.id}>` + ' was bit! ' + 'Get help fast!' )
            .setImage(URL=url1)
            .setTimestamp()
            .setFooter("> luke.#0003")
    
            message.channel.send(authorbitEmbed);
        } else {
        
        
        const bitEmbed = new Discord.MessageEmbed()
            .setColor('#ff6600')
            .setDescription('Oh no, ' + `${purrson}` + ' was bit! ' + 'Get help fast!' )
            .setImage(URL=url1)
            .setTimestamp()
            .setFooter("> luke.#0003")
            message.channel.send(bitEmbed);
    
    }
}
}