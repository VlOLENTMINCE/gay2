//don't be dumb and private your project
//paste your token in the .env

require("dotenv").config();

const config = require("./config.js")
const GuardianClient = require("./core/client.js");
const client = new GuardianClient();
var approx = require('approximate-number');

client.login(process.env.TOKEN);


client.on('ready', function() {
   
  
      
  
        client.user.setActivity(`${client.users.cache.size} Members | `, {type: "WATCHING", url: "https://www.twitch.tv/flight23white"})
  
  
    //   client.user.setActivity("Prefix (;;)", {type: "STREAMING", url: "https://www.twitch.tv/flight23white"})
      
  
   //    client.user.setActivity(`${approx(client.guilds.size)} Guilds | ;;help`, {type: "STREAMING", url: "https://www.twitch.tv/flight23white"})
  

  
  
  console.log('ANTIWIZZ ready');
console.log('ANTIWIZZ ON');
console.log('LOGS DOWN');
console.log('')
});
 
