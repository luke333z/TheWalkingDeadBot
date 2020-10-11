const Discord = require("discord.js");

module.exports = {
    name: 'purge',
    description: "Deletes messages.",
    execute(message, args){
        let amount = parseInt(args[0]);
        if(!message.member.hasPermission("MANAGE_MESSAGES")){
            return message.channel.send("You don't have permission to delete messages.");
        }
        if(!args[0]){
            const purge = new Discord.MessageEmbed().setColor("RANDOM").addField("**Usage:** `-purge (number)`", "Deletes messages.").setFooter(`${process.env.DEVELOPER} • ()-required arguments, []-optional arguments`);
            message.channel.send(purge);
            return;
        }
        if (isNaN(amount)) {
            return;
        }
        if(amount <=  100){
            
        message.delete();
            message.channel.bulkDelete(amount);
            return;
            
        }else{
            
        message.delete();
            while(amount >99){
              
                message.channel.bulkDelete(100).catch(console.error);;
                amount=amount-100;
                
            }
            if(amount == 0) return;
            message.channel.bulkDelete(amount).catch(console.error);;
           
        }
        
        
    }
}

