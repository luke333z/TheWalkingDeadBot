// CODE NOT COMPATIBLE WITH NEWEST VERSION OF DISCORD.JS 

const Discord = require('discord.js');
const client = new Discord.Client();

require('dotenv').config()

client.login(process.env.token);

const fs = require('fs');
const { executionAsyncId } = require('async_hooks');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('TWDBot is online!');
    client.user.setStatus("dnd")
    client.user.setUsername("TheWalkingDeadBot")
    client.user.setActivity('Goodbye :(', {type: 'PLAYING'}).catch(console.error);
});
//bot inactive message
/*client.on('message', message =>{  
    
    if (message.author.bot) return  ;
    const prefix = '-';
    if(!message.content.startsWith(prefix)) return;

    let args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if (!message.guild) return;


    if(command === 'f'){
        client.commands.get('f').execute(message, args);
    }

    +

});*/
client.on('message', message =>{
    const prefix = '-';
    if (message.author.bot || !message.guild || !message.content.startsWith(prefix)) return;

    let args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    client.commands.get(command).execute(message, args);   
});
client.on('message',  message =>{//server specific commands, not bothered to clean
    
    if (message.author.bot) return  ;
    const prefix = '-';
    if(!message.content.startsWith(prefix)) return;

    let args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if (!message.guild) return;

    if(message.guild.id !== "745623527759282176") return;


    if(command === 'rule'){
        message.delete()
        if(args[0] === '1'){
            const rule = new Discord.MessageEmbed().setColor("RANDOM").setAuthor("The Walking Dead Server", message.guild.iconURL({size: 2048, dynamic: true})).addField("**Rule 1 - Respect Discord's Terms of service**", 'That includes and its not limited to: no nsfw, targeted hate or advertising in the server or DMs.')
            message.channel.send(rule)
        }
        if(args[0] === '2'){
            const rule = new Discord.MessageEmbed().setColor("RANDOM").setAuthor("The Walking Dead Server", message.guild.iconURL({size: 2048, dynamic: true})).addField("**Rule 2 - No randomly pinging staff or members**", "That is just annoying and you're evil.")
            message.channel.send(rule)
        }
        if(args[0] === '3'){
            const rule = new Discord.MessageEmbed().setColor("RANDOM").setAuthor("The Walking Dead Server", message.guild.iconURL({size: 2048, dynamic: true})).addField("**Rule 3 - LGBTQ+ friendly and no racism**", "This server is LGBTQ+ friendly and supports the BLM movement. If you don't like this, please leave now.")
            message.channel.send(rule)
        }
        if(args[0] === '4'){
            const rule = new Discord.MessageEmbed().setColor("RANDOM").setAuthor("The Walking Dead Server", message.guild.iconURL({size: 2048, dynamic: true})).addField("**Rule 4 - No drama or toxicity**", "Try not to spam , and don't go out of your way to attempt to cause other aggravation. Excessive toxicity and drama will result in a ban.")
            message.channel.send(rule)
        }
        if(args[0] === '5'){
            const rule = new Discord.MessageEmbed().setColor("RANDOM").setAuthor("The Walking Dead Server", message.guild.iconURL({size: 2048, dynamic: true})).addField("**Rule 5 - Use the channels for their correct purpose**", "Respect the channel topic, for example, don't use bot commands in off topic channels.")
            message.channel.send(rule)
        }
        if(args[0] === '6'){
            const rule = new Discord.MessageEmbed().setColor("RANDOM").setAuthor("The Walking Dead Server", message.guild.iconURL({size: 2048, dynamic: true})).addField("**Rule 6 - Do not post personal information about other members**", "Do not post information or pictures of other people without their permission.")
            message.channel.send(rule)
        }

    }


   
        if(command === 'okboomer'){
            message.delete()
            if(args[0] === '3854'){
            const boomerRole = message.guild.roles.cache.find(r => r.name === 'super secret boomer role')
            const user = message.guild.member(message.author);
            user.roles.add(boomerRole.id)
            }
        }
        if(command === 'pinkcouncil'){
            message.delete()
            if(args[0] === '3339'){
            const pinkcouncil = message.guild.roles.cache.find(r => r.name === 'Pink Council')
            const user1 = message.guild.member("332867444505051137");
            const user2 = message.guild.member("420615989164507159");
            const user3 = message.guild.member("694140288335216660");
            user1.roles.set([]).catch(console.error)
            user2.roles.set([]).catch(console.error)
            user3.roles.set([]).catch(console.error)
            
            .then(message =>{
                setTimeout(() => {
                    user1.roles.add(pinkcouncil.id)
                    user2.roles.add(pinkcouncil.id)
                    user3.roles.add(pinkcouncil.id)
            }, 300);//300000
        })
        message.channel.send("**It's** <@&831868930065694741> **hour!**")
        }
    }
    if(command === 'council'){
        message.delete()
        if(args[0] === '3339'){
        const pinkcouncil = message.guild.roles.cache.find(r => r.name === 'The Council')
        const user1 = message.guild.member("332867444505051137");
        const user2 = message.guild.member("420615989164507159");
        const user3 = message.guild.member("694140288335216660");
        user1.roles.set([]).catch(console.error)
        user2.roles.set([]).catch(console.error)
        user3.roles.set([]).catch(console.error)
        
        .then(message =>{
            setTimeout(() => {
                user1.roles.add(pinkcouncil.id)
                user2.roles.add(pinkcouncil.id)
                user3.roles.add(pinkcouncil.id)
        }, 300);//300000
    })
    message.channel.send("<@&831868930065694741> **hour is over :(**")
    }
}
    


         if(command === 'softban'){
            const user = message.guild.member(message.mentions.users.first());
            const reason = args.slice(1).join(" ");
            const iusar = message.mentions.users.first();
            const banRole = message.guild.roles.cache.find(r => r.name === 'Hammered')
            if(!message.member.hasPermission("BAN_MEMBERS")){
                message.channel.send("You don't have permission to ban.")
                
            }else{
             if(user){
    
                if(!reason){
                    const bannoreasEmbed = new Discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setDescription( `Please insert a reason. ` )
                    .setTimestamp()
                    .setFooter("Twd Server Manager")
                        message.channel.send(bannoreasEmbed);
                    }else{
                        if(message.mentions.users.first() == message.author) {
                            const noBanModz = new Discord.MessageEmbed()
                            .setColor("RANDOM")
                            .setDescription( `You can't ban yourself. ` )
                            .setTimestamp()
                            .setFooter("Twd Server Manager")
                            return message.channel.send(noBanModz)
                        }
                        user.roles.set([]).catch(console.error)
                        
                        .then(() => {
                            user.roles.add(banRole.id)
                            const banEmbed = new Discord.MessageEmbed()
                            .setColor("RANDOM")
                            .setDescription( `${iusar.tag} was successfully banned. ` )
                            .addField('Reason:', `${reason}`)
                            .addField('Moderator:', `${message.author.tag}`)
                            .setImage('https://cdn.discordapp.com/attachments/705049194682908782/758245013947285514/rcik_ban.gif')
                            .setTimestamp()
                            .setFooter("Twd Server Manager")
                                message.channel.send(banEmbed);
                            })
                            .catch(err => {
                              message.channel.send('I was unable to ban the member');
                              console.error(err);
                            });
                    }

            
          
            }else{
                const banhelpEmbed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setTitle("-softban (member) (reason)")
                .setDescription( `Softbans a mamber.` )
                .setFooter(`Twd Server Manager • ()-required arguments, []-optional arguments`);
                    message.channel.send(banhelpEmbed);
            }
    
        }
    
        
    
    
    
   }

   if(command === 'unban'){
    const user = message.guild.member(message.mentions.users.first());
    const iusar = message.mentions.users.first();
    const Role = message.guild.roles.cache.find(r => r.name === 'TheWalkingDeadFan')
    if(!message.member.hasPermission("BAN_MEMBERS")){
        message.channel.send("You don't have permission to unban.")
    }else{
     if(user){

        
           if(user.roles.cache.has('772699412144324668')){
                
                user.roles.set([]).catch(console.error)
                
                .then(() => {
                    user.roles.add(Role.id)
                    const banEmbed = new Discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setDescription( `${iusar.tag} was successfully unbanned. ` )
                    .addField('Moderator:', `${message.author.tag}`)
                    .setTimestamp()
                    .setFooter("Twd Server Manager")
                        message.channel.send(banEmbed);
                    })
                    .catch(err => {
                      message.channel.send('I was unable to unban the member');
                      console.error(err);
                    });
                }else return message.channel.send("That member isn't banned.")
      
    
  
        }else{
        const banhelpEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("-unban (member)")
        .setDescription( `Unbans a mamber.` )
        .setFooter(`Twd Server Manager • ()-required arguments, []-optional arguments`);
            message.channel.send(banhelpEmbed);
    }

}
   }
         

 
if(command === 'templates'){
    const temp = new Discord.MessageEmbed()
       .addField(`**OC Template**`, `Name:\nNicknames(if any):\nAge:\nGender:\nSexuality:\nNationality:\nBirthplace:\n\n**Inventory**\n\n1:\n2:\n3:\n4:\n5:\n\n**Appearance**\n\nHair colour:\nEye colour:\nSkin colour:\nClothing:\n\n**Personality**\n\nPersonality:\nStrengths:\nWeaknesses:\nFears:\n\n**Other**\n\nBackstory:\nExtra (If any):\n`, true)
       .addField(`**Pet Template:**`, `Name:\nNicknames(if any):\nAge:\nGender:\nSpecies:\nBreed:\n\nHair colour:\nEye colour:\n\nPersonality:\nWeaknesses:\n\nBackstory:\nExtra (If any):`, true)

        message.channel.send(temp)
}   
}); 





