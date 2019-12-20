const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("657599322782957590")
setInterval(function() {
channel.send(`kaptn2 kaptn2 kaptn2 kaptn2 kaptn2`);
}, 30)
})

client.login(process.env.BOT_TOKEN);