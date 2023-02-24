const Discord = require("discord.js");

module.exports = {
    name: 'fistbump',
    description: "TWD fistbump gifs",
    execute(message, args){
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }
        var url1;
        var random = getRandomInt(0,1);
        if(random == 0){
            url1 = "https://cdn.discordapp.com/attachments/753567636968833103/765593213187784755/tara_fisty_bump.gif";
        }
        
        const purrson = message.mentions.users.first();
        if(!purrson || message.author.id == purrson.id){
            const fistEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription( `<@${message.author.id}>` + ' fistbumps.' )
            .setImage(URL=url1)
            .setTimestamp()
            .setFooter(process.env.DEVELOPER)
    
            message.channel.send(fistEmbed);
        } else {
        
        
        const fistbumpEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription( `<@${message.author.id}>` + ' fistbumps ' + `${purrson}` )
            .setImage(URL=url1)
            .setTimestamp()
            .setFooter(process.env.DEVELOPER)
            message.channel.send(fistbumpEmbed);
    
    }
}
}
