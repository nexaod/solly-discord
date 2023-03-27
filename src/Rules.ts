import { Client, EmbedBuilder, TextChannel } from "discord.js";
import { Channels, Colours, purgeChannel } from "./Utils";
import { content, staffTeam } from "./data/Rules";

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
    const channel = await client.channels.fetch(Channels.rules) as TextChannel;
    await purgeChannel(channel);
    const tocEmbed = new EmbedBuilder()
        .setTitle('Table of Contents')
        .setColor(Colours.lightblue)
        .setFooter({ text: 'Last Updated' })
        .setTimestamp();
    const fields: any = [];
    const generalField: any = {
        name: 'Rules',
        value: '',
        inline: true
    };
    for await (const embedData of content) {
        const header = await channel.send({ content: embedData.title, allowedMentions: { parse: [] } });
        generalField.value += `⬥ [${embedData.toc}](${header.url})\n`
        const generalEmbed = new EmbedBuilder()
            .setColor(Colours.gold)
            .setDescription(embedData.description);
        await channel.send({ embeds: [generalEmbed] });
    }
    const staffFields: any = [];
    const ownerField: any = {
        name: 'Owners',
        value: '',
        inline: true
    };
    staffTeam.owners.forEach(owner => {
        ownerField.value += `⬥ <@!${owner}>\n`;
    })
    const adminField: any = {
        name: 'Admins',
        value: '',
        inline: true
    };
    staffTeam.admins.forEach(admin => {
        adminField.value += `⬥ <@!${admin}>\n`;
    })
    const moderatorField: any = {
        name: 'Moderators',
        value: '',
        inline: true
    };
    staffTeam.moderators.forEach(moderator => {
        moderatorField.value += `⬥ <@!${moderator}>\n`;
    })
    staffFields.push(ownerField, adminField, moderatorField);
    const staffHeader = await channel.send({ content: `\u200B\n⬥ __**Staff Team**__`, allowedMentions: { parse: [] } });
    const staffTocField: any = {
        name: 'Staff Team',
        value: `⬥ [Link](${staffHeader.url})`,
        inline: true
    }
    const staffEmbed = new EmbedBuilder()
        .setColor(Colours.gold)
        .setFields(staffFields);
    await channel.send({ embeds: [staffEmbed] });
    fields.push(generalField, staffTocField);
    tocEmbed.setFields(fields);
    await channel.send({ embeds: [tocEmbed] });
    await process.exit(0)
    console.log(`${client.user.username} is online`);
});