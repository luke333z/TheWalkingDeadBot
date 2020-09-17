const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = '-'
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
    

    if(!message.content.startsWith(prefix) || message.author.bot) return;

    let args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

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
    if(command === 'moderator'){
        client.commands.get("moderator").execute(message, args);
    }
    
    
});

client.login(process.env.token);
