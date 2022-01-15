module.exports = (client, message) => {
	const { PREFIX } = require('../config.json');

	// removing any messages that arent commands
	if (message.author.bot || message.channel.type === 'dm') return;
	if (message.content[0] !== PREFIX) return;

	const args = message.content.substring(PREFIX.length).split(' ');
	const command = args[0].toLowerCase();
	const cmd = global.client.commands.get(command);
	// || global.client.commands.find(coman => coman.aliases && coman.aliases.includes(command));

	if (cmd) {

		if (cmd.voiceChannel) {
			if (!message.member.voice.channel) return message.channel.send('You are not in a voice channel!');

			if (message.guild.me.voice.channel && message.memeber.voice.channel.id !== message.guild.mem.voice.channel.id) {
				return message.channel.send('You are not in the same voice cannel');
			}
		}

		cmd.execute(global.client, message, args);
	}
};