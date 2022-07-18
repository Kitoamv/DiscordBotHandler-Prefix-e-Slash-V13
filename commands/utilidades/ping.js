const Discord = require('discord.js')

module.exports = {
    name: 'ping',
    description: 'Ver a latência do bot',
    run: async(client, message) => {

        message.reply({
            content: `\`${client.ws.ping}\`ms.`
        })

    }
}