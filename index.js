const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db');

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('TWDBot is online!');
    client.user.setActivity("The Walking Dead", {type: "PLAYING"});
    client.user.setStatus("idle");
    client.user.setUsername("TheWalkingDeadBot")
    client.user.setActivity('The Walking Dead', {type: 'WATCHING'}).catch(console.error);
});

client.on('message', message =>{
    

    const prefix = db.get(`guild_${message.guild.id}_prefix`) || '-';
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    let args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if (!message.guild) return;
    if(command === 'prefix'){
        
        if(args[0] === 'set'){
            if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`You don't have permission to do this!`);
            if(args[1] === prefix) return message.channel.send('This is already your prefix.');
            if(args[0] === '-') db.delete(`guild_${message.guild.id}_prefix`);
            db.set(`guild_${message.guild.id}_prefix`, args[0]);
            const prefixset = new Discord.MessageEmbed().setColor('RANDOM').setTitle('**Prefix set!**').setDescription(`Your new prefix is ${args[0]}`).setTimestamp().setFooter("> luke.#8235");
            return message.channel.send(prefixset)
        }else if(!args[0]){
            const noargs = new Discord.MessageEmbed().setColor('RANDOM').setTitle('**Prefix**').setDescription(`Your prefix is ${prefix}`).setTimestamp().setFooter("> luke.#8235");
            return message.channel.send(noargs);
        }
        }else{
            const prefix1 = new Discord.MessageEmbed().setColor("RANDOM").addField("**Usage:** `-prefix [set] [NewPrefix]`", "Sets a new prefix.").setFooter("> luke.#8235 • ()-required arguments, []-optional arguments");
            message.channel.send(prefix1);
    } 
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } 
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } 
    if(command === 'f'){
        client.commands.get('f').execute(message, args);
    }
    if(command === 'kiss'){
        client.commands.get('kiss').execute(message, args);
    }
    if(command === 'hug'){
        client.commands.get('hug').execute(message, args);
    }
    if(command === 'cry'){
        client.commands.get('cry').execute(message, args);
    }
    if(command === 'help'){
        client.commands.get("help").execute(message, args);
    }
    if(command === 'laugh' || command === 'haha'){
        client.commands.get("laugh").execute(message, args);
    }
    if(command === 'walker' || command === 'geek' || command === 'biter'){
        client.commands.get("walker").execute(message, args);
    }
    if(command === 'bite'){
        client.commands.get("bite").execute(message, args);
    }
    if(command === 'avatar'){
        client.commands.get("avatar").execute(message, args);
    }
    if(command === 'insult' ){
        client.commands.get("insult").execute(message, args);
    }
    if(command === 'coinflip'){
        client.commands.get("coinflip").execute(message, args);
    }
    if(command === 'kick'){
        client.commands.get("kick").execute(message, args);
    }
    if(command === 'ban'){
        client.commands.get("ban").execute(message, args);
    }
    if(command === 'say'){
        client.commands.get("say").execute(message, args);
    }
    if(command === 'shrug'){
        client.commands.get("shrug").execute(message, args);
    }
    if(command === 'purge'){
        client.commands.get("purge").execute(message, args);
    }
    if(command === 'fistbump'){
        client.commands.get("fistbump").execute(message, args);
    }
    if(command === 'userinfo'){
        client.commands.get("userinfo").execute(message, args);
    }
    if(command === 'random'){
        client.commands.get("random").execute(message, args);
    }   
    
    
});

client.login(process.env.token);


