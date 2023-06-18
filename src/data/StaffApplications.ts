import { Channels, Roles } from "../../src/Utils";

export const welcome = `Welcome to Solak Discord's **Staff Application** channel.\n\nTo apply for any of the roles below, please use the <@722196398635745312> panel below.\n\u200B`;

// Edit any of these, going to the correct embed will be handled by the bot.
const trialTeamAvailability = {
    experienced: true,
    master: true,
    grandmaster: false,
}

const isTrialTeamAvailable = () => {
    if (!trialTeamAvailability.experienced && !trialTeamAvailability.master && !trialTeamAvailability.grandmaster) {
        return false;
    } else {
        return true;
    }
}

export const roleData = [
    {
        role: `teacher`,
        available: true,
        description: `Teaches learners, helps with questions in <#${Channels.learnerChat}> and <#${Channels.presetFeedback}>.`,
    },
    {
        role: `reaper`,
        available: false,
        description: `Runs our reaper service - offering free kills for people with 0 KC to help them achieve the reaper crew passive and introduce them to Solak.`,
    },
    {
        role: `trialTeam`,
        available: isTrialTeamAvailable(),
        description: `Hosts trials, reviews video submissions and helps with the creation of new tags and changes as metas shift.\n\u200B\n\u200B⬥ ${Roles.experienced} Triallers: **${trialTeamAvailability.experienced ? 'YES' : 'NO'}**\n\u200B⬥ ${Roles.master} Triallers: **${trialTeamAvailability.master ? 'YES' : 'NO'}**\n\u200B⬥ ${Roles.grandmaster} Triallers: **${trialTeamAvailability.grandmaster ? 'YES' : 'NO'}**`,
    },
    {
        role: `vodReviewer`,
        available: true,
        description: `Watches and provides feedback on how to improve your kills submitted to <#${Channels.vodReview}>.`,
    },
    {
        role: `botDev`,
        available: true,
        description: `Manages, develops and deploys new features for the servers bots. Maintains stability in any code repositories or services.\n\u200B\n\u200BExperience in **JavaScript**/**TypeScript** + **Git** + **AWS** preferred.`,
    },
    {
        role: `admin`,
        available: false,
        description: `Deals with the backend running of the server, reviews submissions, reports and helps the ${Roles.owner} team with any changes to the server or its contents.`,
    },
    {
        role: `moderator`,
        available: false,
        description: `Leads specific teams, reviews new staff applications for their team and helps bring new ideas for server improvements.`,
    }
]
