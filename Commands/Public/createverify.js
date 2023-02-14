const {EmbedBuilder, ButtonStyle, ActionRowBuilder, ButtonBuilder, SlashCommandBuilder, CommandInteraction, PermissionFlagsBits, } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
    .setName('createverify')
    .setDescription('kanał do weryfikacji')
    .addChannelOption(option =>
        option.setName('channel')
        .setDescription('Tu będą wiadomości weryfikacyjne')
        .setRequired(true)
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    async execute(interaction) {
        const channel = interaction.options.getChannel('channel');
        const verifyEmbed = new EmbedBuilder()
            .setTitle("Verifikacjia")
            .setDescription('klikinj aby sie zweryfikować')
            .setColor(0x5fb041)
            let sendChannel = channel.send({
                embeds: ([verifyEmbed]),
                components: [
                    new ActionRowBuilder().setComponents(
                        new ButtonBuilder().setCustomId('verify').setLabel('Verify').setStyle(ButtonStyle.Success),
                    ),
                ],
            });
            if (!sendChannel) {
                return interaction.reply({content: 'Błąd, staraj sie dalej', ephemeral: true});
            } else {
                return interaction.reply({content: 'Udana veryfikacja', ephemeral: true});
            }
    },
};