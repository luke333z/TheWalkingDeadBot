const Discord = require("discord.js");

module.exports = {
    name: 'hug',
    description: "Hugs someone.",
    execute(message, args){
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }
        var url1;
        var random = getRandomInt(0,5);
        if(random == 0){
            url1 = "https://cdn.discordapp.com/attachments/705049194682908782/754039810246574170/tumblr_49d5cbf6c2de3ee3f36a95147ff9f6f8_1b38a19d_500.gif";
        }else if(random == 1){
            url1 = "https://cdn.discordapp.com/attachments/705049194682908782/754034147021946961/giphy_2.gif";
        }else if(random == 2){
            url1 = "https://cdn.discordapp.com/attachments/705049194682908782/754034233827393606/giphy_3.gif";
        }else if(random == 3){
            url1 = "https://cdn.discordapp.com/attachments/705049194682908782/754040027469578260/tumblr_0cd9da7336273886989a31cf54209d74_4f510a13_500.gif";
        }else if(random == 4){
            url1 = "https://cdn.discordapp.com/attachments/705049194682908782/754040224182435880/tumblr_7c2d66743f5a3a66a3d2501abbaa4b5b_e913933b_500.gif";
        }
        
        const purrson = message.mentions.users.first();
        if(!purrson || message.author.id == purrson.id){
            const hugsEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription( `<@${message.author.id}>` + ' _hugs_.' )
            .setImage(URL=url1)
            .setTimestamp()
            .setFooter("> luke.#8235")
    
            message.channel.send(hugsEmbed);
        } else {
        
        
        const hugEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription( `<@${message.author.id}>` + ' hugs ' + `${purrson}` + '. 🥺' )
            .setImage(URL=url1)
            .setTimestamp()
            .setFooter("> luke.#8235")
            message.channel.send(hugEmbed);
    
    }
    }
}
