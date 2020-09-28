const Discord = require("discord.js");

module.exports = {
    name: 'say',
    description: "Make me say someting.",
    execute(message, args){
        const msg = args.slice(0).join(" ");
        if(!msg){
            const say = new Discord.MessageEmbed().setColor("RANDOM").addField("**Usage:** `-say (text)`", "Make me say something.").setFooter("> luke.#8235 • ()-required arguments, []-optional arguments");
            message.channel.send(say);
        }
        else{
        message.channel.bulkDelete(1);
        message.channel.send(msg);
    }
}
}