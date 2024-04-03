import { CommandData } from "src/types";
import { Channels, Roles } from "../../src/Utils";

export const commandData: CommandData[] = [
    {
        title: "Role Assignment",
        description: `Role Assignment occurs through a variety of commands.\n\nCommands will create a post in either <#${Channels.achievementsAndLogs}> or <#${Channels.roleConfirmations}>, and assign the corresponding role to the user.\n\n> All commands can be used in any channel. The bot response is only visible to you.`,
        commands: [
            {
                title: "Cosmetic",
                description: "Assigns a cosmetic role to a user.",
                sections: [
                    {
                        title: "Permissions",
                        value: `${Roles.trialTeam}+`
                    },
                    {
                        title: "Supported Roles",
                        value: `Kill Count, Collection Logs, ${Roles.WRHolder} and ${Roles.erethdorsBane}`
                    },
                    {
                        title: "Usage",
                        value: `\`/assign-cosmetic\` \`[user]\` \`[role]\``
                    }
                ],
                image: "https://cdn.discordapp.com/attachments/1027186342620299315/1064783321185390592/DiscordPTB_C05Joydngo.png"
            },
            {
                title: "Matchmaking",
                description: "Assigns a Matchmaking role to a user.",
                sections: [
                    {
                        title: "Permissions",
                        value: `${Roles.trialTeam}+`
                    },
                    {
                        title: "Supported Roles",
                        value: `All Matchmaking roles outlined in <#${Channels.roleInformation}>`
                    },
                    {
                        title: "Usage",
                        value: `\`/assign-matchmaking\` \`[user]\` \`[role]\``
                    }
                ],
                image: "https://cdn.discordapp.com/attachments/1027186342620299315/1064783151962013696/DiscordPTB_eXI81lhsGC.png"
            },
            {
                title: "Role Rejection",
                description: `Whenever a role is assigned using any command or trial card, a logging item is created in <#${Channels.botRoleLog}> with information about the assignment.`,
                sections: [
                    {
                        title: "Permissions",
                        value: `${Roles.admin}+`
                    },
                    {
                        title: "Usage",
                        value: `Clicking the Reject Role button will delete the message in <#${Channels.achievementsAndLogs}> or <#${Channels.roleConfirmations}> and remove the assigned role from the user.`
                    }
                ],
                image: "https://cdn.discordapp.com/attachments/1027186342620299315/1064782975922864148/DiscordPTB_UYlW1IoREj.png"
            }
        ]
    },
    {
        title: "Trials",
        description: `Trials are hosted using a single command, and executed within a Ticket Tool ticket. This will read the original ticket data, and attempt to populate the trial for you.`,
        commands: [
            {
                title: "Start Trial",
                description: `Creates a Trial card from Ticket Tool information. Automatically detects team size.`,
                sections: [
                    {
                        title: "Permissions",
                        value: `${Roles.trialTeam}+`
                    },
                    {
                        title: "Role",
                        value: "The role the trialee wants to do. This will also assign the trialee to the correct role on the card."
                    },
                    {
                        title: "Region",
                        value: "The world where the trial is hosted."
                    },
                    {
                        title: "Time (optional)",
                        value: "If a gametime is provided, the local time to each members computer is also shown. If not provided, time defaults ASAP. Must be in `YYYY-MM-DD HH:MM` format."
                    },
                    {
                        title: "Usage",
                        value: `\`/start-trial\` \`[user]\` \`[role]\` \`[region]\` \`[trialtype]\` \`[date](optional)\``
                    }
                ],
                image: "https://cdn.discordapp.com/attachments/1027186342620299315/1064782764404121671/DiscordPTB_58xn0X9D4r.png"
            },
            {
                title: "Trial Leaderboard",
                description: "Shows a leaderboard of currently recorded trials.",
                sections: [
                    {
                        title: "Permissions",
                        value: `${Roles.trialTeam}+`
                    },
                    {
                        title: "Usage",
                        value: `\`/trial-leaderboard\``
                    }
                ],
                image: "https://cdn.discordapp.com/attachments/1027186342620299315/1064782203021688923/DiscordPTB_lUy7T6CTpN.png"
            },
            {
                title: "Starting and Disbanding Trials",
                description: `When a trial is started, a \`Moderation\` area will appear, and times will be recorded.`,
                sections: [
                    {
                        title: "Permissions",
                        value: `${Roles.trialTeam}+`
                    },
                    {
                        title: "Usage",
                        value: `Clicking the either button will record when the action has occurred, and start/stop the card.`
                    }
                ],
                image: "https://cdn.discordapp.com/attachments/1027186342620299315/1064782405614964776/DiscordPTB_bOzA0V3s5L.png"
            },
            {
                title: "Passing and Failing Trials",
                description: `When passing and failing a trialee, the result is recorded and the card is closed.`,
                sections: [
                    {
                        title: "Permissions",
                        value: `${Roles.trialTeam}+`
                    },
                    {
                        title: "Usage",
                        value: `Clicking the **Pass** or **Fail** buttons will record the trial.`
                    }
                ],
                image: "https://cdn.discordapp.com/attachments/1027186342620299315/1064782589166096474/DiscordPTB_CvATCwDfmY.png"
            },
        ]
    },
    {
        title: "Damage Per Minute",
        description: `DPM is made up of two commands, where users can check their DPM, as well as submit for cosmetic roles.`,
        commands: [
            {
                title: "DPM",
                description: `The DPM command is used to calculate the damage done per minute given an input.`,
                sections: [
                    {
                        title: "Permissions",
                        value: `None`
                    },
                    {
                        title: "Kill Time",
                        value: "The boss kill time in the tick format. i.e. `1:23.4`"
                    },
                    {
                        title: "Damage",
                        value: "Amount of damage taken from RuneMetrics. i.e. `1234567`"
                    },
                    {
                        title: "Usage",
                        value: `\`/dpm\` \`[time]\` \`[damage]\``
                    }
                ],
                image: "https://cdn.discordapp.com/attachments/1027186342620299315/1064782076689256518/DiscordPTB_rseKapQUnP.png"
            },
            {
                title: "DPM Submit",
                description: `Creates a submission for a DPM tag. Will also post the submission to <#${Channels.botRoleLog}>.`,
                sections: [
                    {
                        title: "Permissions",
                        value: `None`
                    },
                    {
                        title: "Kill Time",
                        value: "The boss kill time in the tick format. i.e. `1:23.4`"
                    },
                    {
                        title: "Damage",
                        value: "Amount of damage taken from RuneMetrics. i.e. `1234567`"
                    },
                    {
                        title: "First Screenshot",
                        value: "A screenshot before the kill starts with RuneMetrics reset."
                    },
                    {
                        title: "Second Screenshot",
                        value: "A screenshot after the kill with kill time visible and RuneMetrics exact damage."
                    },
                    {
                        title: "Usage",
                        value: `\`/dpm\` \`[time]\` \`[damage]\` \`[first_screenshot]\` \`[second_screenshot]\``
                    }
                ],
                image: "https://cdn.discordapp.com/attachments/1027186342620299315/1064781734417289286/DiscordPTB_c5ga7SwlpA.png"
            },
            {
                title: "Accept/Rejecting DPM Submissions",
                description: `After a submission and reviewal, a staff member reviews the DPM submission.`,
                sections: [
                    {
                        title: "Permissions",
                        value: `${Roles.admin}+`
                    },
                    {
                        title: "Usage",
                        value: `Selecting either Accept or Deny will either grant the role, or close the submission.`
                    }
                ],
                image: "https://cdn.discordapp.com/attachments/1027186342620299315/1064783972468543518/DiscordPTB_fPZdBAFDGc.png"
            }
        ]
    },
    {
        title: "Reports",
        description: `Allows anybody to make a matchmaking report about another player, and administrators to check reports.`,
        commands: [
            {
                title: "Report",
                description: `Report any user for any matchmaking violations. Will post the report to <#${Channels.botReportLog}>.`,
                sections: [
                    {
                        title: "Permissions",
                        value: `None`
                    },
                    {
                        title: "User",
                        value: "The user being reported."
                    },
                    {
                        title: "Role",
                        value: "The matchmaking role that is being reported for."
                    },
                    {
                        title: "Description",
                        value: "An explanation of why this report is being made."
                    },
                    {
                        title: "Evidence",
                        value: "Any evidence related to the report."
                    },
                    {
                        title: "Screenshot",
                        value: "Additional evidence and uploadable screenshot."
                    },
                    {
                        title: "Usage",
                        value: `\`/report\` \`[user]\` \`[role]\` \`[description]\` \`[evidence]\` \`[screenshot]\``
                    }
                ],
                image: "https://cdn.discordapp.com/attachments/1027186342620299315/1064784975091740722/DiscordPTB_a4OMuLTbO4.png"
            },
            {
                title: "Report Management",
                description: "Accepting or Rejecting a report.",
                sections: [
                    {
                        title: "Permissions",
                        value: `${Roles.admin}+`
                    },
                    {
                        title: "Usage",
                        value: 'Selecting either Approve or Reject will either approve the report, or reject it completely. On the third approved report of a user, the users role is degraded to the next inferior tier. i.e. Duo Grandmaster to Duo Master.'
                    }
                ],
                image: "https://cdn.discordapp.com/attachments/1027186342620299315/1064785691558555718/DiscordPTB_TG5BdcTLNq.png"
            },
            {
                title: "Reports List",
                description: `Shows all reports for a user.`,
                sections: [
                    {
                        title: "Permissions",
                        value: `${Roles.admin}+`
                    },
                    {
                        title: "User",
                        value: "User to check."
                    },
                    {
                        title: "Usage",
                        value: `\`/reports\` \`[user]\``
                    }
                ],
                image: "https://cdn.discordapp.com/attachments/1027186342620299315/1064786237862445098/DiscordPTB_ta3z1muGO0.png"
            }
        ]
    },
    {
        title: "Administration",
        description: `Various administration commands.`,
        commands: [
            {
                title: "Grant",
                description: `Grants elevated permissions allowing use of things like Role Rejections for certain features.`,
                sections: [
                    {
                        title: "Permissions",
                        value: `${Roles.admin}+`
                    },
                    {
                        title: "Feature",
                        value: "The feature to grant to the user."
                    },
                    {
                        title: "User",
                        value: "The user to grant permissions to."
                    },
                    {
                        title: "Usage",
                        value: `\`/grant\` \`[feature]\` \`[user]\``
                    }
                ],
                image: "https://cdn.discordapp.com/attachments/1027186342620299315/1064786690050363432/DiscordPTB_4EgCBx8eJM.png"
            },
            {
                title: "Revoke",
                description: "Revokes elevated permissions from a user for a provided feature.",
                sections: [
                    {
                        title: "Permissions",
                        value: `${Roles.admin}+`
                    },
                    {
                        title: "Feature",
                        value: "The feature to revoke from the user."
                    },
                    {
                        title: "User",
                        value: "The user to revoke permissions from."
                    },
                    {
                        title: "Usage",
                        value: `\`/revoke\` \`[feature]\` \`[user]\``
                    }
                ],
                image: "https://cdn.discordapp.com/attachments/1027186342620299315/1064787188312711208/DiscordPTB_EQDpmzsWgp.png"
            }
        ]
    },
]
