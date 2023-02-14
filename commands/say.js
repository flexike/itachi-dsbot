const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('say')
        .setDescription('Replies with your text!')
        .addStringOption(option =>
            option.setName('words')
                .setDescription('What Itachi must say')
                .setRequired(true)),
    async execute(interaction) {
        const str = interaction.options.getString('words')
        await interaction.channel.send({ content:`${str}`})
    }
}