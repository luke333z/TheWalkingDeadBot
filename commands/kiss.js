const Discord = require("discord.js");

module.exports = {
    name: 'kiss',
    description: "Kisses someone.",
    execute(message, args){
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }
        var url1;
        var random = getRandomInt(0,4);
        if(random == 0){
            url1 = "https://media4.giphy.com/media/3oriOax5N6VycfIYRG/giphy.gif?cid=ecf05e47b5e5badcc065b6250a4cb1c5c66a92a615287596&rid=giphy.gif";
        }else if(random == 1){
            url1 = "https://media1.giphy.com/media/l2JhnmPJPN8qfidtC/giphy.gif?cid=ecf05e4778td6n88nte9nmjlal4qgw2wlxjbpuu8roc7ko5n&rid=giphy.gif";
        }else if(random == 2){
            url1 = "https://cdn.discordapp.com/attachments/705049194682908782/754035375999156254/tumblr_4bcae52c939274bca63bcfe51398816d_4b5b3bb0_400.gif"
        }else if(random == 3){
            url1 = "https://cdn.discordapp.com/attachments/705049194682908782/754035410937577513/tumblr_nxk4qpRctB1uaie3ho1_500.gif"
        }
        
        const purrson = message.mentions.users.first(10);
        if(!purrson || message.author.id == purrson.id){
            const kissUrselfEmbed = new Discord.MessageEmbed()
            .setColor('#ff0808')
            .setDescription( `<@${message.author.id}>` + ' kissing yourself?! ' + 'So lonely.' )
            .setImage(URL=url1)
            .setTimestamp()
            .setFooter("> luke.#8235")
    
            message.channel.send(kissUrselfEmbed);
        } else {
        
        
        const kissEmbed = new Discord.MessageEmbed()
            .setColor('#ff0808')
            .setDescription('Awww! ' + `<@${message.author.id}>` + ' kisses ' + `${purrson}` + '. They are so cute togheter!' )
            .setImage(URL=url1)
            .setTimestamp()
            .setFooter("> luke.#8235")
            message.channel.send(kissEmbed);
    
    }
}
}