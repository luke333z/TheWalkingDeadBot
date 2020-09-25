const Discord = require("discord.js");

module.exports = {
    name: 'help',
    description: "Help command",
    execute(message, args){
            const helpEmbed = new Discord.MessageEmbed()
            .setTitle("Hello!")
            .setColor(`#ffff00`)
            .setDescription("Below you can see all the things I'm programmed to do.\n If you need any more help send a message to @luke.#8235.")
            .addField("__**COMMANDS**__", "\u200b")
            .addField("**FUN**", "`f`, `coinflip`, `say`, `shrug`, `ping`")
            .addField("**MODERATION**", "`ban`, `kick`, `clean`, `purge`")
            .addField("**GIFS**", "`kiss`, `hug`, `cry`, `laugh`, `walker`, `bite`, `insult`, `fistbump`")
            .addField("**UTIL**", "`avatar`, `help`, `userinfo`")
            .addField("**Use `-help <Commmand>` for more information about a category.**", "**Example:** \n`-help avatar` for more info about the avatar command.")
            .addField("Useful links:", "[Invite Me](https://discord.com/api/oauth2/authorize?client_id=748105665301708883&permissions=8&scope=bot), [The Walking Dead Server](https://discord.gg/ndvbjpZ)")
            .setTimestamp()
            .setFooter("> luke.#8235");
        message.channel.send(helpEmbed);
    }
}