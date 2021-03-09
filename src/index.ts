import { Message } from "discord.js";
import path from "path";

require("dotenv").config();
const fs = require("fs");
const Discord = require("discord.js");
const client = new Discord.Client();
const { prefix } = require("../config.json");
client.commands = new Discord.Collection();
const commandFiles = fs
  .readdirSync(path.join(__dirname, "/commands"))
  .filter((file: any) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(path.join(__dirname, `/commands/${file}`));
  client.commands.set(command.name, command);
}

client.once("ready", () => {
  console.log("Ready!");
});

client.login(process.env.TOKEN);

client.on("message", (message: Message) => {
  // if message dont have prefix or is from author: IGNORE
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  // seperating the command from the arguments
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = (args as any).shift().toLowerCase();

  // if theres no match in ./commands for the command - return early
  if (!client.commands.has(command)) return;

  // dynamically fill command w/ message and args into the commands in ./commands
  try {
    client.commands.get(command).execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply("there was an error trying to execute that command");
  }
});
