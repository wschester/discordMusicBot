module.exports = {
	name: 'queue',
	aliases: ['q'],

	execute(client, message) {
		const queue = client.distube.getQueue(message);

		if (!queue) return message.channel.send('There is nothing in the queue right now!');

		const q = queue.songs.slice(0, 6).map((song, i) => `${i === 0 ? 'Playing:' : `${i}.`} \`${song.name} - ${song.formattedDuration}\``).join('\n');

		message.channel.send(`${global.client.emotes.queue}**Server Queue**${global.client.emotes.queue}\n${q}
			${queue.songs.length >= 6 ? 'More in the queue...' : ''}`);
	},
};