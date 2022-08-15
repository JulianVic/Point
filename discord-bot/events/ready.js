const { ThreadChannel } = require('discord.js');

module.exports.run = async(bot)=>{
		require('../deploy-commands').startSlash(bot)
		console.log(`Point is live!1!!`);
		let canal = bot.channels.cache.get("999056455640551495")

		setInterval(() => {
			let arr = ["my direct messages", "Movies", bot.guilds.cache.size+" servers", ".help"]
			bot.user.setPresence({
				status: 'online',
				activities: [{
				  name: arr[(Math.floor(Math.random() * arr.length))],
				  type: 'WATCHING'
				}]
			  });
		}, 30000);
	
};
