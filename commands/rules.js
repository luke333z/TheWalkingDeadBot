const Discord = require("discord.js");

module.exports = {
    name: 'rules',
    description: "Rules",
    execute(message, args){
        const ruleembed = new Discord.MessageEmbed()
            .setColor("#0099ff")
            .setTitle("**Server Rules**")
            .setDescription("Breaking any of the following rules can result in punishment ranging from warnings all the way to permanent bans from this server.")
            .setAuthor("The Walking Dead Server", message.guild.iconURL({size: 2048, dynamic: true}))
            .addFields(
                { name: "**Rule 1 - Respect Discord's Terms of service**", value: 'That includes and its not limited to: no nsfw, targeted hate or advertising in the server or DMs.' },
                { name: "**Rule 2 - No randomly pinging staff or members**", value: "That is just annoying and you're evil." },
                { name: "**Rule 3 - LGBTQ+ friendly and no racism**", value: "This server is LGBTQ+ friendly and supports the BLM movement. If you don't like this, please leave now." },
                { name: "**Rule 4 - No drama or toxicity**", value: "Try not to spam , and don't go out of your way to attempt to cause other aggravation. Excessive toxicity and drama will result in a ban." },
                { name: "**Rule 5 - Use the channels for their correct purpose**", value: "Respect the channel topic, for example, don't use bot commands in off topic channels." },
                { name: "**Rule 6 - Do not post personal information about other members**", value: "Do not post information or pictures of other people without their permission." },
                { name: "**BONUS RULE - Listen to the staff team**", value: "We are trying to keep this server clean and welcoming , so when we ask you to stop, please do so." },
                { name: "**Other Guidelines to Respect:**", value: "-No Minimodding\n-Stick to English\n-No Spoilers\n-No Unpingable Nicknames" },
            )
            .setFooter("Have Fun!")
        //message.channel.send(ruleembed)
    }
}