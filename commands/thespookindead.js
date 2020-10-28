const Discord = require("discord.js");

module.exports = {
    name: 'thespookindead',
    description: "The Spookin' Dead",
    execute(message, args){
        if(args[0]==='submit'){
            message.delete();
            const story = args.slice(1).join(" ");
            const submit = new Discord.MessageEmbed()
            .setTitle(`Submitted story from: **${message.author.tag}** `)
            .setDescription(story)
            .setColor("RANDOM")
            .setTimestamp()
            message.guild.members.cache.get('332867444505051137').send(submit)
        }

        if(args[0]==='edit'){
            message.delete();
            const story = args.slice(1).join(" ");
            const submit = new Discord.MessageEmbed()
            .setTitle(`**${message.author.tag}** just edited his spooky story.`)
            .setDescription(story)
            .setColor("RANDOM")
            .setTimestamp()
            message.guild.members.cache.get('332867444505051137').send(submit)
        }

        if(args[0]==='delete'){
            message.delete();
            const submit = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`**${message.author.tag}** just deleted his spooky story.`)
            .setTimestamp()
            message.guild.members.cache.get('332867444505051137').send(submit)
        }
        if(args[0]==='countdown'){
            if(!message.member.roles.cache.has('747088439660249139')) return;
            message.delete()
            message.channel.send("@everyone <@&765850592463552512> __**The Event Starts in 5 minutes!**__ ")
            .then(message =>{
                setTimeout(() => {
                    message.channel.send("@everyone").then(sentMessage=>{sentMessage.delete()})
                    const desk = new Discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setTimestamp()
                    .setTitle("The Spookin' Dead")
                    .setFooter("The Spookin' Dead 2020 Event")
                    .setDescription("In honour of The Walking Dead's premiere, which was realeased 10 years ago on Halloween, we've decided to organise a scary story contest! \n The scariest story will win the contest, and the author + one of his friends will recieve one custom role each!")
                    .addField("**HOW TO SUBMIT YOUR STORY**","If you want to submit your story, use the command -thespookindead submit <text>.\nIf you want to edit your story, use the command -thespookindead edit <text>.\n If you want to delete your story, use the comand -thespookindead delete.")
                    .addField("**RULES**", "1. You have to write an original story. If we can find it on the internet, you're going to be disqualified.\n2. You can only submit one story, but you can edit or delete it anytime.\n3.Try to keep your story PG-13! (you can use swear words)\n4. Your story has to be related to The Walking Dead.\n 5. The event will end on October 31st, 10pm GMT.")
                    message.channel.send(desk);
            }, 300000);//300000
          
        });
        }
        if(args[0]==='rules'){
     
            const rules = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTimestamp()
            .setTitle("Rules")
            .setFooter("The Spookin' Dead 2020 Event")
            .setDescription("1. You have to write an original story. If we can find it on the internet, you're going to be disqualified.\n2. You can only submit one story, but you can edit or delete it anytime.\n3.Try to keep your story PG-13! (you can use swear words)\n4. Your story has to be related to The Walking Dead.\n 5. The event will end on October 31st, 10pm GMT.")
            message.channel.send(rules);
        }
        if(args[0]==='help'){
     
            const help = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTimestamp()
            .setTitle("How to submit your story")
            .setFooter("The Spookin' Dead 2020 Event")
            .setDescription("If you want to submit your story, use the command -thespookindead submit <text>.\nIf you want to edit your story, use the command -thespookindead edit <text>.\n If you want to delete your story, use the comand -thespookindead delete.")
            message.channel.send(help);
        }


    
}
}