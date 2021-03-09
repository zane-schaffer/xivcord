import { Message } from "discord.js";
import Discord from "discord.js";

const XIVAPI = require("@xivapi/js");
const xiv = new XIVAPI();

module.exports = {
  name: "search",
  description: "Search",
  async execute(message: Message, args: string[]) {
    console.log(args);
    const argsJoined: string = args.join(" ");
    console.log(argsJoined);
    message.channel.send("Searching...");
    let res = await xiv.character.search(argsJoined);
    if (res.Pagination.Results == 0) {
      return await message.channel.send("Cant Find Character");
    } else {
      res.Results.forEach(async (result: any) => {
        let embed = new Discord.MessageEmbed()
          .setTitle(result.Name)
          .setImage(result.Avatar)
          .addFields(
            { name: "Server", value: result.Server },
            { name: "ID", value: result.ID }
          )
          .setTimestamp()
          .setFooter("Thanks for searching");
        return await message.channel.send(
          embed
          // ` Name : ${result.Name} , ID : ${result.ID} , Server: ${result.Server}`,
          // { files: [result.Avatar] }
        );
      });
    }
    return undefined;
  },
};
