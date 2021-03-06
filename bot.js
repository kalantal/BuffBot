//BuffBot
//Kalantal
//Herod

//Basic Configration
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();
const fs = require('fs');
client.msgs = require ("./persistance/buffs.json")

//👍

client.on('messageReactionAdd', (reaction, user) => {
        let message = reaction.message, emoji = reaction.emoji;
        if (reaction.emoji.name == '👍' && user.id === message.author.id) {
			message.channel.send(`${reaction.message.author}` + " Subscribed for DMT alerts.");
			message.channel.send("<:dmt:733931789243908136>")
        }
});

fs.writeFile("./persistance/buffs.json", JSON.stringify({}, null, 4), function(err){
});

//Command List/Help
client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if(message.content.toLowerCase() == "!buffhelp") {
    message.channel.send("\n **See Upcoming Buffs:**\
  \n <:dmt:733931789243908136> !alliance-all, !horde-all\
  \n <:zg:733931791802564628> !zg\
  \n <:ony:733931792297492490> !ony-a, !ony-h\
  \n <:songflower:733931791643181137> !sf-a, !sf-h\
  \n <:nef:733931791538192415> !nef-a, !nef-h\
  \n <:wcb:733931791567683614> !wcb, !wcb-a\
  \n <:dmf:733931791798370335> !summon-a, !summon-h\
  \n <:dmf:733931791798370335> !dmf-summon-a, !dmf-summon-h\
  \n <:orgport:734106867160055843> !port-a, !port-h\
  \n <:vanish:734106867227164702> !layer-a, !layer-h\
  \n \n **Add Upcoming Buffs:** \
  \n !add buff layer time cost (if any)");
  }

//Add Buff
//  if(message.content.toLowerCase() == "!add $buff $layer $time $cost") {
//    message.channel.send(`\nBuff **$Buff** added\n$Layer\n$Time\n$Cost\nBy: ${message.author}`);
//  }

//Mutual
  if(message.content.toLowerCase() == "!zg") {
    message.channel.send("<:zg:733931791802564628>\
  " + "**Heart of Hakkar**\
  " + "\n**On:** $Layer\
  " + "\n**At:** $Time\
  " + "\n**By:** $Buffer\n");
  }

//Alliance
  if(message.content.toLowerCase() == "!ony-a") {
    message.channel.send("<:ony:733931792297492490>\
  " + "**Alliance Onyxia Head**\
  " + "\n**On:** $Layer\
  " + "\n**At:** $Time\
  " + "\n**By:** $Buffer");
  }
  if(message.content.toLowerCase() == "!nef-a") {
    message.channel.send("<:nef:733931791538192415>\
  " + "**Alliance Nefarian Head**\
  " + "\n**On:** $Layer\
  " + "\n**At:** $Time\
  " + "\n**By:** $Buffer");
  }
  if(message.content.toLowerCase() == "!sf-a") {
    message.channel.send("<:songflower:733931791643181137>\
  " + "**Alliance Song Flower**\
  " + "\n**On:** $Layer\
  " + "\n**At:** $Time\
  " + "\n**Cost:** $Cost\
  " + "\n**By:** $Buffer");
  }
  if(message.content.toLowerCase() == "!wcb-a") {
    message.channel.send("<:wcb:733931791567683614>\
  " + "**Warcheifs Blessing**\
  " + "\n**On:** $Layer\
  " + "\n**At:** $Time\
  " + "\n**Cost:** $Cost\
  " + "\n**By:** $Buffer");
  }
  if(message.content.toLowerCase() == "!dmt-summon-a") {
    message.channel.send("<:dmt:733931789243908136>\
  " + "**Alliance Dire Maul Tribute**\
  " + "\n**On:** $Layer\
  " + "\n**By:** $Buffer");
  }
  if(message.content.toLowerCase() == "!dmf-summon-a") {
    message.channel.send("<:dmf:733931791798370335>\
  " + "**Alliance Darkmoon Faire**\
  " + "\n**On:** $Layer\
  " + "\n**By:** $Buffer");
  }
  if(message.content.toLowerCase() == "!bb-summon-a") {
    message.channel.send("<:zg:733931791802564628>\
  " + "**Alliance Booty Bay Summon**\
  " + "\n**On:** $Layer\
  " + "\n**By:** $Buffer");
  }
  if(message.content.toLowerCase() == "!sf-summon-a") {
    message.channel.send("<:songflower:733931791643181137>\
  " + "**Alliance Songflower Summon**\
  " + "\n**On:** $Layer\
  " + "\n**At:** $Time\
  " + "\n**Cost:** $Cost\
  " + "\n**By:** $Buffer");
  }
  if(message.content.toLowerCase() == "!layer-a") {
    message.channel.send("<:vanish:734106867227164702>\
  " + "**Alliance Layering**\
  " + "\n**On:** $Layer\
  " + "\n**By:** $Buffer");
  }
  if(message.content.toLowerCase() == "!port-a") {
    message.channel.send("<:orgport:734106867160055843>\
  " + "**Alliance Ports**\
  " + "\n**On:** $Layer\
  " + "\n**Cost:** $Cost\
  " + "\n**By:** $Buffer");
  }
  if(message.content.toLowerCase() == "!alliance-all") {
    message.channel.send("<:dmt:733931789243908136>\
  " + "**All Upcoming Alliance Buffs**\
  " + "\n<:ony:733931792297492490> $ONY-A\
  " + "\n<:nef:733931791538192415> $NEF-A\
  " + "\n<:songflower:733931791643181137> $SF-A\
  " + "\n<:wcb:733931791567683614> $WCB-A\
  " + "\n<:dmt:733931789243908136> $DMT-SUMMON-A\
  " + "\n<:dmf:733931791798370335> $DMF-SUMMON\
  " + "\n<:zg:733931791802564628> $BB-SUMMON-A\
  " + "\n<:songflower:733931791643181137> $SF-SUMMON-A\
  " + "\n<:vanish:734106867227164702> $LAYER-A\
  " + "\n<:orgport:734106867160055843> $PORT-A\
  " + "\n<:zg:733931791802564628> $ZG");
  }

