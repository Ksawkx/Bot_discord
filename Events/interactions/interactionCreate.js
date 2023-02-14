const {CommandInteraction} = require('discord.js');

module.exports = {
    name: "interactionCreate",

    execute(interaction, client) {
        if (!interaction.isChatInputCommand()) {
             const command = client.commands.get(interaction.commandName);

            if (!command) {
                 interaction.reply({content: "outdated command"});
            }

          command.execute(interaction, client);
        } else if (interaction.isButton()) {
            const role = interaction.guild.roles.cache.get('1074008943652765737');
            return interaction.member.roles
            .add(role)
            .then((member) => 
                 interaction.reply({
                    content: `${role} została przypisana`, 
                ephemeral: true,   
             }),
            );
        } else {
            return;
        }
    },
 };