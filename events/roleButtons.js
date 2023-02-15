const {
    SlashCommandBuilder,
    ActionRowBuilder, ButtonBuilder, ButtonStyle,
    EmbedBuilder, Embed, Client,
    ChannelType, PermissionsBitField,
    Events, VoiceStateManager, ModalBuilder, TextInputBuilder, TextInputStyle
} = require('discord.js')

module.exports = {
    name: Events.InteractionCreate,
    async execute(interaction) {
        if (!interaction.isButton()) return;
        if (interaction.customId === 'addRole') {

            const modal = new ModalBuilder()
                .setTitle(`Create Server Role`)
                .setCustomId(`roleModal`)

            const roleName = new TextInputBuilder()
                .setCustomId(`roleName`)
                .setLabel(`Write Role name (you can add emoji)`)
                .setPlaceholder('Carl && Kaelthas Sunstrider')
                .setMaxLength(100)
                .setRequired(true)
                .setStyle(TextInputStyle.Short)

            const roleColor = new TextInputBuilder()
                .setCustomId(`roleColor`)
                .setLabel(`Write role color in HEX`)
                .setPlaceholder(` #FFFFFF `)
                .setMaxLength(7)
                .setRequired(true)
                .setStyle(TextInputStyle.Short)

            const roleReason = new TextInputBuilder()
                .setCustomId(`roleReason`)
                .setLabel(`Write reason for creation this role`)
                .setPlaceholder('Just cause i can!')
                .setRequired(true)
                .setStyle(TextInputStyle.Paragraph)

            const roleNameRow = new ActionRowBuilder().addComponents(roleName);
            const roleColorRow = new ActionRowBuilder().addComponents(roleColor);
            const roleReasonRow = new ActionRowBuilder().addComponents(roleReason);
            modal.addComponents(roleNameRow, roleColorRow, roleReasonRow);
            await interaction.showModal(modal)

        } else if(interaction.customId === 'removeRole'){
            const modal2 = new ModalBuilder()
                .setTitle(`Delete Server Role`)
                .setCustomId(`roleModalDel`)

            const roleNameDel = new TextInputBuilder()
                .setCustomId(`roleNameDelInput`)
                .setLabel(`Write Role Id`)
                .setPlaceholder('0000000000000000')
                .setMaxLength(19)
                .setRequired(true)
                .setStyle(TextInputStyle.Short)

            const roleReasonDel = new TextInputBuilder()
                .setCustomId(`roleReasonDelInput`)
                .setLabel(`Write reason for deleting role`)
                .setPlaceholder(`Just cause I can`)
                .setStyle(TextInputStyle.Paragraph)

            const roleNameDelRow = new ActionRowBuilder().addComponents(roleNameDel);
            const roleReasonDelRow = new ActionRowBuilder().addComponents(roleReasonDel);

            modal2.addComponents(roleNameDelRow, roleReasonDelRow);
            await interaction.showModal(modal2)
        }
    }
}