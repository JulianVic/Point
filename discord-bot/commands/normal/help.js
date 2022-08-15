const {MessageEmbed} = require("discord.js")

module.exports = {
	data:{
		name: "help",
	}, 
	async execute(bot, message, args) {
        var xmas95 = new Date()
    var days = {
        1:"monday",
        2:"tuesday",
        3:"wednesday",
        4:"thursday",
        5:"friday",
        6:"saturday",
        7:"sunday"}
    var dia = xmas95.getDay()
            let array = ["```Hi! I am Point!. And I love the development \n\nI hope I could help you\nYou can use .help <command> to more information about that command```",
                   "```Hi! I am Point!. And I secretly love Comma \n\nI hope I could help you\nYou can use .help <command> to more information about that command```",
                   "```Hi! I am Point!. And I think HTML is not a language \n\nI hope I could help you\nYou can use .help <command> to more information about that command```",
                   "```Hi! I am Point!. And today could be a nice day :) \n\nI hope I could help you\nYou can use .help <command> to more information about that command```",
                   "```Hi! I am Point!. And today is "+days[dia]+" \n\nI hope I could help you\nYou can use .help <command> to more information about that command```"]
    let random = Math.floor([Math.random() * array.length])
	message.channel.send(array[random])
    	},
};