module.exports = {
	data:{
		name: "replace",
	}, 
	async execute(bot, message, args) {
        let de = args[0]
        let a = args[1]
        let txt = args.slice(2).join(" ")
        if(!de) return message.channel.send("```Put the text you wanna replace for```")
        if(!a) return message.channel.send("```Put the text you wanna put in the text```")
        if(!txt) return message.channel.send("```Put the text!!```")
        let remplazo = txt.replaceAll(de, a)
            message.channel.send(remplazo)
    	},
};