module.exports = {
	name: 'stop',
	aliases: ['disconnect', 'leave'],
	inVoiceChannel: true,

	execute(client, message) {
		const queue = client.distube.getQueue(message);

		if (!queue) return message.channel.send('nothing in the queue');

		queue.stop();
		message.channel.send('Stopped!');
	},
};