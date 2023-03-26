import { Client, EmbedBuilder, TextChannel } from "discord.js";
import { Channels, Colours, purgeChannel, Roles } from "./Utils";
import { welcome, roleData } from "./data/StaffApplications";

const token = process.env.DISCORD_TOKEN; // add your token here

console.log("Bot is starting...");

const client = new Client({
    intents: []
});

client.login(token);

const createEmbedForRoles = (recruiting: boolean) => {
    const embed = new EmbedBuilder()
        .setColor(Colours.gold)
    let description = '';
    for (const roleObject of roleData) {
        if (roleObject.available === recruiting) {
            description += `> ${Roles[roleObject.role]}\n\u200B\n\u200B${roleObject.description}\n\n`
        }
    }
    embed.setDescription(description);
    return embed;
}

client.on("ready", async () => {
    if (!client.user || !client.application) {
        return;
    }
    const channel = await client.channels.fetch(Channels.staffApplications) as TextChannel;
    await purgeChannel(channel);
    await channel.send(welcome);
    if (roleData.filter(roleObject => roleObject.available).length) {
        await channel.send(`⬥ __**Currently Recruiting**__ 🟢`);
        await channel.send({ embeds: [createEmbedForRoles(true)] });
    }
    if (roleData.filter(roleObject => !roleObject.available).length) {
        await channel.send(`\u200B\n⬥ __**Currently NOT Recruiting**__ 🔴`);
        await channel.send({ embeds: [createEmbedForRoles(false)] });
    }
    await process.exit(0)
    console.log(`${client.user.username} is online`);
});