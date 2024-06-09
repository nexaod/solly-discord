import { Client, EmbedBuilder, TextChannel } from "discord.js";
import { Channels, Colours, purgeChannel } from "./Utils";
import { welcome, content } from "./data/Requirements";

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
    const channel = await client.channels.fetch(Channels.reaperInfo) as TextChannel;
    await purgeChannel(channel);
    const tocEmbed = new EmbedBuilder()
        .setTitle('Table of Contents')
        .setColor(Colours.lightblue)
        .setFooter({ text: 'Last Updated' })
        .setTimestamp();
    const fields: any = [];
    const generalField: any = {
        name: 'Reaper-Info',
        value: '',
        inline: true
    };
    await channel.send({ content: welcome, allowedMentions: { parse: [] } });
    for await (const embedData of content) {
        const header = await channel.send({ content: embedData.title, allowedMentions: { parse: [] } });
        generalField.value += `⬥ [${embedData.toc}](${header.url})\n`
        const generalEmbed = new EmbedBuilder()
            .setColor(embedData.colour)
            .setDescription(embedData.description);
        await channel.send({ embeds: [generalEmbed] });
    }
    fields.push(generalField);
    tocEmbed.setFields(fields);
    await channel.send({ embeds: [tocEmbed] });
    await process.exit(0)
    console.log(`${client.user.username} is online`);
});
//arbitrary update