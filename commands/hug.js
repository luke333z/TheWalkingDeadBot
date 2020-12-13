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
        var random = getRandomInt(0,13);
        if(random == 0){
            url1 = "https://cdn.discordapp.com/attachments/705049194682908782/754039810246574170/tumblr_49d5cbf6c2de3ee3f36a95147ff9f6f8_1b38a19d_500.gif";//darul karul
        }else if(random == 1){
            url1 = "https://cdn.discordapp.com/attachments/705049194682908782/754034147021946961/giphy_2.gif";//after winslow ricc mishoun
        }else if(random == 2){
            url1 = "https://cdn.discordapp.com/attachments/705049194682908782/754034233827393606/giphy_3.gif";//darul ricc in hilltop
        }else if(random == 3){
            url1 = "https://cdn.discordapp.com/attachments/705049194682908782/754040027469578260/tumblr_0cd9da7336273886989a31cf54209d74_4f510a13_500.gif";//carul darul langa the kingdom
        }else if(random == 4){
            url1 = "https://cdn.discordapp.com/attachments/705049194682908782/754040224182435880/tumblr_7c2d66743f5a3a66a3d2501abbaa4b5b_e913933b_500.gif";//carol daryl
        }else if(random == 5){
            url1 = "https://cdn.discordapp.com/attachments/753567636968833103/765594036517863485/coralricc_hughhughu.gif";//carl ricc
        }else if(random == 6){
            url1 = "https://cdn.discordapp.com/attachments/753567636968833103/765594048361660476/ty_and_sasha.gif";//sasha ty
        }else if(random == 7){
            url1 = "https://cdn.discordapp.com/attachments/753567636968833103/765594061246693416/ricc_carul_hug.gif";//ricc carul
        }else if(random == 8){
            url1 = "https://cdn.discordapp.com/attachments/753567636968833103/765594072559517706/sahsa_ty.gif";//ty sasha
        }else if(random == 9){
            url1 = "https://cdn.discordapp.com/attachments/753567636968833103/765594084055449650/this_guy_and_beth_hugg.gif";//beth shi asta
        }else if(random == 10){
            url1 = "https://cdn.discordapp.com/attachments/753567636968833103/765594106192724018/darul_karul_hug.gif";//darul karul
        }else if(random == 11){
            url1 = "https://cdn.discordapp.com/attachments/753567636968833103/765594118289621053/megi_mishoun_huggug.gif";//megi mishoun
        }else if(random == 12){
            url1 = "https://cdn.discordapp.com/attachments/753567636968833103/765594126808514600/glenus_megus_hugus.gif";//glenn megi
        }
        
        const purrson = message.mentions.users.first(5);
        if(!purrson || message.author.id == purrson.id){
            const hugsEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription( `<@${message.author.id}>` + ' Hugging yourself?! So lonely....' )
            .setImage(URL=url1)
            .setTimestamp()
            .setFooter(process.env.DEVELOPER)
    
            message.channel.send(hugsEmbed);
        } else {
        
        
        const hugEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription( `<@${message.author.id}>` + ' hugs ' + `${purrson}` + '. 🥺' )
            .setImage(URL=url1)
            .setTimestamp()
            .setFooter(process.env.DEVELOPER)
            message.channel.send(hugEmbed);
    
    }
    }
}
