const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const reactions = require('./reactions.json');
//const {token} = require('./config.json')

function activateAfter5seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
    resolve('message created');
    }, 5000);
  });
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async msg => {  
  if (msg.author.bot) return

  for (const [emoji, words] of Object.entries(reactions)) {

    if (search(words, msg.content))
      msg.react(emoji)
  }
});

function search(needles, haystack) {
  return needles.some(needle => haystack.include(needle.toLowerCase()))
}

//client.login(token)
client.login(process.env.GMZZ_TOKEN)