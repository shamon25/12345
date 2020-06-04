const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NzE1NDgzODA4MDEwNDY5Mzg3.XtECIw.UEv3RoiKc-JOAnhwdWl9qEe3OlA';

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', (message) => {
  if(message.content === 'ping') {
    message.reply('pong');
  }
});

client.login(token);