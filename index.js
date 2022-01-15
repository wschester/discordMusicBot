const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

global.client = new Client({
	intents: [
		Intents.FLAGS.GUILDS,
		Intents.FLAGS.GUILD_MESSAGES,
		Intents.FLAGS.GUILD_VOICE_STATES,
	],
	disableMentions: 'everyone',
});

require('./src/loader.js');

global.client.login(token);