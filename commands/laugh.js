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
        var random = getRandomInt(0,9);
        if(random == 0){
            url1 = "https://cdn.discordapp.com/attachments/705049194682908782/754266827198038106/giphy_7.gif";//ricc haha
        }else if(random == 1){
            url1 = "https://cdn.discordapp.com/attachments/705049194682908782/754267506931138570/giphy_8.gif";//merle haha
        }else if(random == 2){
            url1 = "https://cdn.discordapp.com/attachments/705049194682908782/754267546089291797/giphy_9.gif";//negan haha
        }else if(random == 3){
            url1 = "https://cdn.discordapp.com/attachments/705049194682908782/754267600359522384/giphy_10.gif";//ricc smile
        }else if(random == 4){
            url1 = "https://cdn.discordapp.com/attachments/705049194682908782/754267641325158491/giphy_11.gif";//negan smile
        }else if(random == 5){
            url1 = "https://cdn.discordapp.com/attachments/705049194682908782/754267705623969913/giphy_12.gif";//darul ku o fata smile
        }else if(random == 6){
            url1 = "https://cdn.discordapp.com/attachments/705049194682908782/754267756383174676/giphy_13.gif";//ricc smile2
        }else if(random == 7){
            url1 = "https://cdn.discordapp.com/attachments/705049194682908782/754267803623620718/giphy_14.gif";//lil ass kicker
        }
        else if(random == 8){
            url1 = "https://cdn.discordapp.com/attachments/753567636968833103/765597937401069628/mishoun_smile.gif";//mishoun haha
        }
        
        const purrson = message.mentions.users.first();
        if(!purrson || message.author.id == purrson.id){
            const laughEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription( `<@${message.author.id}>` + ' laughs. haha' )
            .setImage(URL=url1)
            .setTimestamp()
            .setFooter(process.env.DEVELOPER)
    
            message.channel.send(laughEmbed);
        } else {
        
        
        const madelaughEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription( `${purrson}` + ' made ' + `<@${message.author.id}>` + ' laugh.' )
            .setImage(URL=url1)
            .setTimestamp()
            .setFooter(process.env.DEVELOPER)
            message.channel.send(madelaughEmbed);
    
    }
    }
}
