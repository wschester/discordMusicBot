module.exports = {
	name: 'resume',
	aliases: ['unpause'],
	inVoiceChannel: true,

	execute(client, message) {
		const queue = client.distube.getQueue(message);

		if (!queue) return message.channel.send('There is nothing in the queue right now!');

		if (!queue.paused) return message.channel.send('Song is already playing');

		queue.resume();
		return message.channel.send(`${global.client.emotes.play} | Resumed the song`);
	},
};