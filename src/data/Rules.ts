import { Channels, Roles } from "../../src/Utils";

// Add Discord ID and comment to indicate who it is
export const staffTeam = {
    owners: [
        '149903940375281664', // Alex
        '327499132900081669', // inboxed
        '263828857637830657', // Jay
        '364558577194631170', // Ru sh
    ],
    admins: [
        '122125308898836480', // SuparNova
        '301111712336052225', // Virius
    ],
    moderators: [
        '205580747384422400', // Epic Smoke
        '376547370235854849', // RDI
        '258055326215962626', // Fate
        '286166587923496972', // desv
        '292290745841352704', // hieno68
    ]
}

export const content = [
    {
        title: `⬥ __**General Rules**__`,
        toc: 'General',
        description: `⬥ Follow all of Jagex's [Rules of RuneScape](https://www.runescape.com/game-guide/rules).\n\u200B⬥ Follow all of Discord's [Terms of Service](https://discord.com/terms).\n\u200B⬥ Do not advertise any other discords, communities or services unless listed in <#775920488161214464>.\n\u200B⬥ If you are interested in joining our <#775920488161214464> please contact an ${Roles.owner}.\n\u200B⬥ Your Discord nickname **must** match or include your RSN.\n\u200B⬥ If you are an iron man, please include \`(iron)\`, i.e. \`Jay LMFAO (iron)\`.\n\n> To contact an ${Roles.owner} or ${Roles.admin} about any issues, please use <#859877764970184714>.`,
    },
    {
        title: `\u200B\n⬥ __**Behavioural Rules**__`,
        toc: 'Behavioural',
        description: `⬥ This server is a **community** server. **Toxicity in any way or form is not tolerated**.\n\u200B⬥ Bullying, racism and elitism are strictly prohibited whether through emojis, voice or text channels.\n\u200B⬥ Spamming is not tolerated in any form. Doing so will result in a mute.\n\u200B⬥ Keep all personal drama outside of the Discord.\n\u200B⬥ Trolling during kills or on Discord will warrant a kick.\n\n> ${Roles.owner} and ${Roles.admin} reserve the ability to apply these rules at their discretion.`,
    },
    {
        title: `\u200B\n⬥ __**Teamforming Rules**__`,
        toc: 'Teamforming',
        description: `⬥ All players must meet the **minimum gear requirements** shown in <#${Channels.requirements}> to join teams.\n\u200B⬥ Hosts are allowed to request **public examines** to ensure these requirements are met.\n\u200B⬥ Hosts are able to increase gear requirements to a reasonable level for experienced strategies.\n\u200B⬥ Only ping when **hosting teams**, not when you are looking for a team.\n\u200B⬥ Hosts are welcome to **require Voice Chat** (VC).\n\u200B⬥ If VC a requirement, the VC must be in this discord. Report any users asking you to VC on other discords.`,
    },
    {
        title: `\u200B\n⬥ __**Performance Rules**__`,
        toc: 'Performance',
        description: `⬥ **No PKing allowed**.\n\u200B⬥ Intentionally PKing other team-members will result in a kick from the team and the Discord.\n\u200B⬥ Exceptions include officially hosted events where there are specific events, or PKing events.\n\u200B⬥ Legacy mode is **NOT** allowed within any teamforming channel, unless approved by a host.\n\u200B⬥ Leaving teams mid hour is **NOT** allowed.\n\u200B⬥ If there is no clear reason or suitable replacement found by the person leaving, they will be kicked from the Discord.\n\u200B⬥ If teams are not achieving the skips as advertised, **three** attempts must be made with concessions from all parties for bad RNG.\n\u200B⬥ Only hold performance to the tag used to matchmake (i.e. ${Roles.grandmaster} joining an ${Roles.experienced} team should not be held to ${Roles.grandmaster} standards).\n\n> Solak Discord is not responsible for any matchmaking outside this Discord.`,
    },
    {
        title: `\u200B\n⬥ __**Splitting Rules**__`,
        toc: 'Splitting',
        description: `⬥ All rare drops are to be **split evenly** between all team members.\n\u200B⬥ Alternative splitting methods must be agreed on **BEFORE** the hour commences.\n\u200B⬥ Evidence of the alternative method must be captured in case of a dispute.\n\u200B⬥ An hour with alternative splits (i.e. keeps) without evidence will be treated as a default **splits** hour.\n\u200B⬥ Splits only apply to the players that were there when the kill started.\n\u200B⬥ Dying to Phase 1 pads counts for a split.\n\u200B⬥ Deliberately starting kills without a reasonable amount of time is considered as all teammates taking part in a kill.\n\n> Refusing to split and **scamming** will warrant a **ban** and information posted to <#775920488161214464> for cross-bans.`,
    },
]
