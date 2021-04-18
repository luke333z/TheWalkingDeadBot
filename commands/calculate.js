const math = require('discord-math');
 
module.exports = {
    name: "calculate",
    description: "The bot does math for you",
    execute(client, message, args){
        try {
            let num1 = Number(args[0]);
            let operation = args[1];
            let num2 = Number(args[2]);
            
            if (!num1) return;
            if (!operation) return;
            if (!num2) return;
 
            message.channel.send(`${math.calculate(num1, operation, num2)}`);
        } catch (e) {
            console.log(e);
        }
    }
}