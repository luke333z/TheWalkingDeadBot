const Discord = require("discord.js");
const fs =require('fs');
const { parse } = require("path");
module.exports = {
    name: 'loot',
    description: "Random loot command",
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
          
            data = data.split('\n')
            var random = getRandomInt(0,data.length-1)
            
            var loot = data[random]
            

            // Module separation

            var module = loot.split('^')
            
            /*
                module[1]=name
                module[2], module[2]=min and max number
                module[4], module[5]=durability/quality max and min
                module[6]= Durability/Quality

            */
           let num1 = parseInt(module[2], 10); 
           let num2 = parseInt(module[3], 10);
           let dur1 = parseInt(module[4], 10); 
           let dur2 = parseInt(module[5], 10)
            if(module[2]==module[3]){
                //only one object
                if(!module[6]){
                    cLog("Path 1a")
                    const path1a = new Discord.MessageEmbed().setColor("RANDOM").setDescription(`**${message.author.username} just found:**\n`).addField("`" + module[1] + "`", `Category: ${module[0]} \nCount: 1` ).setTimestamp() 
                    message.channel.send(path1a)
                } else {
                         let dur =getRandomInt(dur1,dur2);
                       cLog("Path 1b");
                       const path2a = new Discord.MessageEmbed().setColor("RANDOM").setDescription(`**${message.author.username} just found:**\n`).addField("`" + module[1] + "`", `Category: ${module[0]} \nCount: 1\n${module[6]}: ${dur}%` ).setTimestamp()
                      message.channel.send(path2a);
                }
            }else{
               
                let n =getRandomInt(num1,num2)
               
                if(!module[6]){
                    //no durability
                    if(n==1){
                        //one object
                        cLog("Path 2a")
                        const path2a = new Discord.MessageEmbed().setColor("RANDOM").setDescription(`**${message.author.username} just found:**\n`).addField("`" + module[1] + "`", `Category: ${module[0]} \nCount: ${n}` ).setTimestamp()
                    message.channel.send(path2a)
                    }else{
                        //more objects
                        const path2b = new Discord.MessageEmbed().setColor("RANDOM").setDescription(`**${message.author.username} just found:**\n`).addField("`" + module[1] + "`", `Category: ${module[0]} \nCount: ${n}` ).setTimestamp()
                        cLog("Path 2b")
                        message.channel.send(path2b)
                    }
                }else if(module[6]){
                     //durability

                     let dur =getRandomInt(dur1,dur2)
                    
                     if(n==1){
                        //one object
                        const path3a = new Discord.MessageEmbed().setColor("RANDOM").setDescription(`**${message.author.username} just found:**\n`).addField("`" + module[1] + "`", `Category: ${module[0]} \nCount: ${n}\n${module[6]}: ${dur}%` ).setTimestamp() 
                        cLog("Path 3a")
                        message.channel.send(path3a)
                    }else{
                        //more objects
                        const path3b = new Discord.MessageEmbed().setColor("RANDOM").setDescription(`**${message.author.username} just found:**\n`).addField("`" + module[1] + "`", `Category: ${module[0]} \nCount: ${n}\n${module[6]}: ${dur}%` ).setTimestamp() 
                        cLog("Path 3b")
                        message.channel.send(path3b)
                    }
                   
                   
              }
            }
            
            
     
        })
    }
}