/**
 * @type {import("@structures/Command")}
 */
module.exports = {
  name: "ping",
  description: "shows the current ping from the bot to the discord servers",
  category: "INFORMATION",
  command: {
    enabled: true,
  },
  slashCommand: {
    enabled: true,
    ephemeral: true,
    options: [],
  },

  async messageRun(message, args) {
    await message.safeReply(`🏓 I am God. i work on \`${Math.floor(message.client.ws.ping)}ms\``);
  },

  async interactionRun(interaction) {
    await interaction.followUp(`🏓 I am God. i work on \`${Math.floor(interaction.client.ws.ping)}ms\``);
  },
};
