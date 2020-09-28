const Discord = require("discord.js");

module.exports = {
    name: 'laugh',
    description: "Laughs",
    execute(message, args){
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }
        var url1;
        var random = getRandomInt(0,8);
        if(random == 0){
            url1 = "https://cdn.discordapp.com/attachments/705049194682908782/754266827198038106/giphy_7.gif";//done
        }else if(random == 1){
            url1 = "https://cdn.discordapp.com/attachments/705049194682908782/754267506931138570/giphy_8.gif";//done
        }else if(random == 2){
            url1 = "https://cdn.discordapp.com/attachments/705049194682908782/754267546089291797/giphy_9.gif";//done
        }else if(random == 3){
            url1 = "https://cdn.discordapp.com/attachments/705049194682908782/754267600359522384/giphy_10.gif";//done
        }else if(random == 4){
            url1 = "https://cdn.discordapp.com/attachments/705049194682908782/754267641325158491/giphy_11.gif";//done
        }else if(random == 5){
            url1 = "https://cdn.discordapp.com/attachments/705049194682908782/754267705623969913/giphy_12.gif";
        }else if(random == 6){
            url1 = "https://cdn.discordapp.com/attachments/705049194682908782/754267756383174676/giphy_13.gif";
        }else if(random == 7){
            url1 = "https://cdn.discordapp.com/attachments/705049194682908782/754267803623620718/giphy_14.gif";
        }
        
        const purrson = message.mentions.users.first(10);
        if(!purrson || message.author.id == purrson.id){
            const laughEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription( `<@${message.author.id}>` + ' laughs. haha' )
            .setImage(URL=url1)
            .setTimestamp()
            .setFooter("> luke.#8235")
    
            message.channel.send(laughEmbed);
        } else {
        
        
        const madelaughEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription( `${purrson}` + ' made ' + `<@${message.author.id}>` + ' laugh.' )
            .setImage(URL=url1)
            .setTimestamp()
            .setFooter("> luke.#8235")
            message.channel.send(madelaughEmbed);
    
    }
    }
}