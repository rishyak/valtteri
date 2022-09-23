const {Client, GatewayIntentBits} = require("discord.js");
require("dotenv").config();

// New client and token
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const token = process.env.TOKEN;

// List of replies
const replies = [
  "To whom it may concern, fuck you.",
  "Copy James. *sets fastest lap*",
]

// Bot login
client.once("ready", () => {
  console.log(`${client.user.tag} is ready to porridge.`);
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'james') {
    const randomReply = replies[Math.floor(Math.random() * replies.length)];
		await interaction.reply(randomReply);
	} else if (commandName === 'porridge') {
		await interaction.reply('I ate this before Austria 2020 and then never again.');
	} else if (commandName === 'twopointo') {
		await interaction.reply('New year, new me for two races.');
	}
});

client.login(token);

// http://discord.com/oauth2/authorize?client_id=1022666494125035572&scope=bot
