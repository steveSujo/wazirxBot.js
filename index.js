const {Client, Intents} = require('discord.js');
const {token} = require('./config.json');

const client = new Client({intents:[Intents.FLAGS.GUILDS]});

client.once('ready',() => {
	console.log(`Ready! Loged in as ${client.user.tag}`);
});

client.on("interactionCreate", async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;
	
	if (commandName === "ping"){
		await interaction.reply("Pong!");
	} else if (commandName === "server"){
		await interaction.reply(`Sever name: ${interaction.guild.name}\n Total members:${interaction.guild.memberCount}`);

	} else if (commandName === "user"){
		await interaction.reply(`Your Tag: ${interaction.user.tag} \n Your ID: ${interaction.user.id}`);
	}
});

client.login(token);