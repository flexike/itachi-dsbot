const { SlashCommandBuilder } = require("discord.js");
const wait = require('node:timers/promises').setTimeout;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('test')
        .setDescription('test me!'),
    async execute(interaction) {
        await interaction.reply({ content:'test!', ephemeral:true});
    }
}