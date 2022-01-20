module.exports = {
	name: 'skip',
	aliases: [],
	inVoiceChannel: true,

	execute(client, message) {
		const queue = client.distube.getQueue(message);

		if (!queue) return message.channel.send('There is nothing in the queue right now!');

		try {
			queue.skip();
			message.channel.send('Skipped!');
		}
		catch (e) {
			message.channel.send(`Error: ${e}`);
		}
	},
};