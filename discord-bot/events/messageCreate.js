const {prefix} = require("../config.json")  
module.exports.run = async (bot, message)=>{
	if(!message.content.startsWith(prefix)) return
	const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase(); 
	const cmd = bot.commands.get(command) || bot.commands.find(cmd => cmd.data.aliases && cmd.data.aliases.includes(command))
	if(!cmd) return;
	cmd.execute(bot, message, args)
    message.ejecutoComando = true
};  
