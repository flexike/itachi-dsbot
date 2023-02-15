const {
    SlashCommandBuilder,
    ActionRowBuilder, ButtonBuilder, ButtonStyle,
    EmbedBuilder, Embed, Client,
    ChannelType, PermissionsBitField,
    Events, VoiceStateManager

} = require('discord.js')



module.exports = {
    data: new SlashCommandBuilder()
        .setName("spawnmoonfield")
        .setDescription(`Spawn Itachi's moonfield`),

    async execute(interaction) {
        await interaction.guild.channels.fetch()
        const categoryExist = await interaction.guild.channels.cache.find(c => c.name === `Itachi`)

        if(!categoryExist){
            await interaction.deferReply()
            const category = await interaction.guild.channels.create({
                name: 'Itachi',
                type: ChannelType.GuildCategory
            })

            const voicechannel = await category.children.create({
                name: '[+]', type: ChannelType.GuildVoice,
            })

            const textchannel = await category.children.create({
                name: 'moonfield', type: ChannelType.GuildText,
            })
            await interaction.editReply({ content: `Category with voice & text channel created and at your service.`})
        } else {
            await interaction.reply({content: `Category is already created. I don't want to create one more. That would be stupid waste of chakra..`, ephemeral: true,})
        }
    }
}
