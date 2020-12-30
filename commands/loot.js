const Discord = require("discord.js");
const fs =require('fs');
const { parse } = require("path");
module.exports = {
    name: 'loot',
    description: "Random loot",
    execute(message, args){
        fs.readFile('./random_stuff.txt', 'utf8', (err, data) => {
            if(err) return console.log(err)
            function cLog(msg) {
                return console.log(msg);
            };
            function getRandomInt(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max+1);
                return Math.floor(Math.random() * (max - min)) + min;
            };
         
          
            
            data = data.split('\r\n')
            var random = getRandomInt(0,data.length-1)
            
            
            var deita = data[random]
            
            var things=deita.split('_')
            
            /*
                things[0]=name
                things[1], things[2]=min and max number
                things[3], things[4]=durability/quality max and min
                things[5]= Durability/Quality

            */
           let num1 = parseInt(things[1], 10); 
           let num2 = parseInt(things[2], 10);
           let dur1 = parseInt(things[3], 10); 
           let dur2 = parseInt(things[4], 10)
            if(things[1]==things[2]){
                //only one object
                if(!things[5]){
                    cLog("Path 1a")
                    const path1a = new Discord.MessageEmbed().setColor("RANDOM").setDescription(`**${message.author.username} just found:**\n`).addField("`" + things[0] + "`", `Count: 1` ).setTimestamp().setFooter("Loot Testing. @luke.#0003")
                    message.channel.send(path1a)
                } else {
                         let dur =getRandomInt(dur1,dur2);
                       cLog("Path 1b");
                       const path2a = new Discord.MessageEmbed().setColor("RANDOM").setDescription(`**${message.author.username} just found:**\n`).addField("`" + things[0] + "`", `Count: 1\n${things[5]}: ${dur}%` ).setTimestamp().setFooter("Loot Testing. @luke.#0003")
                      message.channel.send(path2a);
                }
            }else{
               
                let n =getRandomInt(num1,num2)
               
                if(!things[5]){
                    //no durability
                    if(n==1){
                        //one object
                        cLog("Path 2a")
                        const path2a = new Discord.MessageEmbed().setColor("RANDOM").setDescription(`**${message.author.username} just found:**\n`).addField("`" + things[0] + "`", `Count: ${n}` ).setTimestamp().setFooter("Loot Testing. @luke.#0003")
                    message.channel.send(path2a)
                    }else{
                        //more objects
                        const path2b = new Discord.MessageEmbed().setColor("RANDOM").setDescription(`**${message.author.username} just found:**\n`).addField("`" + things[0] + "`", `Count: ${n}` ).setTimestamp().setFooter("Loot Testing. @luke.#0003")
                        cLog("Path 2b")
                        message.channel.send(path2b)
                    }
                }else if(things[5]){
                     //durability

                     let dur =getRandomInt(dur1,dur2)
                    
                     if(n==1){
                        //one object
                        const path3a = new Discord.MessageEmbed().setColor("RANDOM").setDescription(`**${message.author.username} just found:**\n`).addField("`" + things[0] + "`", `Count: ${n}\n${things[5]}: ${dur}%` ).setTimestamp().setFooter("Loot Testing. @luke.#0003")
                        cLog("Path 3a")
                        message.channel.send(path3a)
                    }else{
                        //more objects
                        const path3b = new Discord.MessageEmbed().setColor("RANDOM").setDescription(`**${message.author.username} just found:**\n`).addField("`" + things[0] + "`", `Count: ${n}\n${things[5]}: ${dur}%` ).setTimestamp().setFooter("Loot Testing. @luke.#0003")
                        cLog("Path 3b")
                        message.channel.send(path3b)
                    }
                   
                   
              }
            }
            
            
     
        })
    }
}