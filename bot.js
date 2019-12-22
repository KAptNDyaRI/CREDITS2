const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("658036166464897065")
setInterval(function() {
channel.send(`kaptnA2 kaptAn kaptn1A kaptnA1 kaptnA1`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
