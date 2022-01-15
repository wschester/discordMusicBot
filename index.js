const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

global.bot = new Client({
	intents: [
		Intents.FLAGS.GUILD_MESSAGES,
	],
});

require('./src/loader.js');

global.bot.login(token);