import { Message } from "discord.js";
import Discord from "discord.js";

module.exports = {
  name: "ping",
  description: "Ping!",
  execute(message: Message) {
    const embed = new Discord.MessageEmbed()
      .setColor("#424242")
      .setTitle("Hello!")
      .setURL("https://zanes.house")
      .setAuthor("Zane")
      .setTimestamp();
    message.reply(embed);
  },
};
