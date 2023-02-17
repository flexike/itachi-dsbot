const { Events, ActivityType} = require('discord.js')

module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        try {
            client.user.setActivity('you', {
                type: ActivityType.Watching,
            })
            console.log(`Genjutsu omoyo! I'm awaken.`)
        } catch (e) {
            console.log(e.message)
        }
    }
}