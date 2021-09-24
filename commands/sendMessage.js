const { SlashCommandBuilder } = require('@discordjs/builders')
const axinos = require('axios').default

module.exports = {
	data: new SlashCommandBuilder()
		.setName('wizr_api_request')
		.setDescription('test sending message')
		.addStringOption(input => input.setName('crypto').setDescription('enter the the key for the api')),

	async execute(interaction) {
		let crypto = interaction.options.getString('crypto')
		const channel = interaction.guild.channels.cache.find(ch => ch.name === "bot-bot");

		crypto = crypto || "avaxinr"

		axinos.get("https://api.wazirx.com/api/v2/tickers")
			.then(response => {
				cryptoName = response.data[crypto]["name"]
				cryptoLastPrice = response.data[crypto]["last"]

				channel.send(interaction.user.toString())
				channel.send(`${cryptoName} ${cryptoLastPrice}`)

				throw "true"
			})
			// return name, lastPrice
			.catch(error => console.log(error))

		return true
	},
};