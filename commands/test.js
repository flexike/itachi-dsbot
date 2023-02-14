const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('test')
        .setDescription('Replies with your input!')
        .addStringOption(option =>
            option.setName('words')
                .setDescription('What Itachi says back')
                .setRequired(true)),
    async execute(interaction) {
        const str = interaction.options.getString('words')
        await interaction.channel.send({ content:`${str}`})
    }
}