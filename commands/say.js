const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('say')
        .setDescription('Replies with your input!')
        .addStringOption(option =>
            option.setName('words')
                .setDescription('What Itachi says back')
                .setRequired(true))
        .addBooleanOption(option =>
            option.setName('visibility')
                .setDescription('Only you can see?')),
    async execute(interaction) {
        const str = interaction.options.getString('words')
        const eph = interaction.options.getBoolean('visibility')
        await interaction.reply({ content:`${str}`, ephemeral:eph})
    }
}

