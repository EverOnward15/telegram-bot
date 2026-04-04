const { Telegraf } = require("telegraf");

const bot = new Telegraf("8043063927:AAHtd0_EqjuR_mjRk_VriFHfOpu_PqWcNk8");

bot.start((ctx) => {
  ctx.reply("Click the Open Wallet button below");
});

bot.launch();

console.log("Bot is running...");