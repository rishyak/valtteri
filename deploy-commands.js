/* 
To add a new slash command:
  Add it to the commands list and rerun this file
  node deploy-commands.js  
*/

const { REST, SlashCommandBuilder, Routes } = require('discord.js');
require("dotenv").config();

const token = process.env.TOKEN;
const clientId = process.env.CLIENTID;
const guildId = process.env.GUILDID;

const commands = [
	new SlashCommandBuilder().setName('james').setDescription('to whom it may concern...'),
	new SlashCommandBuilder().setName('porridge').setDescription('yum yum'),
	new SlashCommandBuilder().setName('twopointo').setDescription('new year, same me'),
]
	.map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then((data) => console.log(`Successfully registered ${data.length} application commands.`))
	.catch(console.error);
