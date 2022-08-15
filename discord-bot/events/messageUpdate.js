const {prefix} = require("../config.json")  
module.exports.run = async (bot, oldM, newM)=>{

    if((oldM.content !== newM.content) && newM.content.startsWith(prefix) && !oldM.ejecutoComando){
        bot.emit("messageCreate", newM) 
    }    
};  