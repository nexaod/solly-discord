import { Client, EmbedBuilder, TextChannel } from "discord.js";
import { Channels, Colours, purgeChannel } from "./Utils";
import { commandData } from "./data/Commands";
import { Section } from "./types";

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
    const channel = await client.channels.fetch(Channels.commandInfo) as TextChannel;
    await purgeChannel(channel);
    await channel.send('> __**Command Information**__');
    const tocEmbed = new EmbedBuilder()
        .setTitle('Table of Contents')
        .setColor(Colours.lightblue)
        .setFooter({ text: 'Last Updated' })
        .setTimestamp();
    const fields: any = [];
    for await (const command of commandData) {
        const tocField: any = {
            name: command.title,
            value: '',
            inline: true
        };
        await channel.send(`⬥ __**${command.title}**__`);
        let description = command.description;
        if (command.sections) {
            command.sections.forEach((section: Section) => {
                description += `\n\n**${section.title}:** ${section.value}`
            })
        }
        const generalEmbed = new EmbedBuilder()
            .setColor(Colours.gold)
            .setDescription(description);
        if (command.image) generalEmbed.setImage(command.image);
        const generalEmbedMessage = await channel.send({ embeds: [generalEmbed] });
        if (command.commands) {
            for await (const subCommand of command.commands) {
                let subDescription = `> ${subCommand.description}`
                subCommand.sections.forEach((section: Section) => {
                    subDescription += `\n\n**${section.title}:** ${section.value}`
                })
                const subEmbed = new EmbedBuilder()
                    .setTitle(subCommand.title)
                    .setColor(Colours.lightblue)
                    .setDescription(subDescription);
                if (subCommand.image) subEmbed.setImage(subCommand.image);
                const commandEmbed = await channel.send({ embeds: [subEmbed] });
                tocField.value += `[${subCommand.title}](${commandEmbed.url})\n`
            }
        } else {
            tocField.value = `[Link](${generalEmbedMessage.url})`;
        }
        fields.push(tocField);
    }
    tocEmbed.setFields(fields);
    await channel.send({ embeds: [tocEmbed] });
    await process.exit(0)
    console.log(`${client.user.username} is online`);
});