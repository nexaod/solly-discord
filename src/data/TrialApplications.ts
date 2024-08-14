import { Channels, Emojis, Roles } from "../../src/Utils";

export const welcome = `Welcome to Solak Discord's **Trial Application** channel.\n\nFor information about specific role requirements and kill speeds, please look below.\n\u200B`;

export const gearRequirements = `Trialed roles require that you conform to <#${Channels.requirements}> in addition to the items listed below.\n\u200B\n\u200B⬥ ${Emojis.dummy} Combat Dummy MKII\n\u200B⬥ ${Emojis.kwuarm} Kwuarm Incense Sticks\n\u200B⬥ ${Emojis.spiritWeed} Spirit Weed Incense Sticks\n\u200B⬥ ${Emojis.reaverPouch} and ${Emojis.vampAura} if using ${Emojis.bikArrow}, otherwise ${Emojis.ripperDemon} if DPS and ${Emojis.kalgDemon} if Base\n\u200B⬥ ${Emojis.dommines} Dominion Mines`;

export const metricsRequirements = {
    description: `All applications require **RuneMetrics**, whether that be through VoD, or submitted during a trial after every kill.\n\n> __**Guide**__\n\u200B\n\u200B1. Purchase **RuneMetrics Pro**.\n\u200B\n\u200B2. Open Metrics, toggle \`Show precise values\` and drag the UI to your interface.\n\u200B\n\u200B3. Reset the damage value to 0, and set \`Choose data interval\` to **Since reset**.\n\u200B\n\u200B4. If VoD, reset after each kill. If trialling, after each kill post metrics to trial ticket, then reset metrics.`,
    image: 'https://media.discordapp.net/attachments/927869472189063228/1080289891906236486/image.png',
}

export const notes = `⬥ All requirements listed for a specific role must be performed **consistently**.\n\u200B⬥ All roles can be obtained through a VoD review or Discord stream.\n\u200B⬥ All roles are expected to ${Emojis.vulnBomb} their respective targets (arms/legs/eruptions).\n\u200B⬥ Strong rotations are expected for the role being trialed for.\n\u200B⬥ Good reactions and adaptation to unfamiliar situations are expected, i.e. backloading and frontloading damage.\n\u200B⬥ Lower roles expectations are expected to be understood for higher roles (i.e. Experienced Trial Expectations apply to Master).\n\u200B⬥ Tags are designed around **consistent** kill times, not one-offs.\n\u200B⬥ Trials are always hosted for **one hour**.\n\u200B⬥ Trial hosts are able to end trials early under their discretion.\n\u200B⬥ ${Emojis.vitality} strategy is expected for tanking green pad bombs.\n\u200B⬥ All players are expected to ${Emojis.smokecloud} and ${Emojis.vulnBomb} the boss.\n\u200B⬥ ${Emojis.detonate} is required on legs for all magic users.\n\u200B⬥ Magic users are expected to utilize ${Emojis.inciteFear} to reduce the adrenaline cost of ${Emojis.nami} and autocast ${Emojis.exsang} otherwise.\n\u200B⬥ ${Emojis.shard} are expected to be thrown losslessly. Base expected to ${Emojis.shatter}.\n\u200B⬥ If applying for a role with a VoD you must show 2 consecutive kills (back-to-back). \n\n> The current sécret wórd is \`KingHieno\`.`;

export const duoRoleData = [
    {
        role: `duoRootskips`,
        timeExpectation: `Sub **6:30** kills ${Emojis.magic} | ${Emojis.ranged} | ${Emojis.melee} | ${Emojis.necro}`,
        requirements: `⬥ Skip roots by 50 seconds (58 for ${Emojis.ranged}).\n\u200B⬥ Deal with roots while ensuring arms die in plenty of time before explosion.\n\u200B⬥ 1 cycle the core with clean execution.\n\u200B⬥ Deal with mechanics properly (no bombing team).`,
        obtaining: `⬥ This role is vouchable by anyone with ${Roles.duoRootskips}+.\n\u200B⬥ This role can be obtained through a VoD review.\n\u200B⬥ This role can be obtained through a trial.`,
        kph: `This role expects 6 KPH.`,
    },
    {
        role: `duoExperienced`,
        timeExpectation: `Sub **5:00** kills ${Emojis.magic} | ${Emojis.ranged} | ${Emojis.melee} | ${Emojis.necro}`,
        requirements: `⬥ Stormskips is optional.\n\u200B⬥ Ultimate used by 01:04 with supportive critbuff.\n\u200B⬥ FSOA or ECB special attack used before arms are attackable (01:09).\n\u200B⬥ Phase 2 capped by 2 rainhits.\n\u200B⬥ Phase 3 two padded at most.\n\u200B⬥ Prebuilding with with a ${Emojis.dummy} in Phase 4 is required.`,
        obtaining: `⬥ This role is vouchable by anyone with ${Roles.duoExperienced}+.\n\u200B⬥ This role can be obtained through a VoD review.\n\u200B⬥ This role can be obtained through a trial.`,
        kph: `This role expects 8 KPH.`,
    },
    {
        role: `duoMaster`,
        timeExpectation: `Sub **4:15** or **03:35** rootling kills ${Emojis.magic} | ${Emojis.ranged} | ${Emojis.melee} | ${Emojis.necro}`,
        requirements: `⬥ Consistent rootling skip rotation and prebuild.\n\u200B⬥ Ultimate used by 00:58 or 00:22 WITH active crit buff.\n\u200B⬥ Core exit by 01:36 or 00:58.\n\u200B⬥ Finish both eruptions within 6 GCD's.\n\u200B⬥ ${Emojis.magic}: Place 1 ${Emojis.dummy} during Phase 2.\n\u200B⬥ Phase 2 rain skip.\n\u200B⬥ Solak HP consistently averaging 600k before entering elf.\n\u200B⬥ Phase 3 1 padded consistently.`,
        obtaining: `⬥ This role is vouchable by anyone with ${Roles.duoMaster}+.\n\u200B⬥ This role can be obtained through a VoD review.\n\u200B⬥ This role can be obtained through a trial.`,
        kph: `This role expects 10 KPH.`,
    },
    {
        role: `duoGrandmaster`,
        timeExpectation: `Sub **3:15** kills ${Emojis.magic} | ${Emojis.ranged} | ${Emojis.melee} | ${Emojis.necro}`,
        requirements: `⬥ Consistent rootling skip rotation and prebuild.\n\u200B⬥ DPS expected to vuln P1.\n\u200B⬥ Target cycle arms at 00:24 on average.\n\u200B⬥ Correct use of stalling on P4.\n\u200B`,
        obtaining: `⬥ This role can be obtained through a VoD review.\n\u200B⬥ This role can be obtained through a trial.`,
        kph: `This role expects 12 KPH.`,
    }
]


