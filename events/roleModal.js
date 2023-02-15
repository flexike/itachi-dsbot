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

            if(!interaction.isModalSubmit()) return;
            if(interaction.customId === 'roleModal'){
                const roleName1 = interaction.fields.getTextInputValue('roleName');
                const roleColor1 = interaction.fields.getTextInputValue('roleColor');
                const roleReason1 = interaction.fields.getTextInputValue('roleReason');

                console.log({ roleName1, roleColor1, roleReason1 });
                await interaction.guild.roles.create({
                    name: roleName1,
                    color: roleColor1 || '#FFFFFF',
                    reason: roleReason1
                })
                await interaction.reply(`'${roleName1}' - created!`)


            } else if (interaction.customId === 'roleModalDel') {
                const roleNameDel = interaction.fields.getTextInputValue('roleNameDelInput');
                const roleReasonDel = interaction.fields.getTextInputValue('roleReasonDelInput');
                // console.log({ roleNameDel, roleReasonDel });


                    // console.log(interaction.guild.roles.cache.has(roleNameDel))
                    if(interaction.guild.roles.cache.has(roleNameDel)) {
                        await interaction.guild.roles.cache.find( role => role.id === roleNameDel).delete()
                        await interaction.reply({content: `${roleNameDel} - successfully deleted!`})
                    } else {
                        await interaction.reply({content: `Wrong role ID, find role ID by placing backslash before mention specific role`, ephemeral: true})
                    }
            }
        }
}