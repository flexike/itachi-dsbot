const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');
const {
    Client,
    Events,
    GatewayIntentBits,
    ActivityType,
    Collection,
    ChannelType, PermissionsBitField,
    Partials,VoiceStateManager, voiceStateUpdate
} = require('discord.js')
dotenv.config();
const wait = require('node:timers/promises').setTimeout;

module.exports = {
    name: Events.MessageReactionRemove,
    async execute(reaction, user) {
        try {

            const channel = await reaction.message.guild.channels.cache.find(c => c.name === 'moonfield')
            const allRoles = await reaction.message.guild.roles.cache.map(c => c.id)
            const trash = allRoles.splice(0, 2)

            if (reaction.message.partial) await reaction.message.fetch()
            if (reaction.partial) await reaction.fetch()
            if (user.bot) return
            if (!reaction.message.guild) return


            if (reaction.message.channel.id == channel) {

                if (await allRoles.length > 0) {
                    if (reaction.emoji.name === '0️⃣') {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(allRoles[0])
                    }
                }

                if (await allRoles.length > 1) {
                    if (reaction.emoji.name === '1️⃣') {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(allRoles[1])
                    }
                }

                if (await allRoles.length > 2) {
                    if (reaction.emoji.name === '2️⃣') {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(allRoles[2])
                    }
                }

                if (await allRoles.length > 3) {
                    if (reaction.emoji.name === '3️⃣') {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(allRoles[3])
                    }
                }

                if (await allRoles.length > 4) {
                    if (reaction.emoji.name === '4️⃣') {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(allRoles[4])
                    }
                }

                if (await allRoles.length > 5) {
                    if (reaction.emoji.name === '5️⃣') {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(allRoles[5])
                    }
                }

                if (await allRoles.length > 6) {
                    if (reaction.emoji.name === '6️⃣') {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(allRoles[6])
                    }

                    if (await allRoles.length > 7) {
                        if (reaction.emoji.name === '7️⃣') {
                            await reaction.message.guild.members.cache.get(user.id).roles.remove(allRoles[7])
                        }
                    }

                    if (await allRoles.length > 8) {
                        if (reaction.emoji.name === '8️⃣') {
                            await reaction.message.guild.members.cache.get(user.id).roles.remove(allRoles[8])
                        }
                    }

                    if (await allRoles.length > 9) {
                        if (reaction.emoji.name === '9️⃣') {
                            await reaction.message.guild.members.cache.get(user.id).roles.remove(allRoles[9])
                        }
                    }

                    if (await allRoles.length > 10) {
                        if (reaction.emoji.name === '🔟') {
                            await reaction.message.guild.members.cache.get(user.id).roles.remove(allRoles[10])
                        }
                    }
                }
            }
        } catch (e) {
            console.log(e.message)
        }
    }
}