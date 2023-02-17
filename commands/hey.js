const { SlashCommandBuilder } = require("discord.js");
const wait = require('node:timers/promises').setTimeout;

const itachiQuotes = [
    `People live their lives bound by what they accept as correct and true. That’s how they define “reality”. But what does it mean to be “correct” or “true”? Merely vague concepts… Their “reality” may all be a mirage.Can we consider them to simply be living in their own world, shaped by their beliefs?`,
    `Growth occurs when one goes beyond one’s limits. Realizing that is also part of training.`,
    `Those who forgive themselves, and are able to accept their true nature… They are the strong ones.`,
    `Don’t cry Sasuke. Your big brother is here to protect you no matter what happens.`,
    `You and I are flesh and blood. I’m always going to be there for you, even if it’s only as an obstacle for you to overcome. Even if you do hate me. That’s what big brothers are for.`,
    `You will never have to forgive me. No matter what happens to you from here on out, I will always love you.`,
    `Those who turn their hands against their comrades are sure to die a terrible death. Be prepared.`,
    `If you want to know who you are, you have to look at your real self and acknowledge what you see.`,
    `Even the strongest of opponents always have a weakness.`,
    `We do not know what kind of people we truly are until the moment before our deaths. As death comes to embrace you, you will realize what you are.`,
    `People’s lives don’t end when they die. It ends when they lose faith.`,
    `It is not wise to judge others based on your own preconceptions and by their appearances.`,
    `Knowledge and awareness are vague, and perhaps better called illusions. Everyone lives within their own subjective interpretation.`,
];

const quote = itachiQuotes[Math.floor(Math.random()*itachiQuotes.length)]

module.exports = {
    data: new SlashCommandBuilder()
        .setName('hey')
        .setDescription('Just being friendly and say hi + random quote'),
    async execute(interaction) {
        try {
            await interaction.reply({content: 'Hello there!'});
            await wait(2500);
            await interaction.followUp(`"_${quote}_" - Itachi Uchiha AKA me.`)
        }catch(e) {console.log(e.message)}
    }
}