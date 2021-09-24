const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const { token } = require('./config.json');
// const { fieldInlinePredicate } = require('@discordjs/builders/dist/messages/embed/Assertions');

const client = new Client({
	intents: [Intents.FLAGS.GUILDS],
});

// setting Slash commands
client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

client.once('ready', () => {
	console.log(`Ready! Logged in as ${client.user.tag}`);
});


for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	client.commands.set(command.data.name, command);
}


client.on("interactionCreate", async interaction => {
	if (!interaction.isCommand()) return;

	console.log(interaction.guild.name)

	const command = client.commands.get(interaction.commandName)

	if (!command) return;

	try {
		await command.execute(interaction);

	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}

});



client.login(token);