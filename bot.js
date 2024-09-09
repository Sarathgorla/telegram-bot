const {Telegraf} =require('telegraf');
const Channel =require('./Channel.js');

const bot = new Telegraf('7545385783:AAG1cvd5Uvq13I_uVZWQnTTR5rckbrMTIu0');

bot.command('addchannel', async (ctx) => {
  const channelId = ctx.message.text.split(' ')[1];
  const userId = ctx.message.from.id;

  try {
    const channel = new Channel({ channelId, userId });
    await channel.save();
    ctx.reply('Channel added successfully!');
  } catch (err) {
    ctx.reply('Error adding channel: ' + err.message);
  }
});

bot.command('removechannel', async (ctx) => {
  const channelId = ctx.message.text.split(' ')[1];
  const userId = ctx.message.from.id;

  try {
    await Channel.findOneAndDelete({ channelId, userId });
    ctx.reply('Channel removed successfully!');
  } catch (err) {
    ctx.reply('Error removing channel: ' + err.message);
  }
});

bot.on('channel_post', async (ctx) => {
  const channelId = ctx.update.channel_post.chat.id;
  const userId = ctx.update.channel_post.from.id;

  try {
    const channel = await Channel.findOne({ channelId, userId });
    if (channel) {
      ctx.replyWithMessageTo(ctx.update.channel_post.message_id, ctx.update.channel_post.chat.id);
    }
  } catch (err) {
    console.error(err);
  }
});

bot.startPolling();
console.log(bot.options.username)