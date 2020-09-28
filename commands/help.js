const Discord = require("discord.js");

module.exports = {
    name: 'help',
    description: "Help command",
    execute(message, args){
            const helpEmbed = new Discord.MessageEmbed()
            .setTitle("Hello!")
            .setColor("RANDOM")
            .setDescription("Below you can see all the things I'm programmed to do.\n If you need any more help send a message to @luke.#8235.")
            .addField("__**COMMANDS**__", "\u200b")
            .addField("**FUN**", "`f`, `coinflip`, `say`, `shrug`, `ping`")
            .addField("**MODERATION**", "`ban`, `kick`, `purge`")
            .addField("**GIFS**", "`kiss`, `hug`, `cry`, `laugh`, `walker`, `bite`, `insult`, `fistbump`")
            .addField("**UTIL**", "`avatar`, `userinfo`")
            .addField("**Use `-help <Commmand>` for more information about a command.**", "**Example:** \n`-help avatar` for more info about the avatar command.")
            .addField("Useful links:", "[Invite Me](https://discord.com/api/oauth2/authorize?client_id=748105665301708883&permissions=8&scope=bot), [The Walking Dead Server](https://discord.gg/ndvbjpZ)")
            .setTimestamp()
            .setFooter("> luke.#8235");
        message.channel.send(helpEmbed);



        if(args[0] === "f"){
            const f = new Discord.MessageEmbed().setColor("RANDOM").addField("**Usage:** `-f`", "Pay your respects.").setFooter("> luke.#8235 •"); 
            message.channel.send(f);
        }
        if(args[0] === "coinflip"){
            const coinflip = new Discord.MessageEmbed().setColor("RANDOM").addField("**Usage:** `-coinflip`", "Heads or tails.").setFooter("> luke.#8235 •");
            message.channel.send(coinflip);
        }
        if(args[0] === "say"){
            const say = new Discord.MessageEmbed().setColor("RANDOM").addField("**Usage:** `-say (text)`", "Make me say something.").setFooter("> luke.#8235 • ()-required arguments, []-optional arguments");
            message.channel.send(say);
        }
        if(args[0] === "shrug"){
            const shrug = new Discord.MessageEmbed().setColor("RANDOM").addField("**Usage:** `-shrug`", "¯\\_(ツ)_/¯").setFooter("> luke.#8235 •");
            message.channel.send(shrug);
        }
        if(args[0] === "ping"){
            const ping = new Discord.MessageEmbed().setColor("RANDOM").addField("**Usage:** `-ping`", "Shows your ping.").setFooter("> luke.#8235 •");
            message.channel.send(ping);
        }
        if(args[0] === "kick"){
            const kick = new Discord.MessageEmbed().setColor("RANDOM").addField("**Usage:** `-kick (member) (reason)`", "Kicks someone.").setFooter("> luke.#8235 • ()-required arguments, []-optional arguments");
            message.channel.send(kick);
        }
        if(args[0] === "ban"){
            const ban = new Discord.MessageEmbed().setColor("RANDOM").addField("**Usage:** `-ban (member) (reason)`", "Bans someone.").setFooter("> luke.#8235 • ()-required arguments, []-optional arguments");
            message.channel.send(ban);
        }
        if(args[0] === "purge"){
            const purge = new Discord.MessageEmbed().setColor("RANDOM").addField("**Usage:** `-purge (number)`", "Deletes messages.").setFooter("> luke.#8235 • ()-required arguments, []-optional arguments");
            message.channel.send(purge);
        }
        if(args[0] === "kiss"){
            const kiss = new Discord.MessageEmbed().setColor("RANDOM").addField("**Usage:** `-kiss [member]`", "Kisses someone.").setFooter("> luke.#8235 • ()-required arguments, []-optional arguments");
            message.channel.send(kiss);
        }
        if(args[0] === "hug"){
            const hug = new Discord.MessageEmbed().setColor("RANDOM").addField("**Usage:** `-hug [member]`", "Hugs someone.").setFooter("> luke.#8235 • ()-required arguments, []-optional arguments");
            message.channel.send(hug);
        }
        if(args[0] === "cry"){
            const cry = new Discord.MessageEmbed().setColor("RANDOM").addField("**Usage:** `-cry [member]`", "Cries.").setFooter("> luke.#8235 • ()-required arguments, []-optional arguments");
            message.channel.send(cry);
        }
        if(args[0] === "laugh"){
            const laugh = new Discord.MessageEmbed().setColor("RANDOM").addField("**Usage:** `-laugh [member]`", "Laughs.").setFooter("> luke.#8235 • ()-required arguments, []-optional arguments");
            message.channel.send(laugh);
        }
        if(args[0] === "walker"){
            const walker = new Discord.MessageEmbed().setColor("RANDOM").addField("**Usage:** `-walker`", "Shows a image/gif of a walker.").setFooter("> luke.#8235 •");
            message.channel.send(walker);
        }
        if(args[0] === "bite"){
            const bite = new Discord.MessageEmbed().setColor("RANDOM").addField("**Usage:** `-bite [member]`", "Bites someone.").setFooter("> luke.#8235 • ()-required arguments, []-optional arguments");
            message.channel.send(bite);
        }
        if(args[0] === "insult"){
            const insult = new Discord.MessageEmbed().setColor("RANDOM").addField("**Usage:** `-insult [member]`", "Insults someone.").setFooter("> luke.#8235 • ()-required arguments, []-optional arguments");
            message.channel.send(insult);
        }
        if(args[0] === "fistbump"){
            const fistbump = new Discord.MessageEmbed().setColor("RANDOM").addField("**Usage:** `-fistbump [member]`", "Fistbump.").setFooter("> luke.#8235 • ()-required arguments, []-optional arguments");
            message.channel.send(fistbump);
        }
        if(args[0] === "avatar"){
            const avatar = new Discord.MessageEmbed().setColor("RANDOM").addField("**Usage:** `-avatar [member]`", "Shows your avatar.").setFooter("> luke.#8235 • ()-required arguments, []-optional arguments");
            message.channel.send(avatar);
        }
        if(args[0] === "userinfo"){
            const userinfo = new Discord.MessageEmbed().setColor("RANDOM").addField("**Usage:** `-userinfo [member]`", "User information.").setFooter("> luke.#8235 • ()-required arguments, []-optional arguments");
            message.channel.send(userinfo);
        }
        if(args[0] === "random"){
            const random = new Discord.MessageEmbed().setColor("RANDOM").addField("**Usage:** `-random [number]`", "A random number.").setFooter("> luke.#8235 • ()-required arguments, []-optional arguments");
            message.channel.send(random);
        }
    }
}