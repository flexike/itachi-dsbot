const {
    SlashCommandBuilder,
    ActionRowBuilder, ButtonBuilder, ButtonStyle,
    EmbedBuilder, Embed, Client,
    ChannelType, PermissionsBitField,
    Events, VoiceStateManager
} = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('spawncreateroles')
        .setDescription('Create new roles from here!'),

    async execute(interaction) {
        try {
            const allRoles = interaction.guild.roles.cache.map(role => "\n" + "<@&" + role.id + ">");

            if (allRoles.length > 2) {
                const trash = allRoles.splice(0, 2)
            }

            // embed first
            const embed = new EmbedBuilder()
                .setTitle(`Add custom role`)
                .setDescription(`Press the button and create a custom role`)
                .setFooter({
                    text: interaction.guild.name,
                    iconURL: interaction.guild.iconURL()
                })


                .setFields(
                    {name: 'All existing roles:', value: `${allRoles}`},
                )


                .setTimestamp()
                .setColor("Random")

            // row
            const row = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId('addRole')
                        .setLabel('+')
                        .setStyle(ButtonStyle.Success),

                    new ButtonBuilder()
                        .setCustomId('removeRole')
                        .setLabel('-')
                        .setStyle(ButtonStyle.Danger)
                )

            const channel = await interaction.guild.channels.cache.find(c => c.name === 'moonfield')
            if (interaction.channel.id == channel) {
                await interaction.reply({embeds: [embed], fetchReply: true, components: [row]})
            } else {
                interaction.reply(`This works only in 'moonfield' text channel in mine category`)
            }
        } catch (e) {
            console.log(e.message)
        }
    }
}