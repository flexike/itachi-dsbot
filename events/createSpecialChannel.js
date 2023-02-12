const {
    SlashCommandBuilder,
    ActionRowBuilder, ButtonBuilder, ButtonStyle,
    EmbedBuilder, Embed, Client,
    ChannelType, PermissionsBitField, client,
    Events, VoiceStateManager, voiceStateUpdate

} = require('discord.js')

module.exports = {
    name: 'voiceStateUpdate',

    async execute(oldState, newState, client) {
        const user = newState.member.user
        const userEnterChannel = newState.channelId
        const neededCategory = newState.guild.channels.cache.find(c => c.name == "Itachi")
        const channelPlus = newState.guild.channels.cache.find(c => c.name == "[+]")


        if (userEnterChannel === channelPlus.id && neededCategory.id === channelPlus.parentId) {

            // await console.log(`Connected to +`)
            const channel = await newState.guild.channels.create({
                name: user.username,
                type: ChannelType.GuildVoice,
                parent: newState.channel.parent
            })
            await newState.setChannel(channel)


            const clearVoice = setInterval(() => {
                if (channel.members?.size === 0) {
                    channel.delete('Empty for too long.')
                    clearInterval(clearVoice)
                }
            }, 5000)
        }
    }
}
