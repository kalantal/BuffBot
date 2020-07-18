//BuffBot
//Kalantal
//Herod

//Basic configr**At:**ion
const Discord = require('discord.js');
const client = new Discord.Client();

//
//Command List/Help
//

client.on("message", (message) => {
  if(message.content === "!BUFFHELP") {
    message.channel.send("\n **See upcoming buffs:** \n !ALLIANCE-ALL, !HORDE-ALL \n !ZG \n !ONY-A, !ONY-H \n !SF-A, !SF-H \n NEF-A, !NEF-H \n !WCB \n !SUMMON-A, !SUMMON-H \n !DMF-SUMMON-A, !DMF-SUMMON-H \n PORT-A, PORT-H \n LAYER-A, LAYER-H \n \n **Add upcoming buffs:** \n !ADD BUFF LAYER TIME");
  }
});

//
//Add Buff
//

client.on("message", (message) => {
  if(message.content === "!ADD $Buff $Layer $Time $Cost") {
    message.channel.send("Buff **$Buff** added\n$Layer\n$Time\n$Cost");
  }
});

//
//Mutual
//

client.on("message", (message) => {
  if(message.content === "!ZG") {
    message.channel.send("<:zg:733931791802564628> " + "**Heart of Hakkar**" + " <:zg:733931791802564628> " + "\n**On:** $Layer" + "\n**At:** $Time" + "\n**By:** $Buffer\n");
  }
});

//
//Alliance
//

client.on("message", (message) => {
  if(message.content === "!ONY-A") {
    message.channel.send("<:ony:733931792297492490> " + "**Alliance Onyxia Head**" + " <:ony:733931792297492490>" + "\n**On:** $Layer" + "\n**At:** $Time" + "\n**By:** $Buffer");
  }
  if(message.content === "!NEF-A") {
    message.channel.send("<:nef:733931791538192415> " + "**Alliance Nefarian Head**" + " <:nef:733931791538192415>" + "\n**On:** $Layer" + "\n**At:** $Time" + "\n**By:** $Buffer");
  }
  if(message.content === "!SF-A") {
    message.channel.send("<:songflower:733931791643181137> " + "**Alliance Song Flower**" + " <:songflower:733931791643181137>" + "\n**On:** $Layer" + "\n**At:** $Time" + "\n**Cost:** $Cost" + "\n**By:** $Buffer");
  }
  if(message.content === "!WCB-A") {
    message.channel.send("<:wcb:733931791567683614> " + "**Warcheifs Blessing**" + " <:wcb:733931791567683614>" + "\n**On:** $Layer" + "\n**At:** $Time" + "\n**Cost:** $Cost" + "\n**By:** $Buffer");
  }
  if(message.content === "!DMT-SUMMON-A") {
    message.channel.send("<:dmt:733931789243908136> " + "**Alliance Dire Maul Tribute**" + " <:dmt:733931789243908136>" + "\n**On:** $Layer" + "\n**By:** $Buffer");
  }
  if(message.content === "!DMF-SUMMON-A") {
    message.channel.send("<:dmf:733931791798370335> " + "**Alliance Darkmoon Faire**" + " <:dmf:733931791798370335>" + "\n**On:** $Layer" + "\n**By:** $Buffer");
  }
  if(message.content === "!BB-SUMMON-A") {
    message.channel.send("<:zg:733931791802564628> " + "**Alliance Booty Bay Summon**" + " <:zg:733931791802564628>" + "\n**On:** $Layer" + "\n**By:** $Buffer");
  }
  if(message.content === "!SF-SUMMON-A") {
    message.channel.send("<:songflower:733931791643181137> " + "**Alliance Songflower Summon**" + " <:songflower:733931791643181137>" + "\n**On:** $Layer" + "\n**At:** $Time"+ "\n**Cost:** $Cost" + "\n**By:** $Buffer");
  }
  if(message.content === "!LAYER-A") {
    message.channel.send("<:vanish:734106867227164702> " + "**Alliance Layering**" + " <:vanish:734106867227164702>" + "\n**On:** $Layer" + "\n**By:** $Buffer");
  }
  if(message.content === "!PORT-A") {
    message.channel.send("<:orgport:734106867160055843> " + "**Alliance Ports**" + " <:orgport:734106867160055843>" + "\n**On:** $Layer"+ "\n**Cost:** $Cost" + "\n**By:** $Buffer");
  }
  if(message.content === "!ALLIANCE-ALL") {
    message.channel.send("<:dmt:733931789243908136> " + "**All Upcoming Alliance Buffs**" + " <:dmt:733931789243908136>" + "\n$ONY-A" + "\n$NEF-A" + "\n$SF-A" + "\n$WCB-A" + "\n$DMT-SUMMON-A" + "\n$BB-SUMMON-A" + "\n$SF-SUMMON-A" + "\n$LAYER-A" + "\n$PORT-A" + "\n$ZG");
  }
});

