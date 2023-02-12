const { SlashCommandBuilder } = require("discord.js");
const wait = require('node:timers/promises').setTimeout;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('hey')
        .setDescription('friendly'),
    async execute(interaction) {
        await interaction.reply({ content:'Hello there!', ephemeral:false});
        await wait(3000);
        await interaction.editReply('You are in my genjutsu')
        await wait(2000);
        await interaction.followUp('You know it, right?')
    }
}