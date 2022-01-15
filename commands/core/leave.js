module.exports = {
	name: 'leave',
	aliases: ['disconnect'],

	execute(client, message) {
		client.distube.voices.leave(message);
	},
};