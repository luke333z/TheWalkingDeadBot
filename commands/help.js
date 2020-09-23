const Discord = require("discord.js");

module.exports = {
    name: 'help',
    description: "Help command",
    execute(message, args){
            const helpEmbed = new Discord.MessageEmbed()
            .setTitle("Hello!")
            .setColor(`#ffff00`)
            .setDescription("Below you can see all the things I'm programmed to do.\n If you need any more help send a message to @luke.#0003.")
            .addField("**COMMANDS**", "`ping`, `f`, `help`, `kiss`, `hug`, `cry`, `laugh`, `walker`, `bite`, `fyou`, `coinflip`, `ban`, `kick`,  ...")
            .addField("If you want to know more about a commmand, just use it. :D", "Or just contact some staff.")
            .addField("Useful links:", "[Invite Me](https://discord.com/api/oauth2/authorize?client_id=748105665301708883&permissions=8&scope=bot), [The Walking Dead Server](https://discord.gg/ndvbjpZ)")
            .setTimestamp()
            .setFooter("> luke.#0003");
        message.channel.send(helpEmbed);
    }
}