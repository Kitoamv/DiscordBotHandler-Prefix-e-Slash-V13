const Discord = require('discord.js')

module.exports = {
    name: 'ready',
    once: true,

    /**
     * @param {Client} client 
     */
    async execute(client) {
        
        let users = client.users.cache.size.toLocaleString('en-US')
        let servers = client.guilds.cache.size.toLocaleString('en-US')

        let status = [
          `📌・${client.guilds.cache.size.toLocaleString('en-US')} servers`,
          `📌・${client.users.cache.size.toLocaleString('en-US')} Users`,
        ],
          i = 0
        setInterval(() => {
          client.user.setActivity(`${status[i++ % status.length]}`, {
            type: `PLAYING`
          })
        }, 60000);

        console.log(`👤・${client.user.tag} online em ${client.guilds.cache.size.toLocaleString('en-US')} servidores com ${client.users.cache.size.toLocaleString('en-US')} usuários.`);
    }
}