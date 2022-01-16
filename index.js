const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');
const { DisTube } = require('distube');
const { SpotifyPlugin } = require('@distube/spotify');

global.client = new Client({
	intents: [
		Intents.FLAGS.GUILDS,
		Intents.FLAGS.GUILD_MESSAGES,
		Intents.FLAGS.GUILD_VOICE_STATES,
	],
	disableMentions: 'everyone',
});

global.client.distube = new DisTube(global.client, {
	leaveOnStop: false,
	emitNewSongOnly: true,
	plugins: [new SpotifyPlugin()],
});

require('./src/loader.js');

global.client.login(token);