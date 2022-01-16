module.exports = {
	name: 'skip',
	aliases: [],
	inVoiceChannel: true,

	execute(client, message) {
		const queue = client.distube.getQueue(message);

		if (!queue) return message.channel.send('There is nothing in the queue right now!');

		try {
			const song = queue.skip();
			message.channel.send(`Skipped! Now playing: ${song.name}`);
		}
		catch (e) {
			message.channel.send(`Error: ${e}`);
		}
	},
};