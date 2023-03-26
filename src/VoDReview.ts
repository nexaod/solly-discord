import { Client, EmbedBuilder, TextChannel } from "discord.js";
import { Channels, Colours, purgeChannel } from "./Utils";
import { welcome, content } from "./data/VoDReview";

const token = process.env.DISCORD_TOKEN; // add your token here

console.log("Bot is starting...");

const client = new Client({
    intents: []
});

client.login(token);

client.on("ready", async () => {
    if (!client.user || !client.application) {
        return;
    }
    const channel = await client.channels.fetch(Channels.vodReview) as TextChannel;
    await purgeChannel(channel);
    await channel.send({ content: welcome, allowedMentions: { parse: [] } });
    const generalEmbed = new EmbedBuilder()
        .setColor(Colours.gold)
        .setDescription(content);
    await channel.send({ embeds: [generalEmbed] });
    await process.exit(0)
    console.log(`${client.user.username} is online`);
});