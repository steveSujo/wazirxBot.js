const { SlashCommandBuilder } = require('@discordjs/builders')
// const { execute } = require('./ping')

module.exports = {
	data: new SlashCommandBuilder()
		.setName("avatar")
		.setDescription("get Avatar URL")
		.addStringOption(option => option.setName('input').setDescription('The input to echo back')),

	async execute(interaction) {
		const value = interaction.options.getString('input');
		if (value) return interaction.reply(`The options value is: \`${value}\``);
		return interaction.reply('No option was provided!');


	},
};