const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

const bot = new Client({
	intents: [
		Intents.FLAGS.GUILD_MESSAGES,
	],
});

bot.login(token);