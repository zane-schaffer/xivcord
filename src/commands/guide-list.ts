import { Message } from "discord.js";

import Discord from "discord.js";

module.exports = {
  name: "guide-list",
  description: "List of Guides",
  async execute(message: Message) {
    const guides: string[] = [
      "sastasha",
      "tam tara deepcroft",
      "copperbell mines",
      "halatali",
      "toto rak",
      "haukke manor",
      "brayflox",
      "stone vigil",
    ];

    const guideList = new Discord.MessageEmbed();
    guideList
      .setTitle("List of available dungeon guides")
      .addField("A Realm Reborn", guides);
    return await message.channel.send(guideList);
  },
};
