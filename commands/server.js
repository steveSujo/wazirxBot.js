const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
	data: new SlashCommandBuilder()
	.setName("sever")
	.setDescription("server Info!"),

	async execute(interaction) {
		await interaction.reply(`Your Sever name: ${interaction.guild.name}\n Your server Membercount:${interaction.guild.memberCount}`);

	},

}