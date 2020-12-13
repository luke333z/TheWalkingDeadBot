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
        var random = getRandomInt(0,7);
        if(random == 0){
            url1 = "https://media4.giphy.com/media/3oriOax5N6VycfIYRG/giphy.gif?cid=ecf05e47b5e5badcc065b6250a4cb1c5c66a92a615287596&rid=giphy.gif";//glenn megi
        }else if(random == 1){
            url1 = "https://media1.giphy.com/media/l2JhnmPJPN8qfidtC/giphy.gif?cid=ecf05e4778td6n88nte9nmjlal4qgw2wlxjbpuu8roc7ko5n&rid=giphy.gif";//glenn megi
        }else if(random == 2){
            url1 = "https://cdn.discordapp.com/attachments/705049194682908782/754035375999156254/tumblr_4bcae52c939274bca63bcfe51398816d_4b5b3bb0_400.gif"//shein lori
        }else if(random == 3){
            url1 = "https://cdn.discordapp.com/attachments/705049194682908782/754035410937577513/tumblr_nxk4qpRctB1uaie3ho1_500.gif"//denise and tara
        }else if(random == 4){
            url1 = "https://cdn.discordapp.com/attachments/753567636968833103/765596765419470918/aaron_und_eric.gif"//aaron shi eric
        }else if(random == 5){
            url1 = "https://cdn.discordapp.com/attachments/753567636968833103/765596768687357993/gless_margret_kissus.gif"//glen megi
        }else if(random == 6){
            url1 = "https://cdn.discordapp.com/attachments/753567636968833103/765596783538995221/sahsah_bob_kis.gif"//sasha bob
        }
        
        const purrson = message.mentions.users.first(5); 
if(!purrson || message.author.id == purrson.id){ 
    const kissUrselfEmbed = new Discord.MessageEmbed() 
    .setColor("RANDOM")
    .setDescription( `<@${message.author.id}>` + ' Kissing yourself?! ' + 'So lonely.' )
    .setImage(URL=url1)
    .setTimestamp()
    .setFooter(process.env.DEVELOPER) 
    message.channel.send(kissUrselfEmbed); 
}else{
    const kissEmbed = new Discord.MessageEmbed() 
    .setColor("RANDOM") 
    .setDescription('Awww! ' + `<@${message.author.id}>` + ' kisses ' + `${purrson}` + '. They are so cute togheter!' )
    .setImage(URL=url1)
    .setTimestamp() 
    .setFooter(process.env.DEVELOPER) 
    message.channel.send(kissEmbed); 
}
}
}
