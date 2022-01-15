const { Constants } = require('discord.js');

module.exports = {
	name: 'join',
	aliases: ['move'],

	execute(client, message, args) {
		let voiceChannel = message.memeber.voice.channel;

		if (args[0]) {
			voiceChannel = client.channels.fetch(args[0]);

			if (!Constants.VoiceBasedChannelTypes.includes(voiceChannel?.type)) {
				return message.channel.send(`${args[0]} is not a valid voice channel`);
			}
		}

		client.distube.voices.join(voiceChannel);
	},
};