//
//Horde
//

client.on("message", (message) => {
  if(message.content === "!ONY-H") {
    message.channel.send("<:ony:733931792297492490> " + "**Horde Onyxia Head**" + " <:ony:733931792297492490>" + "\n**On:** $Layer" + "\n**At:** $Time" + "\n**By:** $Buffer");
  }
  if(message.content === "!NEF-H") {
    message.channel.send("<:nef:733931791538192415> " + "**Horde Nefarian Head**" + " <:nef:733931791538192415>" + "\n**On:** $Layer" + "\n**At:** $Time" + "\n**By:** $Buffer");
  }
  if(message.content === "!SF-H") {
    message.channel.send("<:songflower:733931791643181137> " + "**Horde Song Flower**" + " <:songflower:733931791643181137>" + "\n**On:** $Layer" + "\n**At:** $Time" + "\n**Cost:** $Cost" + "\n**By:** $Buffer");
  }
  if(message.content === "!WCB") {
    message.channel.send("<:wcb:733931791567683614> " + "**Warcheifs Blessing**" + " <:wcb:733931791567683614>" + "\n**On:** $Layer" + "\n**At:** $Time" + "\n**Cost:** $Cost" +"\n**By:** $Buffer");
  }
  if(message.content === "!DMT-SUMMON-H") {
    message.channel.send("<:dmt:733931789243908136> " + "**Horde Dire Maul Tribute**" + " <:dmt:733931789243908136>" + "\n**On:** $Layer" + "\n**By:** $Buffer");
  }
  if(message.content === "!DMF-SUMMON-H") {
    message.channel.send("<:dmf:733931791798370335> " + "**Horde Darkmoon Faire**" + " <:dmf:733931791798370335>" + "\n**On:** $Layer" + "\n**By:** $Buffer");
  }
  if(message.content === "!BB-SUMMON-H") {
    message.channel.send("<:zg:733931791802564628> " + "**Horde Booty Bay Summon**" + " <:zg:733931791802564628>" + "\n**On:** $Layer" + "\n**By:** $Buffer");
  }
  if(message.content === "!SF-SUMMON-H") {
    message.channel.send("<:songflower:733931791643181137> " + "**Horde Songflower Summon**" + " <:songflower:733931791643181137>" + "\n**On:** $Layer" + "\n**At:** $Time" + "\n**By:** $Buffer");
  }
  if(message.content === "!LAYER-H") {
    message.channel.send("<:vanish:734106867227164702> " + "**Horde Layering**" + " <:vanish:734106867227164702>" + "\n**On:** $Layer" + "\n**By:** $Buffer");
  }
  if(message.content === "!PORT-H") {
    message.channel.send("<:orgport:734106867160055843> " + "**Horde Ports**" + " <:orgport:734106867160055843>" + "\n**On:** $Layer"+ "\n**Cost:** $Cost" + "\n**By:** $Buffer");
  }
  if(message.content === "!HORDE-ALL") {
    message.channel.send("<:dmt:733931789243908136> " + "**All Upcoming Horde Buffs**" + " <:dmt:733931789243908136>" + "\n$ONY-H" + "\n$NEF-H" + "\n$SF-H" + "\n$WCB-H" + "\n$DMT-SUMMON-H" + "\n$BB-SUMMON-H" + "\n$SF-SUMMON-H" + "\n$LAYER-H" + "\n$PORT-H" + "\n$ZG");
  }
});

//Log in and start
client.login('');

//Print to console on start
client.once('ready', () => {
	console.log('Watching for buff alerts!');
});
