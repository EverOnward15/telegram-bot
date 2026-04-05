const { Telegraf } = require("telegraf");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Telegram bot setup
const bot = new Telegraf("8043063927:AAHtd0_EqjuR_mjRk_VriFHfOpu_PqWcNk8");

bot.start((ctx) => {
  ctx.reply("Click the Open Wallet button below");
});

bot.launch();

console.log("Bot is running...");

// Dummy route (optional but nice to have)
app.get("/", (req, res) => {
  res.send("Bot is alive");
});

// Start server (this is what Render needs)
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});