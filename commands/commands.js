const Discord = require("discord.js");

module.exports = {
    name: 'commands',
    description: "Commands",
    execute(message, args){
       
        const command = "`f`, `coinflip`, `say`, `shrug`, `ping`, `simp`, `bonk`, `remember`, `ban`, `kick`, `kiss`, `hug`, `cry`, `laugh`, `walker`, `bite`, `insult`, `fistbump`, `avatar`, `userinfo`, `prefix`, `serverinfo`, `poll`, `botinfo`"
        const secret = ""
        const twd = "`approve`, `softban`, `unban`, `request`, `templates`"
        const clubulluimickeymouse = "`soluția/solutia`, `relu`, `vârstă/varsta`, `unde`, `fall`, `camere`, `bizon`, `pistol`, `chimie`, `senpai`, `mut`, `skribbl`, `deafen`, `earrape`, `sprint`, `sprint2`, `dmm`, `omaigad`, `copil`, `doamnă/doamna/duamna`, `pupici/pulici`, `stațipuțin/statiputin`, `ceye`, `ceye2`, `ceye3`, `ceye4`, `flash`, `edi`, `edi2`"
        if(message.guild.id === "822458359143333998"){//marocanii
            const marocanii1 = new Discord.MessageEmbed().setColor("RANDOM")
            .setDescription("**All Bot Commands**")
            .addField("Commands", command)
            .addField("Server-Only Commands", clubulluimickeymouse)
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