//Horde
  if(message.content.toLowerCase() == "!ony-h") {
    message.channel.send("<:ony:733931792297492490>\
  " + "**Horde Onyxia Head**\
  " + "\n**On:** $Layer\
  " + "\n**At:** $Time\
  " + "\n**By:** $Buffer");
  }
  if(message.content.toLowerCase() == "!nef-h") {
    message.channel.send("<:nef:733931791538192415>\
  " + "**Horde Nefarian Head**\
  " + "\n**On:** $Layer\
  " + "\n**At:** $Time\
  " + "\n**By:** $Buffer");
  }
  if(message.content.toLowerCase() == "!sf-h") {
    message.channel.send("<:songflower:733931791643181137>\
  " + "**Horde Song Flower**\
  " + "\n**On:** $Layer\
  " + "\n**At:** $Time\
  " + "\n**Cost:** $Cost\
  " + "\n**By:** $Buffer");
  }
  if(message.content.toLowerCase() == "!wcb") {
    message.channel.send("<:wcb:733931791567683614>\
  " + "**Warcheifs Blessing**\
  " + "\n**On:** $Layer\
  " + "\n**At:** $Time\
  " + "\n**Cost:** $Cost\
  " +"\n**By:** $Buffer");
  }
  if(message.content.toLowerCase() == "!dmt-summon-h") {
    message.channel.send("<:dmt:733931789243908136>\
  " + "**Horde Dire Maul Tribute**\
  " + "\n**On:** $Layer\
  " + "\n**By:** $Buffer");
  }
  if(message.content.toLowerCase() == "!dmf-summon-h") {
    message.channel.send("<:dmf:733931791798370335>\
  " + "**Horde Darkmoon Faire**\
  " + "\n**On:** $Layer\
  " + "\n**By:** $Buffer");
  }
  if(message.content.toLowerCase() == "!bb-summon-h") {
    message.channel.send("<:zg:733931791802564628>\
  " + "**Horde Booty Bay Summon**\
  " + "\n**On:** $Layer\
  " + "\n**By:** $Buffer");
  }
  if(message.content.toLowerCase() == "!sf-summon-h") {
    message.channel.send("<:songflower:733931791643181137>\
  " + "**Horde Songflower Summon**\
  " + "\n**On:** $Layer\
  " + "\n**At:** $Time\
  " + "\n**By:** $Buffer");
  }
  if(message.content.toLowerCase() == "!layer-h") {
    message.channel.send("<:vanish:734106867227164702>\
  " + "**Horde Layering**\
  " + "\n**On:** $Layer\
  " + "\n**By:** $Buffer");
  }
  if(message.content.toLowerCase() == "!port-h") {
    message.channel.send("<:orgport:734106867160055843>\
  " + "**Horde Ports**\
  " + "\n**On:** $Layer\
  " + "\n**Cost:** $Cost\
  " + "\n**By:** $Buffer");
  }
  if(message.content.toLowerCase() == "!horde-all") {
    message.channel.send("<:dmt:733931789243908136>\
  " + "**All Upcoming Horde Buffs**\
  " + "\n<:ony:733931792297492490> $ONY-H\
  " + "\n<:nef:733931791538192415> $NEF-H\
  " + "\n<:songflower:733931791643181137> $SF-H\
  " + "\n<:wcb:733931791567683614> $WCB-H\
  " + "\n<:dmt:733931789243908136> $DMT-SUMMON-H\
  " + "\n<:dmf:733931791798370335> $DMF-SUMMON\
  " + "\n<:zg:733931791802564628> $BB-SUMMON-H\
  " + "\n<:songflower:733931791643181137> $SF-SUMMON-H\
  " + "\n<:vanish:734106867227164702> $LAYER-H\
  " + "\n<:orgport:734106867160055843> $PORT-H\
  " + "\n<:zg:733931791802564628> $ZG");
  }

if (message.content.startsWith ("!add")) {
	editedmessage = message.content.slice (5);
	client.msgs ["buff alert"] = {
		buff : editedmessage,
		layer : editedmessage,
		time : editedmessage,
		cost : editedmessage,
		date : (new Date()).toLocaleDateString(),
		by : "@" + message.author.username
	}
	fs.appendFile ("./persistance/buffs.json", JSON.stringify (client.msgs, null, 4), err => {
		if (err) throw err;
		message.channel.send(`\nBuff **$Buff** added\n$Layer\n$Time\n$Cost\nBy: ${message.author}`);
		console.log('Buff Added!');
	});
}

if (message.content.startsWith ("!get")) {
		let _message = client.msgs[message.author.username].message;
		message.channel.send ("Buff @ : " + _message);
	}

//End Main
});

//Log in and start
client.login(token);

//Print to console on start
client.once('ready', () => {
	client.user.setPresence({ activity: { name: '!buffhelp' }, status: 'online' })
	console.log('Watching for buff alerts!');
});