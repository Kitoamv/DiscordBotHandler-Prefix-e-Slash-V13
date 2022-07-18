const Discord = require('discord.js')

module.exports = {
    name: 'ping',
    description: 'Ver a latência do bot',
    type: 'CHAT_INPUT',
    run: async(client, interaction) => {

        interaction.reply({
            content: `\`${client.ws.ping}\`ms.`
        })

    }
}