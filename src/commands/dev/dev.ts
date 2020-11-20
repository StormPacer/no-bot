import { Message, MessageEmbed } from "discord.js";

import randColor from '../../randomColor'

function command(msg: Message, args: string[]) {
    msg.channel.send(new MessageEmbed({
        "title": "Dev Info",
        "description": "Hi, I'm a developer who has absolutly NO idea what he's doing (haha he said the thing) \n [GitHub](https://github.com/AsoDesu) \n [Twitch](https://www.twitch.tv/asodesu_) \n [Twitter](https://twitter.com/AsoDesu_)",
        "color": randColor(),
        "author": {
            "icon_url": "https://cdn.discordapp.com/avatars/580425653325791272/a_3f2acc778b557be3d58156b5b1262158.gif",
            "name": "Aso#0001"
        }
    }))
}

export default command