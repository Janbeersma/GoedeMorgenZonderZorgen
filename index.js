const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
//const {token} = require('./config.json')
const begroetingen = ["goede ochtend", "Goede ochtend","goedemorgen", "Goedemorgen", "goeiemoggel", "Goeiemoggel", "goeiemorgen", "Goeiemorgen", "goededag", "Goededag", "mogguh", "Mogguh", "schöne daag", "Schöne daag", "morning", "Morning", "mogge", "Mogge", "goedemoggel", "Goedemoggel", "goede moggel", "Goede moggel"]
const avondgroeten = ["goedenavond", "Goedenavond", "navond", "Navond", "goedenacht", "Goedenacht", "goede avond", "Goede avond", "weltrusten", "Weltrusten", "trusten", "Trusten", "gnite", "Gnite", "slaapze", "Slaapze", "fapze", "Fapze", "nightie", "Nightie", "slaaplekker", "Slaaplekker", "slaap lekker", "Slaap lekker", "goedenavund", "Goedenavund"]
const weekend = ["het is weekend", "Het is weekend", "tis weekend", "Tis weekend", "weer weekend", "Weer weekend"]
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });
  
  client.on('messageCreate', async msg => {
    if (msg.author.bot) return
  
    else if(begroetingen.some(word => msg.content.includes(word))){
      msg.react('🌞')
    }

    else if(avondgroeten.some(word => msg.content.includes(word))){
      msg.react('✨')
    }
    
    else if(weekend.some(word => msg.content.includes(word))){
      msg.react('🎉')
    }

  });
  
//client.login(token)
client.login(process.env.GMZZ_TOKEN)