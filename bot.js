const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("message", message => {
  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  // +say
  if (command === "say") {
    if (!message.channel.guild)
      return message.channel
        .send("اسف هاذا امر خاص لسرفر")
        .then(m => m.delete(5000));
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send("ما عندك صلاحيات ADMINISTRATOR");
    message.delete();
    message.channel.sendMessage(args.join(" "));
  } 

  if (command == "embed") {
    if (!message.channel.guild)
      return message.channel
        .send("اسف هاذا امر خاص لسرفر")
        .then(m => m.delete(5000));
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send("ما عندك صلاحيات MANAGE_MESSAGES");
    let say = new Discord.RichEmbed()
      .setDescription(args.join("  "))
      .setColor(0x23b2d6);
    message.channel.sendEmbed(say);
    message.delete();
  }
});
