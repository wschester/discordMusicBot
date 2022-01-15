module.exports = {
	name: 'play',
	aliases: ['p'],
	voiceChannel: true,

	execute(client, message, args) {
		const string = args.join(' ');

		if (!string) return message.channel.send('Please enter a url or query to search');

		client.distube.play(message.member.voice.channel, string, {
			member: message.member,
			textChannel: message.channel,
			message,
		});
	},
};