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
         
          
            
            data = data.split(',\n\r')
            var random = getRandomInt(0,data.length-1)
            cLog(data.length-1);cLog(random);
            cLog(data)
            var deita = data[random]
            
            var things=deita.split('_')
            
            /*
                things[0]=name
                things[1]=plural/singular form
                things[2], things[3]=min and max number
                things[4], things[5]=durability/quality max and min
                things[6]= Durability/quality

            */
           let num1 = parseInt(things[2], 10); 
           let num2 = parseInt(things[3], 10);
           let dur1 = parseInt(things[4], 10); 
           let dur2 = parseInt(things[5], 10)
            if(things[2]==things[3]){
                //only one object
                if(!things[6]){
                    cLog("Path 1a")
                    message.channel.send(`You got ${things[1]} ${things[0]}.`)
                } else {
                         let dur =getRandomInt(dur1,dur2);
                       cLog("Path 1b");
                      message.channel.send(`You got ${things[1]} ${things[0]} with ${dur}% ${things[6]}.`);
                }
            }else{
               
                let n =getRandomInt(num1,num2)
               
                if(!things[6]){
                    //no durability
                    if(n==1){
                        //one object
                        cLog("Path 2a")
                    message.channel.send(`You got ${n} ${things[0]}.`)
                    }else{
                        //more objects
                        cLog("Path 2b")
                        message.channel.send(`You got ${n} ${things[0]}${things[1]}.`)
                    }
                }else if(things[6]){
                     //durability

                     let dur =getRandomInt(dur1,dur2)
                     if(things[6]=="durability"){
                     if(n==1){
                        //one object, Path 3
                        cLog("Path 3a")
                        message.channel.send(`You got ${n} ${things[0]} with ${dur}% ${things[6]}.`)
                    }else{
                        //more objects
                        cLog("Path 3b")
                        message.channel.send(`You got ${n} ${things[0]}${things[1]} with ${dur}% ${things[6]}.`)
                    }
                    }
                    if(things[6]=="quality"){
                    if(n==1){
                       //one object
                       cLog("Path 4a")
                        message.channel.send(`You got ${n} ${things[0]}. Quality: ${dur}%`)
                    }else{
                       //more objects
                       cLog("Path 4b")
                        message.channel.send(`You got ${n} ${things[0]}${things[1]}. Quality: ${dur}%`)
                    }
                    }
                }
            }
            
            
     
        })
    }
}
