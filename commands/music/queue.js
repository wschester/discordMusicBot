module.exports = {
	name: 'queue',
	aliases: ['q'],

	execute(client, message) {
		const queue = client.distube.getQueue(message);

		if (!queue) return message.channel.send('There is nothing in the queue right now!');

		const q = queue.songs.map((song, i) => `${i === 0 ? 'Playing:' : `${i}.`} ${song.name} - \`${song.formattedDuration}\``).join();

		message.channel.send(`**Server Queue**\n${q}`);
	},
};