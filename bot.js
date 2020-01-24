const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("617451409608146944")
setInterval(function() {
channel.send(`لا تبجي لا تبجي لا تبجي لا تبجي`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