export const groupRoleData = [
    {
        role: `threeSevenRootskips`,
        timeExpectation: `Sub **6:00** kills ${Emojis.magic} | ${Emojis.ranged} | ${Emojis.melee} | ${Emojis.necro}`,
        requirements: `⬥ Rootskip by 45 seconds (50 for ${Emojis.ranged}).\n\u200B⬥ Deal with roots while ensuring arms die in plenty of time before explosion.\n\u200B⬥ 1 cycle the core with clean execution.\n\u200B⬥ Deal with mechanics properly (no bombing team).`,
        obtaining: `⬥ This role is vouchable by anyone with ${Roles.duoRootskips}+ or ${Roles.threeSevenRootskips}+.\n\u200B⬥ This role can only be obtained through VoD submission.`,
        kph: `This role expects 7 KPH.`,
    },
    {
        role: `threeSevenExperienced`,
        timeExpectation: `Sub **4:30** kills ${Emojis.magic} | ${Emojis.ranged} | ${Emojis.melee} | ${Emojis.necro}`,
        requirements: `⬥ Ultimate used by 1:04 with supportive critbuff.\n\u200B⬥ FSOA or ECB special attack used before arms are targetable.\n\u200B⬥ Core exit by 1:40.\n\u200B⬥ Eruptions killed within 5 GCD's.\n\u200B⬥ Phase into Phase 3 before any rainhit.\n\u200B⬥ Phase 3 two padded at most, with no stalling between pad charges.\n\u200B⬥ Elf rotation must be consistent.\n\u200B⬥ Prebuilding with dummy P4 is required. `,
        obtaining: `⬥ This role is vouchable by anyone with ${Roles.duoExperienced}+ or ${Roles.threeSevenExperienced}+.\n\u200B⬥ This role can be obtained through a VoD review.\n\u200B⬥ This role can be obtained through a trial.`,
        kph: `This role expects 9 KPH.`,
    },
    {
        role: `threeSevenMaster`,
        timeExpectation: `Sub **4:00** OR **3:25** Rootling kills ${Emojis.magic} | ${Emojis.ranged} | ${Emojis.melee} | ${Emojis.necro}`,
        requirements: `⬥ Phase 1 core exit by **1:33** OR **00:55**.\n\u200B⬥ Consistent adrenaline management throughout the hour.\n\u200B⬥ Consistent rootling skip rotation and prebuild.\n\u200B⬥ Ultimate used by **00:58* or **00:22** with active critbuff.\n\u200B⬥ Eruptions killed within 4 GCD's.\n\u200B⬥ Solak HP consistently Sub 1M before entering elf.\n\u200B⬥ One cycle elfs.\n\u200B⬥ Storm tanking required.\n\u200B⬥ Prebuilding with a ${Emojis.dummy} in Phase 4 is required.`,
        obtaining: `⬥ This role is vouchable by anyone with ${Roles.threeSevenMaster}+.\n\u200B⬥ This role can be obtained through a VoD review.\n\u200B⬥ This role can be obtained through a trial.`,
        kph: `This role expects 10 KPH.`,
    },
    {
        role: `threeSevenGrandmaster`,
        timeExpectation: `Sub **3:05** kills ${Emojis.magic} | ${Emojis.ranged} | ${Emojis.melee} | ${Emojis.necro}`,
        requirements: `⬥ Consistent rootling skip rotation and prebuild.\n\u200B⬥ DPS expected to vuln P1.\n\u200B⬥ Ultimate used by 00:20.\n\u200B⬥ Stalling is not required but heavily advised.\n\u200B⬥ Target cycle arms 00:24 is required.\n\u200B⬥ Core exit by 00:44.\n\u200B⬥ Correct use of stalling on P4 expected.\n\u200B  `,
        obtaining: `⬥ This role can be obtained through a VoD review.\n\u200B⬥ This role can be obtained through a trial.`,
        kph: `This role expects 12 KPH.`,
    }
]
