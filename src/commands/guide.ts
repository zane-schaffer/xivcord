import { Message } from "discord.js";

module.exports = {
  name: "guide",
  description: "Guide",
  async execute(message: Message, args: string[]) {
    console.log(args);
    const argsJoined: string = args.join(" ");
    console.log(argsJoined);
    switch (argsJoined) {
      case "sastasha":
        message.channel.send("https://www.ffxivpocketguide.com/arr/sastasha");
        break;
      case "tam tara deepcroft":
        message.channel.send(
          "https://www.ffxivpocketguide.com/arr/the-tam-tara-deepcroft"
        );
        break;
      case "copperbell mines":
        message.channel.send(
          "https://www.ffxivpocketguide.com/arr/copperbell-mines"
        );
        break;
      case "halatali":
        message.channel.send("https://www.ffxivpocketguide.com/arr/halatali");
        break;
      case "toto rak":
        message.channel.send(
          "https://www.ffxivpocketguide.com/arr/the-thousand-maws-of-toto-rak"
        );
        break;
      case "haukke manor":
        message.channel.send(
          "https://www.ffxivpocketguide.com/arr/haukke-manor"
        );
        break;
      case "brayflox":
        message.channel.send(
          "https://www.ffxivpocketguide.com/arr/brayfloxs-longstop"
        );
        break;
      case "stone vigil":
        message.channel.send(
          "https://www.ffxivpocketguide.com/arr/the-stone-vigil"
        );
        break;

      default:
        message.channel.send(`No guide named ${argsJoined} found`);
        break;
    }
  },
};
