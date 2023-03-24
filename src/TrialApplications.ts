import { Client, EmbedBuilder, TextChannel, Role, Guild } from "discord.js";
import { Channels, Colours, purgeChannel, stripRole, GuildId, Roles } from "./Utils";
import { duoRoleData, groupRoleData, welcome, gearRequirements, notes, metricsRequirements } from "./data/TrialApplications";

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
    const channel = await client.channels.fetch(Channels.trialApplications) as TextChannel;
    const guild = await client.guilds.fetch(GuildId) as Guild;
    await purgeChannel(channel);
    const tocEmbed = new EmbedBuilder()
        .setTitle('Table of Contents')
        .setColor(Colours.lightblue)
        .setFooter({ text: 'Last Updated' })
        .setTimestamp();
    const fields: any = [];
    const generalField: any = {
        name: 'General Information',
        value: '',
        inline: true
    };
    await channel.send(welcome);
    await channel.send(`⬥ __**Gear Requirements**__`);
    const generalEmbed = new EmbedBuilder()
        .setColor(Colours.gold)
        .setDescription(gearRequirements);
    const generalSent = await channel.send({ embeds: [generalEmbed] });
    generalField.value += `⬥ [Gear Requirements](${generalSent.url})\n`;
    await channel.send(`⬥ __**Metrics Requirement**__`);
    const metricsEmbed = new EmbedBuilder()
        .setColor(Colours.gold)
        .setDescription(metricsRequirements.description)
        .setImage(metricsRequirements.image);
    const metricsSent = await channel.send({ embeds: [metricsEmbed] });
    generalField.value += `⬥ [Metrics Requirement](${metricsSent.url})\n`;
    await channel.send(`⬥ __**Additional Information**__`);
    const notesEmbed = new EmbedBuilder()
        .setColor(Colours.gold)
        .setDescription(notes);
    const notesSent = await channel.send({ embeds: [notesEmbed] });
    generalField.value += `⬥ [Additional Information](${notesSent.url})\n`;
    const duoField: any = {
        name: 'Duo Requirements',
        value: '',
        inline: true
    };
    await channel.send(`⬥ __**Duo Role Requirements**__`);
    for await (const roleObject of duoRoleData) {
        const discordRoleObject = await guild.roles.fetch(stripRole(Roles[roleObject.role])) as Role;
        let description = `${Roles[roleObject.role]}\n\n${roleObject.timeExpectation}\n\n> **Requirements**\n\u200B\n\u200B${roleObject.requirements}\n\n> **Obtaining**\n\u200B\n\u200B${roleObject.obtaining}\n\n> **Kills Per Hour**\n\u200B\n\u200B${roleObject.kph}`
        const generalEmbed = new EmbedBuilder()
            .setColor(discordRoleObject.color)
            .setDescription(description);
        const sentEmbed = await channel.send({ embeds: [generalEmbed] });
        duoField.value += `⬥ [${discordRoleObject.name}](${sentEmbed.url})\n`
    }
    const groupField: any = {
        name: '3-7 Requirements',
        value: '',
        inline: true
    };
    await channel.send(`⬥ __**3-7 Role Requirements**__`);
    for await (const roleObject of groupRoleData) {
        const discordRoleObject = await guild.roles.fetch(stripRole(Roles[roleObject.role])) as Role;
        let description = `${Roles[roleObject.role]}\n\n${roleObject.timeExpectation}\n\n> **Requirements**\n\u200B\n\u200B${roleObject.requirements}\n\n> **Obtaining**\n\u200B\n\u200B${roleObject.obtaining}`
        const generalEmbed = new EmbedBuilder()
            .setColor(discordRoleObject.color)
            .setDescription(description);
        const sentEmbed = await channel.send({ embeds: [generalEmbed] });
        groupField.value += `⬥ [${discordRoleObject.name}](${sentEmbed.url})\n`
    }
    fields.push(generalField);
    fields.push(duoField);
    fields.push(groupField);
    tocEmbed.setFields(fields);
    await channel.send({ embeds: [tocEmbed] });
    await process.exit(0)
    console.log(`${client.user.username} is online`);
});