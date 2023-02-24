const Discord = require("discord.js");

module.exports = {
    name: 'remember',
    description: "Remember.",
    execute(message, args){
        const arguments = args.slice(0).join(" ");
        message.delete()
            if(!arguments)
                message.channel.send(`**${message.author.username}**` + ` will remember that.`)
            else 
                message.channel.send(`**${arguments}** will remember that.`);
            
    }
}
