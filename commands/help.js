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
            .addField("**MODERATION**", "`ban`, `kick`, `clean`, `purge`")
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
            const shrug = new Discord.MessageEmbed().setColor("RANDOM").addField("**Usage:** `-shrug`", "¯\_(ツ)_/¯").setFooter("> luke.#8235 •");
            message.channel.send(say);
        }
        if(args[0] === "ping"){
            
        }
        if(args[0] === "kick"){
            
        }
        if(args[0] === "ban"){
            
        }
        if(args[0] === "clean"){
            
        }
        if(args[0] === "purge"){
            
        }
        if(args[0] === "kiss"){
            
        }
        if(args[0] === "hug"){
            
        }
        if(args[0] === "cry"){
            
        }
        if(args[0] === "laugh"){
            
        }
        if(args[0] === "walker"){
            
        }
        if(args[0] === "bite"){
            
        }
        if(args[0] === "insult"){
            
        }
        if(args[0] === "fistbump"){
            
        }
        if(args[0] === "avatar"){
            
        }
        if(args[0] === "userinfo"){
            
        }
    }
}