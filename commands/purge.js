const Discord = require("discord.js");

module.exports = {
    name: 'purge',
    description: "Deletes messages.",
    execute(message, args){
        const amount = parseInt(args[0]);
        if(!args[0]){
            const purge = new Discord.MessageEmbed().setColor("RANDOM").addField("**Usage:** `-purge (number)`", "Deletes messages.").setFooter("> luke.#8235 • ()-required arguments, []-optional arguments");
            message.channel.send(purge);
            return;
        }
        if (isNaN(amount)) {
            return;
        }else if(args[0]<= 100){
                message.channel.bulkDelete(amount);
                message.channel.send('Deleted `' + `${amount}` + '` messages')
            }else{
                message.channel.send("I can't delete more than `100` messages")
            }
    }
}