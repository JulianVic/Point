const {MessageAttachment} = require("discord.js")
const ytdl = require("ytdl-core")
const fs = require("fs");
const { title } = require("process");
module.exports = {
	data:{
		name: "mp4",
	}, 
	async execute(bot, message, args) {
        let link = args[0]
        if(!link) return message.channel.send("```Put something```")
        let es = ytdl.validateURL(link)
        if(!es) return message.reply("```Put a validate URL```")
        if((await ytdl.getBasicInfo(link)).videoDetails.lengthSeconds > 234) return message.channel.send("```I was designed for videos no longer than 3:54 minutes.```")
        let video = ytdl(link)
        const x = await ytdl.getBasicInfo(link)
        const y = await x.videoDetails.title
        let att = new MessageAttachment(video, y+".mp4")  
        let mensaje = await message.reply("```Just a while...```")
        await mensaje.edit({files:[att]}).catch(() => null)
    	}, 
};