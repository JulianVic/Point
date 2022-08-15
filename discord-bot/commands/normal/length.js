const {MessageEmbed} = require("discord.js")

module.exports = {
	data:{
		name: "length",
	}, 
	async execute(bot, message, args) {
        let txt = args.join(" ")
        if(!txt) return message.channel.send("```Put some text```")
        message.channel.send("The size of length: "+txt.length)
    	}, 
};