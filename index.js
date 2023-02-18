// CODE NOT COMPATIBLE WITH NEWEST VERSION OF DISCORD.JS 

const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db');
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

client.on('message', message =>{
    
    if (message.author.bot) return  ;
    const prefix = '-';
    if(!message.content.startsWith(prefix)) return;

    let args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if (!message.guild) return;


    if(command === 'f'){
        client.commands.get('f').execute(message, args);
    }


});
client.on('message', message =>{
    
    if (message.author.bot) return  ;
    const prefix = '-';
    if(!message.content.startsWith(prefix)) return;

    let args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if (!message.guild) return;
   if(command === 'remember'){
    const negan = args.slice(0).join(" ");
    message.delete()
        if(!negan){
        message.channel.send(`**${message.author.username}**` + ` will remember that.`)
        } else {
            message.channel.send(`**${negan}** will remember that.`);
        }
    }
   
    if(command === 'loot'){
        client.commands.get('loot').execute(message, args);
    }
    if(command === 'simp'){
        client.commands.get('simp').execute(message, args);
    }
    if(command === 'bonk'){
        client.commands.get('bonk').execute(message, args);
    }
    if(command === 'serverinfo'){
        client.commands.get('serverinfo').execute(message, args);
    }
    


if(command === 'botinfo'){
    client.commands.get('botinfo').execute(message, args, prefix);
}
if(command === 'suggest'){
    client.commands.get('suggest').execute(message, args, prefix);
}
    if(command === 'poll'){
        client.commands.get('poll').execute(message, args);
    }
    if(command === 'bingus'){
        message.channel.send("<:bingus:829475084598509601>")
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
    if(command === 'insult' || command === 'fyou'){
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
    if(command === 'fistbump'){
        client.commands.get("fistbump").execute(message, args);
    }
    if(command === 'userinfo'){
        client.commands.get("userinfo").execute(message, args);
    }
    if(command === 'random'){
        client.commands.get("random").execute(message, args);
    }   
    if(command === 'commands'){
        client.commands.get("commands").execute(message, args);
    } 
    if(command === 'invite'){
        client.commands.get("invite").execute(message, args);
    }
    if(command === 'reply'){
        message.reply("wtf ke nub")
    }   
    if(command === 'rules'){
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
    
    if(command === 'rule1'){
        const ruleembed = new Discord.MessageEmbed()
            .setColor("#0099ff")
            .setTitle("**Server Rules**")
            .setDescription("Nerespectarea regulilor va duce la mute, kick, ban sau derank, precedate de un warn.")
            .setAuthor("Clubul lui Mickey Mouse", message.guild.iconURL({size: 2048, dynamic: true}))
            .addFields(
                { name: "**Regula 1 - Nu dați ping inutil**", value: 'Dacă totuși dați ping unui rol/persoane, nu o faceți de mai multe ori. O dată este suficient.' },
                { name: "**Regula 2 - Nu spamați**", value: "Nimeni nu suportă spam-ul. Dacă nu aveți ce face, există canal special pentru spam." },
                { name: "**Regula 3 - Nu fiți toxici**", value: "Încercați să nu intrați în discuții inutile și să nu insultați celelalte persoane de pe server." },
                { name: "**Regula 4 - Nu se va vorbi despre anumite subiecte**", value: "Dat fiind faptul că nu toți sunt supporteri ai comunității LGBTQIA+, mișcării BLM sau sunt misogini, nu vom vorbi despre aceste teme, fiindcă avem păreri diferite și s-ar putea isca o ceartă. Această regulă include interzicerea folosirii cuvântului 'gay' sau al oricărui slur ca pe o insultă." },
                { name: "**Regula 5 - Nu vă puneți toate rolurile**", value: "Rolurile sunt create cu un anumit scop, iar dacă nu vă încadrați în acea categorie, nu vă puneți rolul respectiv." },
                { name: "**Regula 6 - Nu abuzați de rol**", value: "Este interzis să dați kick/ban unei persoane din server fără niciun motiv." },
                { name: "**Regula 7 - Fără NSFW**", value: "Content-ul NSFW nu este acceptat pe acest server. Dacă ești disperat/ă, poți căuta pe internet (deși nu îți recomand)." },
                { name: "**Regula 8 - Cine este nu activ va primi kick**", value: "Tzeaka cpsz" },
                { name: "**Regula 9 - Folosiți canalele în mod corespunzător **", value: "Nu trimiteți, de exemplu, teme pe canalul de poze." },
            )
            .setFooter("Have Fun!")
               // message.channel.send(ruleembed)
    }  
    if(command=== 'calculate' || command === "cal"){
        client.commands.get("calculate").execute(client, message, args);
    }
    if(command === 'rcreate'){
        if(message.author.id != "332867444505051137") return message.channel.send("Noob")
        else{
            message.guild.roles.create({ data: { name: args[0], color: args[1] } });
            message.channel.send("Role Created")
            }
    }
    if(command === 'radd'){
        if(message.author.id != "332867444505051137") return;
        else{
            const user = message.guild.member(message.mentions.users.first());
            const gibRole = message.guild.roles.cache.find(r => r.name === `${args[0]}`)
            user.roles.add(gibRole)
            message.channel.send("Role Added")
            }
    }
   
if(command === 'stop'){
    if(message.author.id != "332867444505051137") return message.channel.send("Noob")
    else{
    client.stop()
    }
}






    

    
});
client.on('message',  message =>{
    
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





client.on('message',  message =>{
    
    
    
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



            
