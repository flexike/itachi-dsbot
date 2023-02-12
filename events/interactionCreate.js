const { Events } = require('discord.js')

module.exports = {
    name: Events.InteractionCreate,
    async execute(interaction) {
        if (!interaction.isChatInputCommand()) return;
        // find exact command in collection
        const command = interaction.client.commands.get(interaction.commandName)
        if(!command) {
            console.error(`No command matching ${interaction.commandName} was found.`)
            return;
        }
        try {
            await command.execute(interaction)
        } catch (error) { console.log(error); await interaction.reply({content: 'There is error with this command', ephemeral: true })}
    }
}