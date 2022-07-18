1. Ir no terminal e colocar:

npm i discord.js@13.9.0
npm i chalk@4.1.2
npm i dotenv

2. Ir em config.js e seguir as instruções

3. Configurar o status do bot em events/client/ready.js

4. Se divirta


#Aviso

-> Comandos em prefix: Colocar na Pasta "Commands"

-> Comandos em Slash: Colocar na Pasta "SlashCommands"

#Aviso2

-> Comandos so funcionam se colocar dentro de subpastas.

Explicação:

SlashCommands/COMANDO --> ERRO
SlashCommands/subpasta/COMANDO --> ✅

Commands/COMANDO --> ERRO
Commands/subpasta/COMANDO --> ✅

Exemplo:

SlashCommands/ping.js --> ERRO
SlashCommands/utilidades/ping.js --> ✅

Commands/ping.js --> ERRO
Commands/utilidades/ping.js --> ✅

#Base feita por Vexy#2404 - 435877436459188234