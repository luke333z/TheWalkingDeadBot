const Discord = require("discord.js");

module.exports = {
    name: 'moderator',
    description: "Adds the moderator role to a member.",
    execute(message, args){
        let member = message.mentions.members.first();
        member.roles.add("753682882068873316")



    }
}