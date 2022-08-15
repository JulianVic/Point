const {MessageEmbed} = require("discord.js")

module.exports = {
	data:{
		name: "ping",
        aliases: ["pong"],
	}, 
	async execute(bot, message, args) {

		message.channel.send("```🏓 Pong! "+bot.ws.ping+" ms```")
	
    	},
};