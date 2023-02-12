const {
    SlashCommandBuilder,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    EmbedBuilder,
    Embed,
    Events

} = require('discord.js')
const wait = require('node:timers/promises').setTimeout;
const imagesFvote=["https://www.zoda.gov.ua/images/article/1/000118/118810/foto.jpg","https://static-cse.canva.com/blob/575078/50powerfulexamplesofvisualpropagandaandthemeaningsbehindthem.png","https://d3i6fh83elv35t.cloudfront.net/newshour/app/uploads/2017/07/GettyImages-52778857-712x1024.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO-rcmLhY6yyzDkpt07UQaQyamu_4dm_Cj8A&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRrWHOajFotCn-bkRFRcvK3A2KonvRz2mZHA&usqp=CAU"]
const imagesFverdict=["https://www.teesdalemercury.co.uk/assets/images/articles/large/5961.jpg","https://thumbs.dreamstime.com/b/angry-judge-cartoon-character-pointing-holding-his-gavel-hammer-226204934.jpg","https://img.etimg.com/thumb/width-1200,height-900,imgsize-39670,resizemode-1,msid-93695850/opinion/just-in-jest/a-verdict-could-be-a-banana-split-decision.jpg","https://deow9bq0xqvbj.cloudfront.net/image-logo/7658623/New_album_art_V2_small9clrp.jpg","https://c8.alamy.com/comp/2J7WC5F/court-room-with-lawyer-jury-trial-witness-or-judges-and-the-wooden-judges-hammer-in-flat-cartoon-design-illustration-2J7WC5F.jpg"]
const imagesFaccusation=["https://st3.depositphotos.com/4323461/17732/v/450/depositphotos_177328804-stock-illustration-boss-threatens-finger-to-businessman.jpg","https://www.patrickmulligan.com/images/blog/shutterstock_653157931.jpg","https://fairpunishment.org/wp-content/uploads/2021/06/What-to-do-if-someone-is-making-false-accusations-against-you.jpg","https://previews.123rf.com/images/alphaspirit/alphaspirit1405/alphaspirit140500112/28605006-concept-of-accusation-of-a-guilty-businessman.jpg","https://www.domestic-violence-law.com/images/Accusation-of-domestic-violence.jpg"]




module.exports = {
    data: new SlashCommandBuilder()
        .setName('createtab')
        .setDescription('Test me. Test ME. TEST ME. TEEEESTT MEEEEE!')
        // Embed category
        .addStringOption(option =>
            option.setName('mode')
                .setDescription(`Select your embed's color`)
                .setRequired(true)
                .addChoices(
                    {name: 'Verdict', value: 'Verdict'},
                    {name: 'Vote', value: 'Vote'},
                    {name: 'Accusation', value: 'Accusation'},
                ))
        // Embed title
        .addStringOption(option =>
            option.setName('title')
                .setDescription('Title of embed')
                .setRequired(true))
        // Embed description
        .addStringOption(option =>
            option.setName('description')
                .setDescription('Description of embed')
                .setRequired(true))

        .addNumberOption(option =>
            option.setName('timeset')
                .setDescription('Set time to delete your tab IN SECONDS'))

        // Embed input for vote +
        .addStringOption(option =>
            option.setName('dscplus')
                .setDescription('Description of + for vote !OR! select Target of accusation'))
        .addStringOption(option =>
            option.setName('dscminus')
                .setDescription('Description of - for vote')),



    async execute(interaction) {
        const EMBtitle = interaction.options.getString('title')
        const EMBdescription = interaction.options.getString('description')
        const EMBcategory = interaction.options.getString('mode')
        const EMBdscPlus = interaction.options.getString('dscplus')
        const EMBdscMinus = interaction.options.getString('dscminus')
        const guildAvatar = interaction.guild.iconURL()


        let EMBtime = interaction.options.getNumber('timeset')


        const imageVote = imagesFvote[Math.floor(Math.random()*imagesFvote.length)]
        const imageVerd = imagesFverdict[Math.floor(Math.random()*imagesFverdict.length)]
        const imageAccus = imagesFaccusation[Math.floor(Math.random()*imagesFaccusation.length)]


        // Embed
        const embed = new EmbedBuilder()
            .setTitle(EMBcategory)
            .setTimestamp()
            // .setThumbnail(bot.user)
            .setAuthor({
                iconURL: interaction.user.displayAvatarURL(),
                name: interaction.user.username
            })
            .setFooter({ text: EMBcategory, iconURL: guildAvatar })

        // if statement = statement options
        if(EMBcategory == 'Vote'){

            EMBdscPlus == null || EMBdscMinus == null ?
                embed.addFields({
                    name: EMBtitle,
                    value: EMBdescription,
                })
                :
                embed.addFields([
                    {
                        name: EMBtitle,
                        value: EMBdescription,
                    },
                    {
                        name: "+",
                        value: EMBdscPlus,
                        inline: true
                    },
                    {
                        name: "-",
                        value: EMBdscMinus,
                        inline: true
                    },
                ])


        } else if(EMBcategory == 'Accusation'){
            if(EMBdscPlus == null){
                embed.addFields({
                    name: EMBtitle,
                    value: EMBdescription,
                })
            }else {
                embed.addFields([{
                    name: EMBtitle,
                    value: EMBdescription
                },
                    {
                        name: "Target:",
                        value: EMBdscPlus,
                        inline: true
                    }])
            }
        } else {
            embed.addFields({
                    name: EMBtitle,
                    value: EMBdescription
                }
            )}
        // .setDescription()


        EMBcategory == "Vote" ? embed.setColor(0x45b6fe) : EMBcategory == "Accusation" ? embed.setColor(0xe60000) : embed.setColor(0xbe2ed6);
        EMBcategory == "Vote" ? embed.setImage(imageVote) : EMBcategory == "Accusation" ? embed.setImage(imageAccus) : embed.setImage(imageVerd);

        EMBtime = EMBtime * 1000
        console.log(EMBtime / 1000, "sec")

        const greenMark = []
        const redMark = []

        const msgEmbed = await interaction.reply({embeds: [embed],fetchReply: true})
        if(EMBcategory == "Vote") {
            msgEmbed.react("✅")
            msgEmbed.react("❌")
        } else if (EMBcategory == "Verdict") {
            msgEmbed.react("👍")
            msgEmbed.react("👎")
        } else {
            msgEmbed.react("❤")
            msgEmbed.react("💔")
            msgEmbed.react("💢")
        }

        if(EMBcategory == "Vote"  && EMBtime) {
            await wait(EMBtime);
            greenMark.push(msgEmbed.reactions.cache.get("✅").count);
            redMark.push(msgEmbed.reactions.cache.get("❌").count);
            await msgEmbed.delete()

            const embedSum = new EmbedBuilder()
                .setFooter({ text: EMBcategory})
                .setTimestamp()
                .setAuthor({
                    iconURL: guildAvatar,
                    name: interaction.guild.name
                })
                .setTitle('Result')
                .setDescription(`Time is up, gentlemans. From the last message I can assure you, there was more votes for ${greenMark[0] >= redMark[0]? "✅" : "❌"}.`)

            await interaction.followUp({embeds: [embedSum], fetchReply: true})
        }
    }
}