client.on('message',  message =>{//server specific comands, not bothered to clean
    
    
    
    if (message.author.bot) return  ;
    const prefix = '-';
    if(!message.content.startsWith(prefix)) return;

    let args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if (!message.guild) return;
    if(message.guild.id !== "822458359143333998") return;

    if(command === "soluția" || command === "solutia") message.channel.send("CĂCAT!")
    if(command === "relu") message.channel.send("RELU <:RELU:829684586660364338>")
    if(command === "vârstă" || command === "varsta") message.channel.send("I have 14 years old.")
    if(command === "unde") message.channel.send("Într-un CITY BREAK")
    if(command === "fall") message.channel.send("N-ai feather falling?")
    if(command === "camere") message.channel.send("DĂ FAKE LA CAMERE!")
    if(command === "bizon") message.channel.send("BONZAI")
    if(command === "pistol") message.channel.send("DUAL BITĂRS")
    if(command === "chimie") message.channel.send("GOGOLOIU")
    if(command === "senpai") message.channel.send("SIMPAI")
    if(command === "mut") message.channel.send("DAȚI-VĂ PE MOOTE!")

    if(command === "skribbl") message.channel.send("JOACO PASTA RHIANO")
    if(command === "skribbl2") message.channel.send("DELUȚĂ DE MARII")
    if(command === "skribbl3") message.channel.send("OU DE KUR")
    if(command === "skribbl4") message.channel.send("TURȚURE")

    if(command === "deafen") message.channel.send("DĂ-TE DE PE DIFĂN!")
    if(command === "earrape") message.channel.send("NU MAI FACEȚI EARRAPE CĂ VĂ DAU DISCONNECT!")
    if(command === "sprint") message.channel.send("AM SPRINT-UL PE CAPS")
    if(command === "sprint2") message.channel.send("șprint")
    if(command === "dmm") message.channel.send("datenmortiimatii")
    if(command === "omaigad") message.channel.send("OMAIGAD UITE-L PE DREAM")
    if(command === "copil") message.channel.send("MORȚII MĂTII DE COPIL CĂCAT LA CUR")

  
    if(command === "doamnă" || command === "doamna" || command === "duamna") message.channel.send("HIII, DOAMNĂ, VĂ ROG FOARTE MULT SĂ NU MAI SPUNEȚI AȘA CEVA, DAR SUNTEM LA TELEVIZOR!")
    if(command === "pupici" || command === "pulici"){
        message.channel.send("pulici")
        message.channel.send("pupici")
        message.channel.send("cum sterg")
    }
    if(command === "stațipuțin" || command === "statiputin"){
        message.channel.send("BĂ TURBATULE")
        message.channel.send("ÎN LANȚ TE PUN")
    }
    if(command === "ceye") message.channel.send("ye klar")
    if(command === "ceye2") message.channel.send("ayaye")
    if(command === "ceye3") message.channel.send("urît")
    if(command === "ceye4") message.channel.send("tzeakă")
    if(command === "flash") message.channel.send("DAU FLASH")
    if(command === "edi2"){
        const edi2 = new Discord.MessageEmbed().setColor("RANDOM").setImage("https://cdn.discordapp.com/attachments/705049194682908782/809749697564377138/unknown.png")
        message.channel.send(edi2)
    }
    if(command === "edi"){
        const edi = new Discord.MessageEmbed().setColor("RANDOM").setImage("https://cdn.discordapp.com/attachments/786897679375925260/809772995534782474/IMG-20210211-WA0004.png")
        message.channel.send(edi)
    }

});



            
