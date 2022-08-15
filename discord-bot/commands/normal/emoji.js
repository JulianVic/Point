const {MessageEmbed} = require("discord.js")

module.exports = {
	data:{
		name: "png",
	}, 
	async execute(bot, message, args) {
        let emoji = args[0]
        if(!emoji) return message.channel.send("Put something")
        let remplazo = emoji.replace("webp", "png")
        message.channel.send(remplazo)
    	},
};