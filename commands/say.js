const Discord = require("discord.js");

module.exports = {
    name: 'say',
    description: "Make me say someting.",
    execute(message, args){
        const msg = args.slice(0).join(" ");
        message.bulkDelete(1);
        message.channel.send(msg);

    }
}