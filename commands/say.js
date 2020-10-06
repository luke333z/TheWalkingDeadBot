const Discord = require("discord.js");

module.exports = {
    name: 'say',
    description: "Make me say someting.",
    execute(message, args){
        const msg = args.slice(0).join(" ");
        if(!msg){
            const say = new Discord.MessageEmbed().setColor("RANDOM").addField("**Usage:** `-say (text)`", "Make me say something.").setFooter(`${process.env.DEVELOPER} • ()-required arguments, []-optional arguments`);
            message.channel.send(say);
        }
        else{
        message.delete();
        message.channel.send(msg);
    }
}
}