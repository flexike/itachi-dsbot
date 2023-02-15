const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');
const {
    Client,
    Events,
    GatewayIntentBits,
    ActivityType,
    Collection,
    ChannelType, PermissionsBitField,
    Partials,VoiceStateManager, voiceStateUpdate,
} = require('discord.js')
dotenv.config();
const wait = require('node:timers/promises').setTimeout;


// Bot client init
const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildMembers
   ],
    partials: [
        Partials.Message,
        Partials.Channel,
        Partials.Reaction
    ]
})



// Bot command reader + new Collection
const commandPath = path.join( __dirname, 'commands')
const commandFiles = fs.readdirSync(commandPath).filter(file => file.endsWith('.js'))

client.commands = new Collection()
for(const file of commandFiles) {
    const filePath = path.join(commandPath, file)
    const command = require(filePath)
    // map + add command in clientCommand collection
    if ('data' in command && 'execute' in command) {
        client.commands.set(command.data.name, command);
    } else {
        console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
    }
}
// 123

// Bot event reader
const eventsPath = path.join(__dirname, 'events')
const eventsFiles = fs.readdirSync(eventsPath).filter( file => file.endsWith('.js'))

    for (const file of eventsFiles) {
        const filePath = path.join(eventsPath, file)
        const event = require(filePath)
        if (event.once) {
            client.once(event.name, (...args) => event.execute(...args))
        } else {
            client.on(event.name, (...args) => event.execute(...args))
        }
    }


// client.on('messageReactionAdd', async(reaction, user) => {
//     const channel = '1073743796023611422'
//     if(reaction.message.partial) await reaction.message.fetch()
//     if(reaction.partial) await reaction.fetch()
//     if(user.bot) return
//     if(!reaction.message.guild) return
//
//     if(reaction.message.channel.id == channel) {
//         if(reaction.emoji.name === '0️⃣') {
//             await reaction.message.guild.members.cache.get(user.id).roles.add('1075386131870404670')
//         }
//     }
// })

client.login(process.env.token).then( () => {
    console.log("Bot is online")
})