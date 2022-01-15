const { Collection } = require('discord.js');
const { readdirSync } = require('fs');

global.bot.commands = new Collection();

console.log('Loading events:');

const events = readdirSync('./events/').filter(file => file.endsWith('.js'));

for (const file of events) {
	const event = require(`../events/${file}`);
	console.log(`-> Loaded event ${file.split('.')[0]}`);
	global.bot.on(file.split('.')[0], event.bind(null, global.client));
	delete require.cache[require.resolve(`../events/${file}`)];
}
