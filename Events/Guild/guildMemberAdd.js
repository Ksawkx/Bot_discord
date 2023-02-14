const {EmbedBuilder} = require("@discordjs/builders");
const {GuildMember, Embed} = require("discord.js");

module.exports = {
    name: "guildMemberAdd",
    execute(member) {
        const {user, guild} = member;
        const welcomeChannel = member.guild.channels.cache.get('1070455263179579552')  
        const welcomeMessage = `Welcome <@${member.id}> in Bydgoszcz`;
        const memberRole = '1074005199808626758';  

        const WelcomeEmbed = new EmbedBuilder()
        .setTitle("Witamy nowego!")
        .setDescription(welcomeMessage)
        .setColor(0x037821)
        .setFields({name:'Total members', value: `${guild.memberCount}`})
        .setTimestamp();

        welcomeChannel.send({embeds: [WelcomeEmbed]});
        member.roles.add(memberRole);
    }
}