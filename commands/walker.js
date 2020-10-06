const Discord = require("discord.js");

module.exports = {
    name: 'walker',
    description: "walkers",
    execute(message, args){
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }
        var msg = getRandomInt(0, 20);//20 cazuri de la 0 la 19
        var gif = getRandomInt(0, 6);
        var mesajembed;
        if(msg <= 3){//4 din 20 sansa
            mesajembed = "Here's some biters."
        }
        if(msg <= 12 && msg > 3){//7 din 20 sansa
            mesajembed = "Here's some geeks."
        }
        if(msg > 12){//9 din 20 sansa
            mesajembed = "Here's some walkers."
        }
        var gifembed;
        if(gif == 0){
            gifembed = "https://cdn.discordapp.com/attachments/705049194682908782/754269504716013628/giphy_15.gif";
        }
        if(gif == 1){
            gifembed = "https://cdn.discordapp.com/attachments/705049194682908782/754269535032311808/giphy_16.gif";//morgans wife
        }
        if(gif == 2){
            gifembed = "https://cdn.discordapp.com/attachments/705049194682908782/754269577684320296/giphy_17.gif";//walker cut by carol while going to the kingdom?
        }
        if(gif == 3){
            gifembed = "https://cdn.discordapp.com/attachments/705049194682908782/754270424312971285/RemorsefulBadDuckbillplatypus-size_restricted.gif";//the bike guy
        }
        if(gif == 4){
            gifembed = "https://cdn.discordapp.com/attachments/705049194682908782/754270659693117460/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f.gif";//winslow kred
        }
        if(gif == 5){
            gifembed = "https://cdn.discordapp.com/attachments/705049194682908782/758238531209658378/tenor_1.gif";//walker girl, at the start
        }
        if(gif == 6){
            gifembed = "https://cdn.discordapp.com/attachments/753567636968833103/763121371331952650/walkr.gif";//walkers start ricc cu kalu
        }

        const walkerEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(mesajembed)
        .setImage(gifembed)
        .setTimestamp()
        .setFooter(process.env.DEVELOPER)


        message.channel.send(walkerEmbed);

    }
}