module.exports = {
	name: 'pause',
	aliases: ['hold'],
	inVoiceChannel: true,

	execute(client, message) {
		const queue = client.distube.getQueue(message);

		if (!queue) return message.channel.send('There is nothing in the queue right now!');

		if (queue.paused) {
			queue.resume();
			return message.channel.send(`${global.client.emotes.play} | Resumed the song`);
		}

		queue.pause();
		message.channel.send(`${global.client.emotes.pause} | Paused the song`);
	},
};