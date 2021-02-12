const Discord = require("discord.js");

module.exports = {
    name: 'commands',
    description: "Pay your respects.",
    execute(message, args){
       
        const command = "`f`, `coinflip`, `say`, `shrug`, `ping`, `simp`, `remember`, `ban`, `kick`, `kiss`, `hug`, `cry`, `laugh`, `walker`, `bite`, `insult`, `fistbump`, `avatar`, `userinfo`, `prefix`, `serverinfo`, `poll`, `botinfo`"
        const twd = "`approve`, `softban`, `unban`, `request`, `templates`"
        const marocanii = "`soluția/solutia`, `relu`, `vârstă/varsta`, `unde`, `fall`, `camere`, `bizon`, `pistol`, `senpai`, `mut`, `deafen`, `earrape`, `sprint`, `doamnă/doamna/duamna`, `pupici/pulici`, `ceye`, `ceye2`, `flash`, `edi`, `edi2`"
        if(message.guild.id === "786897678159052802"){//marocanii
            const marocanii1 = new Discord.MessageEmbed().setColor("RANDOM")
            .setDescription("**All Bot Commands**")
            .addField("Commands", command)
            .addField("Server-Only Commands", marocanii)
            message.channel.send(marocanii1)
        } else if (message.guild.id === "745623527759282176"){//twdsv
            const twdsv = new Discord.MessageEmbed().setColor("RANDOM")
            .setDescription("**All Bot Commands**")
            .addField("Commands", command)
            .addField("Server-Only Commands", twd)
            message.channel.send(twdsv)
        } else {
            const non = new Discord.MessageEmbed().setColor("RANDOM")
            .setDescription("**All Bot Commands**")
            .addField("Commands", command)
            .addField("Server-Only Commands", "You don't have any Server-Only commands. If you want to add Server-Only commands to your server contact @luke.#3908")
            message.channel.send(non)
      
        }
    }
}