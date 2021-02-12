const Discord = require("discord.js");
const simp = require("./simp");

module.exports = {
    name: 'help',
    description: "Help command",
    execute(message, args){
        if(args[0] === "f"){
            const f = new Discord.MessageEmbed().setColor("RANDOM").addField("**Usage:** `-f [text]`", "Pay your respects.").setFooter(`${process.env.DEVELOPER} • ()-required arguments, []-optional arguments`); 
            message.channel.send(f);
        }
        if(args[0] === "remember"){
            const f = new Discord.MessageEmbed().setColor("RANDOM").addField("**Usage:** `-remember [text]`", "Luke will remember that.").setFooter(`${process.env.DEVELOPER} • ()-required arguments, []-optional arguments`); 
            message.channel.send(f);
        }
        if(args[0] === "coinflip"){
            const coinflip = new Discord.MessageEmbed().setColor("RANDOM").addField("**Usage:** `-coinflip`", "Heads or tails.").setFooter(`${process.env.DEVELOPER} •`);
            message.channel.send(coinflip);
        }
        if(args[0] === "say"){
            const say = new Discord.MessageEmbed().setColor("RANDOM").addField("**Usage:** `-say (text)`", "Make me say something.").setFooter(`${process.env.DEVELOPER} • ()-required arguments, []-optional arguments`);
            message.channel.send(say);
        }
        if(args[0] === "simp"){
            const simp = new Discord.MessageEmbed().setColor("RANDOM").addField("**Usage:** `-simp (member)`", "🇸 🇮 🇲 🇵").setFooter(`${process.env.DEVELOPER} • ()-required arguments, []-optional arguments`);
            message.channel.send(simp);
        }
        if(args[0] === "shrug"){
            const shrug = new Discord.MessageEmbed().setColor("RANDOM").addField("**Usage:** `-shrug`", "¯\\_(ツ)_/¯").setFooter(`${process.env.DEVELOPER} •`);
            message.channel.send(shrug);
        }
        if(args[0] === "ping"){
            const ping = new Discord.MessageEmbed().setColor("RANDOM").addField("**Usage:** `-ping`", "Shows your ping.").setFooter(`${process.env.DEVELOPER} •`);
            message.channel.send(ping);
        }
        if(args[0] === "kick"){
            const kick = new Discord.MessageEmbed().setColor("RANDOM").addField("**Usage:** `-kick (member) (reason)`", "Kicks someone.").setFooter(`${process.env.DEVELOPER} • ()-required arguments, []-optional arguments`);
            message.channel.send(kick);
        }
        if(args[0] === "ban"){
            const ban = new Discord.MessageEmbed().setColor("RANDOM").addField("**Usage:** `-ban (member) (reason)`", "Bans someone.").setFooter(`${process.env.DEVELOPER} • ()-required arguments, []-optional arguments`);
            message.channel.send(ban);
        }
        if(args[0] === "kiss"){
            const kiss = new Discord.MessageEmbed().setColor("RANDOM").addField("**Usage:** `-kiss [member]`", "Kisses someone.").setFooter(`${process.env.DEVELOPER} • ()-required arguments, []-optional arguments`);
            message.channel.send(kiss);
        }
        if(args[0] === "hug"){
            const hug = new Discord.MessageEmbed().setColor("RANDOM").addField("**Usage:** `-hug [member]`", "Hugs someone.").setFooter(`${process.env.DEVELOPER} • ()-required arguments, []-optional arguments`);
            message.channel.send(hug);
        }
        if(args[0] === "cry"){
            const cry = new Discord.MessageEmbed().setColor("RANDOM").addField("**Usage:** `-cry [member]`", "Cries.").setFooter(`${process.env.DEVELOPER} • ()-required arguments, []-optional arguments`);
            message.channel.send(cry);
        }
        if(args[0] === "laugh"){
            const laugh = new Discord.MessageEmbed().setColor("RANDOM").addField("**Usage:** `-laugh [member]`", "Laughs.").setFooter(`${process.env.DEVELOPER} • ()-required arguments, []-optional arguments`);
            message.channel.send(laugh);
        }
        if(args[0] === "walker"){
            const walker = new Discord.MessageEmbed().setColor("RANDOM").addField("**Usage:** `-walker`", "Shows an image/gif of a walker.").setFooter(`${process.env.DEVELOPER} •`);
            message.channel.send(walker);
        }
        if(args[0] === "bite"){
            const bite = new Discord.MessageEmbed().setColor("RANDOM").addField("**Usage:** `-bite [member]`", "Bites someone.").setFooter(`${process.env.DEVELOPER} • ()-required arguments, []-optional arguments`);
            message.channel.send(bite);
        }
        if(args[0] === "insult"){
            const insult = new Discord.MessageEmbed().setColor("RANDOM").addField("**Usage:** `-insult [member]`", "Insults someone.").setFooter(`${process.env.DEVELOPER} • ()-required arguments, []-optional arguments`);
            message.channel.send(insult);
        }
        if(args[0] === "fistbump"){
            const fistbump = new Discord.MessageEmbed().setColor("RANDOM").addField("**Usage:** `-fistbump [member]`", "Fistbump.").setFooter(`${process.env.DEVELOPER} • ()-required arguments, []-optional arguments`);
            message.channel.send(fistbump);
        }
        if(args[0] === "avatar"){
            const avatar = new Discord.MessageEmbed().setColor("RANDOM").addField("**Usage:** `-avatar [member]`", "Shows your avatar.").setFooter(`${process.env.DEVELOPER} • ()-required arguments, []-optional arguments`);
            message.channel.send(avatar);
        }
        if(args[0] === "userinfo"){
            const userinfo = new Discord.MessageEmbed().setColor("RANDOM").addField("**Usage:** `-userinfo [member]`", "User information.").setFooter(`${process.env.DEVELOPER} • ()-required arguments, []-optional arguments`);
            message.channel.send(userinfo);
        }
        if(args[0] === "random"){
            const random = new Discord.MessageEmbed().setColor("RANDOM").addField("**Usage:** `-random [number]`", "A random number.").setFooter(`${process.env.DEVELOPER} • ()-required arguments, []-optional arguments`);
            message.channel.send(random);
        }
        if(args[0] === "prefix"){
            const prefix = new Discord.MessageEmbed().setColor("RANDOM").addField("**Usage:** `-prefix [set] [NewPrefix]`", "Sets a new prefix.").setFooter(`${process.env.DEVELOPER} • ()-required arguments, []-optional arguments`);
            message.channel.send(prefix);
        }
            if(args[0] === "serverinfo"){
                const serverinfo = new Discord.MessageEmbed().setColor("RANDOM").addField("**Usage:** `-serverinfo`", "Server information.").setFooter(`${process.env.DEVELOPER} •`);
                message.channel.send(serverinfo);
            } 
            if(args[0] === "botinfo"){
                const serverinfo = new Discord.MessageEmbed().setColor("RANDOM").addField("**Usage:** `-botinfo`", "Bot information.").setFooter(`${process.env.DEVELOPER} •`);
                message.channel.send(serverinfo);
            }
            if(args[0] === "commands"){
                const serverinfo = new Discord.MessageEmbed().setColor("RANDOM").addField("**Usage:** `-commands`", "Shows all available commands.").setFooter(`${process.env.DEVELOPER} •`);
                message.channel.send(serverinfo);
            }
             if(args[0] === "createpoll"){
                const random = new Discord.MessageEmbed().setColor("RANDOM").addField("**Usage:** `-poll (Question)`", "Creates a poll in the channel you typed this command.").setFooter(`${process.env.DEVELOPER} • ()-required arguments, []-optional arguments`);
                message.channel.send(random);
        }else if(!args[0]){
            const helpEmbed = new Discord.MessageEmbed()
            .setTitle("Hello!")
            .setColor("RANDOM")
            .setDescription("Below you can see all the things I'm programmed to do.\n If you need any more help send a message to @luke.#8235.")
            .addField("__**COMMANDS**__", "\u200b")
            .addField("**FUN**", "`f`, `coinflip`, `say`, `shrug`, `ping`, `simp`, `remember`")
            .addField("**MODERATION**", "`ban`, `kick`")
            .addField("**GIFS**", "`kiss`, `hug`, `cry`, `laugh`, `walker`, `bite`, `insult`, `fistbump`")
            .addField("**UTIL**", "`avatar`, `userinfo`, `prefix`, `serverinfo`, `poll`, `botinfo`, `commands`")
            .addField("**Use `-help <Commmand>` for more information about a command.**", "**Example:** \n`-help avatar` for more info about the avatar command.")
            .addField("Useful links:", "[Invite Me](https://discord.com/api/oauth2/authorize?client_id=748105665301708883&permissions=8&scope=bot), [The Walking Dead Server](https://discord.gg/pqckK8q)")
            .setTimestamp()
            .setFooter(process.env.DEVELOPER);
        message.channel.send(helpEmbed);
        }
    }
}