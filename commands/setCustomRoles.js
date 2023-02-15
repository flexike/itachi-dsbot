const {
    SlashCommandBuilder,
    ActionRowBuilder, ButtonBuilder, ButtonStyle,
    EmbedBuilder, Embed, Client,
    ChannelType, PermissionsBitField,
    Events, VoiceStateManager
} = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('setcustomrole')
        .setDescription('Test!'),

    async execute(interaction) {
        const allRoles = interaction.guild.roles.cache.map(role => "\n" + "<@&" + role.id + ">");
        if(allRoles.length > 2){
            const trash = allRoles.splice(0, 2)
        }

        console.log(interaction.guild.roles.cache)
        // embed first
        const embed = new EmbedBuilder()
            .setTitle(`Set custom role`)
            .setDescription(`Press the reactions and set yourself a custom role`)
            .setFooter({
                text:  interaction.guild.name,
                iconURL: interaction.guild.iconURL()
            })

            .setFields(
                { name: 'All existing roles:', value: `${allRoles}`},
            )

            .setTimestamp()
            .setColor("Random")

        const channel = await interaction.guild.channels.cache.find(c => c.name === 'moonfield')
        if(interaction.channel.id == channel){


            const embds = await interaction.reply({embeds: [embed], fetchReply: true})
            if( await allRoles.length > 0 ) {
                embds.react(`0️⃣`)
            }
            if( await allRoles.length > 1 ) {
                embds.react(`1️⃣`)
            }
            if( await allRoles.length > 2 ) {
                embds.react(`2️⃣`)
            }
            if( await allRoles.length > 3 ) {
                embds.react(`3️⃣`)
            }
            if( await allRoles.length > 4 ) {
                embds.react(`4️⃣`)
            }
            if( await allRoles.length > 5 ) {
                embds.react(`5️⃣`)
            }
            if( await allRoles.length > 6 ) {
                embds.react(`6️⃣`)
            }
            if( await allRoles.length > 7 ) {
                embds.react(`7️⃣`)
            }
            if( await allRoles.length > 8 ) {
                embds.react(`8️⃣`)
            }
            if( await allRoles.length > 9 ) {
                embds.react(`9️⃣`)
            }
            if( await allRoles.length > 10 ) {
                embds.react(`🔟`)
            }


        } else {
            interaction.reply(`This works only in 'moonfield' text channel in mine category`)
        }
    }
}