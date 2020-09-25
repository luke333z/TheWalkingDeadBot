const Discord = require('discord.js');
const Keyv = require('keyv');

const keyv = new Keyv('sqlite://path/to/database.sqlite');

const client = new Discord.Client();

const prefixes = new Keyv('sqlite://path/to.sqlite');
const globalPrefix = '-';
const fs = require('fs');
keyv.on('error', err => console.error('Keyv connection error:', err));
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('TWDBot is online!');
    client.user.setUsername("TheWalkingDeadBot")
    client.user.setActivity('The Walking Dead', {type: 'WATCHING'}).catch(console.error);
});

client.on('message', async message =>{
    if(message.author.bot) return;
    let args;
    if(message.guild){
        let prefix;

        if(message.content.startsWith(globalPrefix)){
            prefix= globalPrefix;
        }else{
            const guildPrefix = await prefixes.get(message.guild.id);
            if(message.content.startsWith(guildPrefix)) prefix = guildPrefix;
        }
    
    //de aici
    if(!prefix) return;
    args = message.content.slice(prefix.length).trim().split(/\s+/);

    }else return;

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
    if(command === 'avatar'){
        client.commands.get("avatar").execute(message, args);
    }
    if(command === 'fyou' || command === 'insult' ){
        client.commands.get("fyou").execute(message, args);
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
   
    
    
});

client.login(process.env.token);


//"NzQ4MTA1NjY1MzAxNzA4ODgz.X0YlsQ.NAMour6hWLcjz5JVWbyjgWm-dl0"
//process.env.token