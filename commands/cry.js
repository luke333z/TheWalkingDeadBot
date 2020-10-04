const Discord = require("discord.js");

module.exports = {
    name: 'cry',
    description: "cry",
    execute(message, args){
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }
        var url1;
        var random = getRandomInt(0,6);
        if(random == 0){
            url1 = "https://cdn.discordapp.com/attachments/705049194682908782/754034081137950770/giphy_1.gif";
        }else if(random == 1){
            url1 = "https://cdn.discordapp.com/attachments/705049194682908782/754041251518611516/tumblr_on3i5vB9jt1tp82kso1_250.gif";
        }else if(random == 2){
            url1 = "https://cdn.discordapp.com/attachments/705049194682908782/754041493399797841/tumblr_njq5zogPZe1t2lmpwo1_400.gif"
        }else if(random == 3){
            url1 = "https://cdn.discordapp.com/attachments/705049194682908782/754041731124691044/tenor.gif"
        }else if(random == 4){
            url1 = "https://cdn.discordapp.com/attachments/705049194682908782/754042148097359912/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f.gif"
        }else if(random == 5){
            url1 = "https://cdn.discordapp.com/attachments/705049194682908782/754042356742881462/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f.gif"
        }
        
        const purrson = message.mentions.users.first();
        if(!purrson || message.author.id == purrson.id){
            const cryEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription( `<@${message.author.id}>` + ' cries.' )
            .setImage(URL=url1)
            .setTimestamp()
            .setFooter(process.env.DEVELOPER)
    
            message.channel.send(cryEmbed);
        } else {
        
        
        const someonemademesadEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`${purrson}` + ' made ' + `<@${message.author.id}>` + ' sad. ' )
            .setImage(URL=url1)
            .setTimestamp()
            .setFooter(process.env.DEVELOPER)
            message.channel.send(someonemademesadEmbed);
    
    }
}
}
