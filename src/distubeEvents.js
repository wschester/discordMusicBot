const client = global.client;

console.log('Loading DisTube Events...');

client.distube.on('playSong', (queue, song) =>
	queue.textChannel.send(
		`${client.emotes.play} | Playing \`${song.name} - '${song.formattedDuration}\`\nRequested by: ${song.user}`,
	));

client.distube.on('addSong', (queue, song) => {
	if (queue.songs.length === 1) return;

	queue.textChannel.send(
		`${client.emotes.success} | Added \`${song.name}\` to the queue`,
	);
});