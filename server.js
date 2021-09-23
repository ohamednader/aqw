const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://aquabot2.glitch.me/`);
}, 280000);
 
// كل البكجات الي ممكن تحتجها في اي بوت
const { Client, RichEmbed } = require("discord.js");
var { Util } = require('discord.js');
const {TOKEN, YT_API_KEY, prefix, devs} = require('./config')
const client = new Client({ disableEveryone: false})
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const botversion = require('./package.json').version;
const simpleytapi = require('simple-youtube-api')
const moment = require("moment");
const fs = require('fs');
const util = require("util")
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require('snekfetch');
const guild = require('guild');
const dateFormat = require('dateformat');//npm i dateformat
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const pretty = require("pretty-ms");
client.login(TOKEN);
const queue = new Map();
var table = require('table').table
const Discord = require('discord.js');
 
 



client.on("message", message => {
    if (message.content.startsWith("#obc")) {
                 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' ');
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
  m.send(`${argresult}\n ${m}`);
  })
  message.channel.send(`\`${message.guild.members.filter( m => m.presence.status !== 'all').size}\`** The Message Has Been Sent To** `);
  message.delete();
  };
  });


//bc online


  

  client.on("message", message => {
  
              if (message.content.startsWith(prefix + "bc")) {
                           if (!message.member.hasPermission("ADMINISTRATOR"))  return;
    let args = message.content.split(" ").slice(1);
    var argresult = args.join(' '); 
    message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
   m.send(`${argresult}\n ${m}`);
  })
   message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` **The Message Has Been Sent To** `); 
   message.delete(); 
  };     
  });



client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on("ready", () => {
  client.user.setStatus("online");
});
client.on("ready", () => {
  client.user.setActivity(`${prefix}help | ${prefix}invite`, { type: "PLAYING" });
});

 
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on("ready", () => {
  client.user.setStatus("online");
});
client.on('ready', () => {
    client.user.setActivity(`Type ${prefix}help`,{ type: 'PLAYING' });
})


client.on("message", message => {
  if (message.content === prefix + "invite") {
    const bot = new Discord.RichEmbed()
      .setAuthor(client.user.username, client.user.avatarURL)
      .setColor("BLACK")
.setTitle("Add The Bot Now!")
          .setThumbnail("http://i8.ae/fLMtS")
	.setDescription('Click Here And Add The Bot To Your Server Now!')
    .setURL('https://discord.com/api/oauth2/authorize?client_id=700716066736701488&permissions=8&scope=bot')
    .setFooter(message.author.username, message.client.avatarURL)
      .setTimestamp();
    message.channel.send(bot);
  }
});


client.on("message", message => {
    if(message.content.startsWith(prefix + "server")){
        if(message.author.bot || message.channel.type == "dm") return;
        let onlineM = message.guild.members.filter(m => m.presence.status !== "offline");
        let verifyL = ["None", "Low", "Medium", "Hard", "Extreme"];
        let region = {
            'brazil': "`Brazil`",
            'eu-central': "`Central Europe`",
            'singapore': "`Singapore`",
            'us-central': "`US Central`",
            'sydney': "`Sydney`",
            'us-east': "`US East`",
            'us-south': "`US South`",
            'us-west': "`US West`",
            'eu-west': "`Western Europe`",
            'london': "`London`",
            'amsterdam': "`Amsterdam`",
            'hongkong': "`Hong Kong`",
            'russia': "`Russia`"//
        };
        let serverEmbed = new Discord.RichEmbed()
        .setColor("#36393e")
        .setThumbnail(message.guild.iconURL)
        .setAuthor(`${message.guild.name}, Server Info`)
        .setDescription(`- Server Name \`${message.guild.name}\`\n- Created At \`${moment(message.guild.createdAt).format('D/MM/YYYY h:mm a')}\`\n- Total Members \`${message.guild.memberCount} [Online: ${onlineM.size}]\`\n- Server Owner \`${message.guild.owner.user.tag}\`\n- Channels \`${message.guild.channels.filter(m => m.type == 'text').size} Text || ${message.guild.channels.filter(m => m.type == 'voice').size} Voice\`\n- Categories \`${message.guild.channels.filter(m => m.type == 'category').size}\`\n- Roles \`${message.guild.roles.size}\`\n- Region \`${region[message.guild.region]}\`\n- Verification Level \`${verifyL[message.guild.verificationLevel]}\`\n- Server ID \`${message.guild.id}\``)
        .setFooter(message.client.user.username,message.client.user.avatarURL);
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`:no_entry: You dont have permission!`).then(mm => mm.delete(5000));  message.channel.send(serverEmbed).catch(console.error);
    } else if(message.content.startsWith(prefix + "user")){
        if(message.author.bot || message.channel.type == "dm") return;
        let mnt = message.mentions.users.first();
        let user = mnt || message.author;
        let userEmbed = new Discord.RichEmbed()
        .setColor("#36393e")
        .setThumbnail(user.avatarURL)
        .setAuthor(`${user.username}, User Info`)
        .setDescription(`- Name \`${user.tag}\`\n- Created At \`${moment(user.createdAt).format('D/MM/YYYY h:mm a')}\`\n- Joined At \`${moment(user.joinedAt).format('D/MM/YYYY h:mm a')}\`\n- ID \`${user.id}\``)
        .setFooter(message.client.user.username,message.client.user.avatarURL);
        message.channel.send(userEmbed).catch(console.error);
       
    }
});


client.on("message", message => {
  if (message.content === prefix + "botinfo") {
    const bot = new Discord.RichEmbed()
      .setAuthor(client.user.username, client.user.avatarURL)
      .setColor("BLACK")
      .addField("**Servers** :  ", `✽ ${client.guilds.size}`, true)
      .addField("**Channels** : ", `✽ ${client.channels.size} `, true)
      .addField("**Users** : ", `✽ ${client.users.size} `, true)
      .setImage("")
      .setFooter(message.author.username, message.client.avatarURL)
      .setTimestamp();
    message.channel.send(bot);
  }
});

client.on("message", message => {
  if (message.content === prefix + "help") {
    const bot = new Discord.RichEmbed()
      .setThumbnail("http://i8.ae/fLMtS")
      .setTitle("Our Info About Bot:")
      .addField("**Prefix**:", `{ ${prefix} }`, true)
    .addField("**Need Help?**:", `${prefix}help `, true)
      .addField("**General Commands**: ",`${prefix}botinfo,${prefix}invite,${prefix}link,${prefix}server,${prefix}avatar,${prefix}avatar server,${prefix}bans,${prefix}botinvite,${prefix}topservers,${prefix}invites or @user,${prefix}topinv,${prefix}roleslist,${prefix}members,${prefix}short,${prefix}gif,${prefix}banner`)
      .addField("**Admin Commands**: ",`${prefix}show,${prefix}hide,${prefix}close,${prefix}open,${prefix}clear,${prefix}kick,${prefix}ban,${prefix}unban,${prefix}setnick,${prefix}vmute,${prefix}unvmute`)
    .addField("**Welcome Commands**:", `Please create room with name **welcome** and it will active that's temp welcome bro!`)
 ///.addField("**Protection Commands**: ", `${prefix}setlog,${prefix}togglelog,${prefix}limitbans,${prefix}limitkicks,${prefix}limitroledelete,${prefix}limitrolecreate,${prefix}limitchanneldelete,${prefix}limittime,${prefix}antibots on-off`)
    .addField("**Role Commands**: ", `${prefix}roleadd all/humans/bots Role,${prefix}roleremove all/humans/bots Role,${prefix}roleadd @User Role,${prefix}roleremove @User Role`)
  //.addField("**Music Commands**: " , `${prefix}play,${prefix}stop,${prefix}skip,${prefix}pause,${prefix}resume,${prefix}forceskip,${prefix}queue,${prefix}skipto,${prefix}vol,${prefix}np,${prefix}repeat on-off,${prefix}join`)
    .addField("**Credits Commands**: ", `${prefix}credits,${prefix}daily,`)
  .addField("**LOG Commands:**:", `Please create room with name log and it will active the LOG bro!`)
    message.channel.send(bot);
  }
});



client.on("message", message => {
  var prefix = "$";
  if (message.author.kick) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
    if (!message.channel.guild) return;

    if (!message.guild.member(message.author).hasPermission("KICK_MEMBERS"))
      return message
        .reply("**You Don't Have KICK_MEMBERS Perms**.")
        .then(msg => msg.delete(5000));
    if (!message.guild.member(client.user).hasPermission("KICK_MEMBERS"))
      return message.reply("**I Don't Have Permission^^**.");
    let user = message.mentions.users.first();
    let reason = message.content
      .split(" ")
      .slice(2)
      .join(" ");

    if (message.mentions.users.size < 1)
      return message.reply(
        ":information_source:**| Usage : $kick @user**"
      );
    if (!reason) return message.reply("**Type The Reason Please**");
    if (!message.guild.member(user).bannable)
      return message.reply(
        "**I Cant Kick Person Have a Role Higher Than Me :$**"
      );

    message.guild.member(user).kick(7, user);
    message.channel.send(`**${user} Has Been Kicked**`);
    user.send(
      `**You Are Has Been Kicked In ${message.guild.name} reason: ${reason}**`
    );
    message.delete();
  }
});

client.on("message", message => {
  if (message.content.startsWith("$link")) {
    message.channel
      .createInvite({
        thing: true,
        maxUses: 5,
        maxAge: 86400
      })
      .then(invite => message.author.send(invite.url));
    const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(
        "**Done Check Your DM | if it not sent to u please open your dm and tryagain**"
      )
      .setAuthor(client.user.username, client.user.avatarURL)
      .setAuthor(client.user.username, client.user.avatarURL)
      .setFooter("Request by : " + message.author.tag);

    message.channel.sendEmbed(embed).then(message => {
      message.delete(10000);
    });
    const Embed11 = new Discord.RichEmbed().setColor("RANDOM")
      .setDescription(`** مدة الرابط : يوم 
 عدد استخدامات الرابط : 5 **`);

    message.author.sendEmbed(Embed11);
  }
});

client.on("message", message => {
  if (message.content === prefix + "close") {
    if (!message.channel.guild) return message.reply("Error");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply("**You Don't Have __MANAGE MESSAGES__ Perms**");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
      })
      .then(() => {
        message.reply("**Done Closed.**");
      });
  }
  if (message.content === prefix + "open") {
    if (!message.channel.guild) return message.reply("Error");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply("**You Don't Have __MANAGE MESSAGES__ Perms**");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: true
      })
      .then(() => {
        message.reply("**Done Opened.**");
      });
  }
});

client.on("message", message => {
  if (message.content === prefix + "hide") {
    if (!message.channel.guild) return message.reply("Error");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply("**You Don't Have __MANAGE MESSAGES__ Perms**");
    message.channel
      .overwritePermissions(message.guild.id, {
        READ_MESSAGES: false
      })
      .then(() => {
        message.reply("**Done.**");
      });
  }
  if (message.content === prefix + "show") {
    if (!message.channel.guild) return message.reply("Error");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply("**You Don't Have __MANAGE MESSAGES__ Perms**");
    message.channel
      .overwritePermissions(message.guild.id, {
        READ_MESSAGES: true
      })
      .then(() => {
        message.reply("**Done.**");
      });
  }
});

client.on("message", msg => {
  if (msg.content.startsWith(prefix + "server")) {
    let embed = new Discord.RichEmbed()
      .setColor("Random")
      .setTitle(`**__${msg.guild.name}__**`)
      .setThumbnail(`${msg.guild.iconURL}`)
      .addField(
        "<:Information:713589065055731753> ``Server ID:``",
        `** __${msg.guild.id}__ **`,
        true
      )
      .addField(
        "<:Prize:697908230013190218> ``Created At:``",
        `** __${msg.guild.createdAt}__ **`,
        true
      )
      .addField(
        "<:Verfied:697906961957519511> ``Members:``",
        `** __${msg.guild.memberCount}__ **`,
        true
      )
      .addField(
        "<:Online:697906960280059936> ``Online Members:``",
        `** __${
          msg.guild.members.filter(m => m.presence.status == "online").size
        }__ **`,
        true
      )
      .addField(
        "<:Offline:697906961542414396> ``Offline Members:``",
        `** __${
          msg.guild.members.filter(m => m.presence.status == "offline").size
        }__ **`,
        true
      )
      .addField(
        "<:Idle:697906961005543496> ``Idle Members:``",
        `** __${
          msg.guild.members.filter(m => m.presence.status == "idle").size
        }__ **`,
        true
      )
      .addField(
        "<:DND:697906961076977775> ``DND Members:``",
        `** __${
          msg.guild.members.filter(m => m.presence.status == "dnd").size
        }__ **`,
        true
      )
      .addField(
        "<:HASHTAG:697908228671012966> ``Text Rooms:``",
        `** __${msg.guild.channels.filter(m => m.type === "text").size}__ **`,
        true
      )
      .addField(
        "<:696782596448714783:714930518877274145> ``Voice Rooms:``",
        `** __${msg.guild.channels.filter(m => m.type === "voice").size}__ **`,
        true
      ) ///////////خليها بدل فويس رومس فويس تشانلس
      .addField(
        "<:Settings:697906962653904926> ``Roles:``",
        `** __${msg.guild.roles.size}__ ** To see the **Roles** type : ${prefix}roleslist`,
        true
      )
      .addField(
        "<:Owner:697906962842648596> ``Owned By:``",
        `** __${msg.guild.owner}__ **`,
        true
      )
      .setFooter(msg.author.username, msg.author.avatarURL)
      .setTimestamp();
    msg.channel.send({ embed: embed });
  }
});

client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  if (message.content.startsWith(prefix + "avatar")) {
    const mention = message.mentions.users.first();

    if (!mention) return console.log("");
    let embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setAuthor(
        `${mention.username}#${mention.discriminator}`,
        `${mention.avatarURL}`
      )
      .setTitle("AquaBot")
      .setURL(`${mention.avatarURL}`)
      .setImage(`${mention.avatarURL}`)
      .setFooter(
        `Requested By ${message.author.tag}`,
        `${message.author.avatarURL}`
      );
    message.channel.send(embed);
  }
});

client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  if (message.content.startsWith(prefix + "avatar server")) {
    let doma = new Discord.RichEmbed()
      .setColor("BLACK")
      .setAuthor(message.guild.name, message.guild.iconURL)
      .setTitle("AquaBot")
      .setURL(message.guild.iconURL)
      .setImage(message.guild.iconURL)
      .setFooter(
        `Requested By ${message.author.tag}`,
        message.author.avatarURL
      );
    message.channel.send(doma);
  } else if (message.content.startsWith(prefix + "avatar")) {
    let args = message.content.split(" ")[1];
    var avt = args || message.author.id;
    client.fetchUser(avt).then(user => {
      avt = user;
      let embed = new Discord.RichEmbed()
        .setColor("BLACK")
        .setAuthor(`${avt.tag}`, avt.avatarURL)
        .setTitle("Avatar Link")
        .setURL(avt.avatarURL)
        .setImage(avt.avatarURL)
        .setFooter(
          `Requested By ${message.author.tag}`,
          message.author.avatarURL
        );
      message.channel.send(embed);
    });
  }
});

client.on("message", function(message) {
  if (!message.channel.guild) return;
  if (message.author.bot) return;
  if (message.author.id === client.user.id) return;
  if (message.author.equals(client.user)) return;
  if (!message.content.startsWith(prefix)) return;

  var args = message.content.substring(prefix.length).split(" ");
  switch (args[0].toLocaleLowerCase()) {
    case "clear":
      message.delete();
      if (!message.channel.guild) return;
      if (message.member.hasPermission(0x2000)) {
        if (!args[1]) {
          message.channel.fetchMessages().then(messages => {
            message.channel.bulkDelete(messages);
            var messagesDeleted = messages.array().length;
            message.channel
              .send(
                " " +
                  "**```fix\n" +
                  messagesDeleted +
                  " " +
                  ": Done Cleared" +
                  "```**"
              )
              .then(m => m.delete(5000));
          });
        } else {
          let messagecount = parseInt(args[1]);
          message.channel
            .fetchMessages({ limit: messagecount })
            .then(messages => message.channel.bulkDelete(messages));
          message.channel
            .send(
              " " + "**```fix\n" + args[1] + " " + ": Done Cleared" + "```**"
            )
            .then(m => m.delete(5000));
          message.delete(60000);
        }
      } else {
        var manage = new Discord.RichEmbed()
          .setDescription("**You Do Not Have Permission MANAGE_MESSAGES!**")
          .setColor("RANDOM");
        message.channel.sendEmbed(manage);
        return;
      }
  }
});

client.on("message", message => {
  var prefix = "$";
  if (message.author.ali) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
    if (!message.channel.guild)
      return message.reply("** This Command Only For Servers**");

    if (!message.guild.member(message.author).hasPermission("BAN_MEMBERS"))
      return message.reply("**You Don't Have BAN_MEMBERS Permission**");
    if (!message.guild.member(client.user).hasPermission("BAN_MEMBERS"))
      return message.reply("**I Don't Have BAN_MEMBERS Permission**");
    let user = message.mentions.users.first();
    let reason = message.content
      .split(" ")
      .slice(2)
      .join(" ");

    if (message.mentions.users.size < 1)
      return message.reply("**Mention User **");
    if (!reason) return message.reply("**Type Reason **");
    if (!message.guild.member(user).bannable)
      return message.reply(
        "**My role is low give me a higher role to ban this user**"
      );

    message.guild.member(user).ban(7, user);

    message.channel.send(`**${user.username} Banned!**`);
  }
});

client.on("message", message => {
  var command = message.content.toLowerCase().split(" ")[0];
  var args = message.content.toLowerCase().split(" ");
  var user = message.mentions.users.first();
  if (command == prefix + "unban") {
    if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.channel.send("**You Don't Have Permission!**");
    if (!message.guild.member(client.user).hasPermission("BAN_MEMBERS"))
      return message.reply("**I Don't Have Permission ^^.**");
    if (!args[1]) return message.channel.send("**Mention User Or Type ID!**");
    if (args[1].length < 16)
      return message.reply("** This ID Is Not Id User.**");
    message.guild.fetchBans().then(bans => {
      var Found = bans.find(m => m.id === args[1]);
      if (!Found)
        return message.channel.send(
          `**I Can't Find <@${args[1]}> In The Ban List!**`
        );
      message.guild.unban(args[1]);
      message.channel.send(`**<@${args[1]}> Unbanned!**`);
    });
  }
});

client.on("message", message => {
  if (message.content.startsWith("$bans")) {
    message.guild
      .fetchBans()
      .then(bans => message.channel.send(`**__${bans.size}__ Bans**`))
      .catch(console.error);
  }
});


const invites = {};
client.on("guildMemberAdd", member => {
  member.guild.fetchInvites().then(guildInvites => {
    const gamer = invites[member.guild.id];
    invites[member.guild.id] = guildInvites;
    const invite = guildInvites.find(i => gamer.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const welcome = member.guild.channels.find(
      channel => channel.name === "welcome"
    );

    welcome.send(
      ` <@${member.id}> **invited by** <@${inviter.id}> , **Total Invites** ${invite.uses}`
    );
  });
});

client.on("message", message =>{
  if(message.content.startsWith(prefix + 'topservers')){ // الامر (topserver)
    let count = message.content.split(" ")[1];
    const top = client.guilds.sort((a,b)=>a.memberCount-b.memberCount).array().reverse()
    if(!count) count = 10;
    if(isNaN(count)) count = 10;
    if(count <= 0) count = 10;
    if(count > top.length) count = top.length;
    let embed = new Discord.RichEmbed();
    for(let i = 0; i < count; i++){
    embed.addField(`**${top[i].name}** : ${top[i].memberCount}`," ‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎ ‎");
    }
    embed.setTitle(`**Top ${count} Servers**`);
    embed.setThumbnail(message.author.displayAvatarURL);
    embed.setTimestamp();
    embed.setFooter(client.user.username,client.user.displayAvatarURL);
    message.channel.send(embed);
  }});


client.on('message', msg => {
    if(msg.content.startsWith('$botinvite')) {
    if(msg.channel.type === 'dm') return;
const user = msg.mentions.users.first();
if(!user) return msg.channel.send('**Mention The Bot Please!**')
if(!user.bot) return msg.reply('**Mention The Bot Please!**');
msg.channel.send(`**:link: | Link: **https://discordapp.com/oauth2/authorize?client_id=${user.id}&scope=bot&permissions=384064`)
    }
});

client.on("message", message => {
	var args = message.content.split(' ').slice(1); 
	var msg = message.content.toLowerCase();
	if( !message.guild ) return;
	if( !msg.startsWith( '-' + 'role' ) ) return;
	if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('**You don`t have __MANAGE_ROLES__ Perms**!');
if( msg.toLowerCase().startsWith( prefix + 'roleremove' ) ){
  if( !args[0] ) return message.reply(`**I can't find this member!**`);
		if( !args[1] ) return message.reply(`**please type the role name!**`);
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply(`**please type the role name!**`);if( message.mentions.members.first() ){
			message.mentions.members.first().removeRole( role1 );
			return message.reply(`**Done removed the role him!**`);
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.removeRole( role1 ))
			return	message.reply('**Done removed from all - [ '+role1.name+' ]**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**Done removed from all bots the role - [ '+role1.name+' ]**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**Done removed from all humans the role - [ '+role1.name+' ]**');
		} 	
	} else {
		if( !args[0] ) return message.reply( '**Please mention or type all/bots/humans!**' );
		if( !args[1] ) return message.reply( '**Please type the role name!**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**Please type the role name!**' );if( message.mentions.members.first() ){
			message.mentions.members.first().addRole( role1 );
			return message.reply('**Done added role [ '+role1.name+' ]**');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.addRole( role1 ))
			return	message.reply('**Done added the role for all - [ '+role1.name+' ]**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**Done added the role for bots - [ '+role1.name+' ]**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**Done added the role for humans - [ '+role1.name+' ]**');
		} 
	} 
});


client.on("message", message => {
if(message.content.startsWith(prefix + "setnick")){
if(message.author.bot || message.channel.type == "dm" || !message.member.hasPermission("MANAGE_NICKNAMES") || !message.guild.member(client.user).hasPermission("MANAGE_NICKNAMES")) return;
var user = message.mentions.members.first();
var args = message.content.split(" ").slice(2);
var nick = args.join(" ");
if(!user || !args) return message.channel.send(`**Example: ${prefix}setnick @User nickname**`);
message.guild.member(user.user).setNickname(`${nick}`);
message.channel.send(`**Successfully changed ${user} nickname to ${nick}**`);
}
});

client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='G.count')
     
      message.reply(`**${message.guild.memberCount}**`);
    });
    client.on('message', message => {
   if(message.content.startsWith(prefix + "invites")) {
    message.guild.fetchInvites().then(invs => {
      let user = message.mentions.users.first() || message.author
      let personalInvites = invs.filter(i => i.inviter.id === user.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
message.channel.send(`${user} has ${inviteCount} invites.`);
});
  }
});
 
client.on('message',message =>{
    if(message.content.startsWith(prefix + 'topinv')) {
  message.guild.fetchInvites().then(i =>{
  var invites = [];
   
  i.forEach(inv =>{
    var [invs,i]=[{},null];
     
    if(inv.maxUses){
        invs[inv.code] =+ inv.uses+"/"+inv.maxUses;
    }else{
        invs[inv.code] =+ inv.uses;
    }
        invites.push(`User: ${inv.inviter} Has: \`${invs[inv.code]}\`invites`);
   
  });
  var embed = new Discord.RichEmbed()
  .setColor("#000000")
  .setDescription(`${invites.join(`\n`)+'\n\n**By:** '+message.author}`)
  .setThumbnail("https://cdn.discordapp.com/icons/706321873096409168/44da621901815b5f9f51c7d496bbdd69.jpg")
           message.channel.send({ embed: embed });
   
  });
   
    }
  });

var data = {};
var ros = {};
var AsciiTable = require('ascii-data-table').default
client.on('message', message =>{
 
    if(message.content.startsWith(prefix + "roleslist")){
        ros=message.guild.roles.size,
        data = [['Rank', 'RoleName']]
        for(let i =0;i<ros;i++){
            if(message.guild.roles.array()[i].id !== message.guild.id){
         data.push([i,`${message.guild.roles.filter(r => r.position == ros-i).map(r=>r.name)}`])
        }}
        let res = AsciiTable.table(data)
 
        message.channel.send(`**\`\`\`xl\n${res}\`\`\`**`);
    }
});
 

 
 
  


const cool = [];
client.on('message',async message => {
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;
 
  const args = message.content.split(' ');
  const credits = require('./credits.json');
  const path = './credits.json';
  const mention = message.mentions.users.first() || client.users.get(args[1]) || message.author;
  const mentionn = message.mentions.users.first() || client.users.get(args[1]);
  const author = message.author.id;
  const balance = args[2];
  const daily = Math.floor(Math.random() * 350) + 10;
 
  if(!credits[author]) credits[author] = {credits: 50};
  if(!credits[mention.id]) credits[mention.id] = {credits: 50};
  fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
 
 
  if(message.content.startsWith(prefix + "money")) {
  if(args[0] !== `${prefix}money` && args[0] !== `${prefix}moneys`) return;
 
  if(args[2]) {
    if(isNaN(args[2]) || args[2] < 0) return message.channel.send(`:interrobang: **| ${message.author.username}, type the money you need to transfer! **`);
    if(mention.bot) return message.channel.send(`**:heavy_multiplication_x:| ${message.content.split(' ')[1]} لم يتم العثور على**`);
    if(mention.id === message.author.id) return message.channel.send('**:heavy_multiplication_x:| لا يمكنك تحويل كردت لنفسك**');
    if(credits[author].credits < balance) return message.channel.send(`** :thinking: | ${message.author.username}, Your balance is not enough for that!**`);
    var one = Math.floor(Math.random() * 9) + 1;
    var two = Math.floor(Math.random() * 9) + 1;
    var three = Math.floor(Math.random() * 9) + 1;
    var four = Math.floor(Math.random() * 9) + 1;
 
    var number = `${one}${two}${three}${four}`;
   
    message.channel.send(`**:heavy_dollar_sign:| \`${number}\`, أكتب الرقم للأستمرار**`).then(m => {
      message.channel.awaitMessages(m => m.author.id === message.author.id, {max: 1, time: 10000}).then(c => {
        if(c.first().content === number) {
          m.delete();
          message.channel.send(`**:moneybag: | ${message.author.username}, has transferred \`${balance}\` to ${mention}**`);
          credits[author].credits += (-balance);
          credits[mention.id].credits += (+balance);
          fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
        } else if(c.first().content !== number) {
          m.delete();
          message.channel.send(`** :money_with_wings: | تم الغاء الإرسال**`);
        }
      });
    });
  }
  if(!args[2]) {
    if(mention.bot) return message.channel.send(`:interrobang:**| ${message.author.username}, I can't find** ${message.content.split(' ')[1]}**!**`);
    message.channel.send(`**${mention.username}, your :money_with_wings: Money is** \`$${credits[mention.id].credits}\`**.** `);
  }
 
  }
        if(args[0].toLowerCase() === `${prefix}daily`) {  
     
if(credits[message.author.id].daily != moment().format('L')) {
 
       credits[message.author.id].daily = moment().format('L');
           
 
          let ammount = (300, 500, 100, 200, 120, 150, 350, 320,220,250,300,800,80);
          credits[author].credits += ammount;
       
       
          message.channel.send(`**:atm: | ${message.author.username}, you received your :yen: ${ammount} daily credits!**`);
        fs.writeFile("./credits.json", JSON.stringify(credits), function(e) {
            if (e) throw e;
        })
 
      }else{
      message.channel.send(`:stopwatch: : **Please cool down  ${moment().endOf('day').fromNow()}**`);
 
      }
   
        }
         
   
 
});






const reps = JSON.parse(fs.readFileSync("./rep.json","utf8"));
var timess = require("./timerep.json")
client.on("messageCreate", (message) => {
if(!reps[message.author.id]) reps[message.author.id] = {
rep: 0
}
fs.writeFile("./rep.json", JSON.stringify(reps), function(e) {
if (e) throw e;
})
let args = message.cleanContent.split(" ")
if(args[0] == '$rep') {
let mention = message.mentions[0] ? message.mentions[0].id : args[1]
if(!mention) return message.channel.sendMessage(`**:x: | Error , Please Type Command True Ex: \`${prefix}rep [MentionUser/ID]\`**`)
if(mention === message.author.id) return message.channel.sendMessage(`**:x: | Error , You Can\'t Give Rep For Yourself**`)
if(!reps[mention]) reps[mention] = {
rep: 0
}
let time = 8.64e+7;
let lastrep = timess[message.author.id]
if (lastrep !== null && time - (Date.now() - lastrep) > 0) {
let times = (time - (Date.now() - lastrep));
message.channel.sendMessage(`**:x: | Error , Please Wait \`[${pretty(times, {verbose:true})}]\` For Give Rep Again**`)
} else {
timess[message.author.id] = Date.now();
message.channel.sendMessage(`**:white_check_mark: | Done I Have Give <@${mention}> \`1\` Rep**`)
reps[mention].rep += 1
fs.writeFile("./timerep.json", JSON.stringify(timess), function(e) {
if (e) throw e;
})
fs.writeFile("./rep.json", JSON.stringify(reps), function(e) {
if (e) throw e;
})
}
}
}) 
   


 
  



    
const welcome = JSON.parse(fs.readFileSync('./welcomer.json' , 'utf8'));
client.on('message', async message => {
    let messageArray = message.content.split(" ");
   if(message.content.startsWith('-' + "setLeave")) {
             
    let filter = m => m.author.id === message.author.id;
    let thisMessage;
    let thisFalse;
 
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send('You don\'t have permission').then(msg => {
       msg.delete(4500);
       message.delete(4500);
    });
   
    message.channel.send(':pencil: **| من فضلك اكتب الرساله الان... :pencil2: **').then(msg => {
 
        message.channel.awaitMessages(filter, {
          max: 1,
          time: 90000,
          errors: ['time']
        })
        .then(collected => {
            collected.first().delete();
            thisMessage = collected.first().content;
            let boi;
            msg.edit(':scroll: **| اكتب اسم الروم الان... :pencil2: **').then(msg => {
     
                message.channel.awaitMessages(filter, {
                  max: 1,
                  time: 90000,
                  errors: ['time']
                })
                .then(collected => {
                    collected.first().delete();
                    boi = collected.first().content;
                    msg.edit('✅ **|Done.**').then(msg => {
       
                      message.channel.awaitMessages(filter, {
                        max: 1,
                        time: 90000,
                        errors: ['time']
                      })
                      let embed = new Discord.RichEmbed()
                      .setTitle('**Done The Leave Msg Code Has Been Setup**')
                      .addField('Message:', `${thisMessage}`)
                      .addField('Channel:', `${boi}`)
                      .setThumbnail(message.author.avatarURL)
                      .setFooter(`${client.user.username}`)
                     message.channel.sendEmbed(embed)
    welcome[message.guild.id] = {
leavechannel: boi,
leavemsg: thisMessage,
onoff: 'On',
leave: 'On'
    }
    fs.writeFile("./welcomer.json", JSON.stringify(welcome), (err) => {
    if (err) console.error(err)
  })
   }
            )
        })
    })
})
    })
}})


client.on('message', message => {
           if (!message.channel.guild) return;
 
    let room = message.content.split(" ").slice(1);
    let findroom = message.guild.channels.find('name', `${room}`)
    if(message.content.startsWith('-' + "setwelcome")) {
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
if(!room) return message.channel.send('Please Type The Channel Name')
if(!findroom) return message.channel.send('Cant Find This Channel')
let embed = new Discord.RichEmbed()
.setTitle('**Done The Welcome Code Has Been Setup**')
.addField('Channel:', `${room}`)
.addField('Requested By:', `${message.author}`)
.setThumbnail(message.author.avatarURL)
.setFooter(`${client.user.username}`)
message.channel.sendEmbed(embed)
welcome[message.guild.id] = {
channel: room,
onoff: 'On',
by: 'On',
dm: 'Off',
leave: 'Off'
}
fs.writeFile("./welcomer.json", JSON.stringify(welcome), (err) => {
if (err) console.error(err)
})
    }})
   
 
            client.on('message', message => {
 
    if(message.content.startsWith('-' + "Leave")) {
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
        if(!welcome[message.guild.id]) welcome[message.guild.id] = {
            onoff: 'Off',
          leave: 'Off'
        }
          if(welcome[message.guild.id].leave === 'Off') return [message.channel.send(`**The Leave Msg Is __𝐎𝐍__ !**`), welcome[message.guild.id].leave = 'On']
          if(welcome[message.guild.id].leave === 'On') return [message.channel.send(`**The Leave Msg Is __𝐎𝐅𝐅__ !**`), welcome[message.guild.id].leave = 'Off']
          fs.writeFile("./welcomer.json", JSON.stringify(welcome), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            })
          }
         
        })
client.on('message', message => {
 
    if(message.content.startsWith('-' + "welcomer")) {
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
        if(!welcome[message.guild.id]) welcome[message.guild.id] = {
          onoff: 'Off'
        }
          if(welcome[message.guild.id].onff === 'Off') return [message.channel.send(`**The Welcome Is __𝐎𝐍__ !**`), welcome[message.guild.id].onoff = 'On']
          if(welcome[message.guild.id].onoff === 'On') return [message.channel.send(`**The Welcome Is __𝐎𝐅𝐅__ !**`), welcome[message.guild.id].onoff = 'Off']
          fs.writeFile("./welcomer.json", JSON.stringify(welcome), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            })
          }
         
        })
       
 
       
        client.on('message', message => {
 
    if(message.content.startsWith('-'+ "dmwelcomer")) {
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
        if(!welcome[message.guild.id]) welcome[message.guild.id] = {
          dm: 'Off'
        }
          if(welcome[message.guild.id].dm === 'Off') return [message.channel.send(`**The Welcome Dm Is __𝐎𝐍__ !**`), welcome[message.guild.id].dm = 'On']
          if(welcome[message.guild.id].dm === 'On') return [message.channel.send(`**The Welcome Dm Is __𝐎𝐅𝐅__ !**`), welcome[message.guild.id].dm = 'Off']
          fs.writeFile("./welcomer.json", JSON.stringify(welcome), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            })
          }
         
        })
 
        client.on('message', message => {
 
            if(message.content.startsWith('-' + "invitedby")) {
                if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
                if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
                if(!welcome[message.guild.id]) welcome[message.guild.id] = {
                  by: 'Off'
                }
                  if(welcome[message.guild.id].by === 'Off') return [message.channel.send(`**The Invited By Is __𝐎𝐍__ !**`), welcome[message.guild.id].by = 'On']
                  if(welcome[message.guild.id].by === 'On') return [message.channel.send(`**The Invited By Is __𝐎𝐅𝐅__ !**`), welcome[message.guild.id].by = 'Off']
                  fs.writeFile("./welcomer.json", JSON.stringify(welcome), (err) => {
                    if (err) console.error(err)
                    .catch(err => {
                      console.error(err);
                  });
                    })
                  }
                 
                })
      client.on("guildMemberRemove", member => {
            if(!welcome[member.guild.id]) welcome[member.guild.id] = {
          onoff: 'Off',
          leave: 'Off'
        }
       
        if(welcome[member.guild.id].onoff === 'Off') return;
                if(welcome[member.guild.id].leave === 'Off') return;
    let welcomer = member.guild.channels.find('name', `${welcome[member.guild.id].leavechannel}`)
    if(!welcomer) return;
     welcomer.send(`${member} ${welcome[member.guild.id].leavemsg}`);
      })          
 



client.on('message', message => { 
           if (message.content.startsWith(prefix + "id")) {
     var args = message.content.split(" ").slice(1);
     let user = message.mentions.users.first();
     var men = message.mentions.users.first();
        var heg;
        if(men) {
            heg = men
        } else {
            heg = message.author
        }
      var mentionned = message.mentions.members.first();
         var h;
        if(mentionned) {
            h = mentionned
        } else {
            h = message.member
        }
               moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL) 
    .setColor("#707070")
    .addField(': دخولك لديسكورد قبل', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true) 
    .addField(': انضمامك لسيرفر قبل', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)               
    .setFooter(`AquaBot`, 'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')                                 
    .setThumbnail(heg.avatarURL);
    message.channel.send(id)
}       });









client.on('message', async message =>{
  if (message.author.boss) return;

if (!message.content.startsWith(prefix)) return;
	let command = message.content.split(" ")[0];
	 command = command.slice(prefix.length);
	let args = message.content.split(" ").slice(1);
	if (command == "mute") {
		if (!message.channel.guild) return;
		if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("You do not have permissions !! ").then(msg => msg.delete(5000));
		if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("The bot does not have permissions ").then(msg => msg.delete(5000));;
		let user = message.mentions.users.first();
		let muteRole = message.guild.roles.find("name", "Muted");
		if (!muteRole) return message.reply("** There is no Muted Role 'Muted' **").then(msg => {msg.delete(5000)});
		if (message.mentions.users.size < 1) return message.reply('**You must Mention Frist**').then(msg => {msg.delete(5000)});
		let reason = message.content.split(" ").slice(2).join(" ");
		message.guild.member(user).addRole(muteRole);
		const muteembed = new Discord.RichEmbed()
		.setColor("RANDOM")
		.setAuthor(`Muted!`, user.displayAvatarURL)
		.setThumbnail(user.displayAvatarURL)
		.addField("**:information_source: المستخدم**",  '**[ ' + `${user.tag}` + ' ]**',true)
		.addField("**:information_source: تم بواسطة **", '**[ ' + `${message.author.tag}` + ' ]**',true)
		.addField("**:information_source: السبب**", '**[ ' + `${reason}` + ' ]**',true)
		.addField("User", user, true)
		message.channel.send({embed : muteembed});
		var muteembeddm = new Discord.RichEmbed()
		.setAuthor(`Muted!`, user.displayAvatarURL)
		.setDescription(`      
${user} انت معاقب بميوت كتابي بسبب مخالفة القوانين
${message.author.tag} تمت معاقبتك بواسطة
[ ${reason} ] : السبب
اذا كانت العقوبة عن طريق الخطأ تكلم مع المسؤلين
`)
		.setFooter(`في سيرفر : ${message.guild.name}`)
		.setColor("RANDOM")
	user.send( muteembeddm);
  }
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("**You do not have permission to unmute the person**:x: ").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("**I Don't have permission*").then(msg => msg.delete(6000))

  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("**You have to mention it first**:x: ");

  let role = message.guild.roles.find (r => r.name === "Muted");
  
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**This person is not given mute**:x:")

  await toMute.removeRole(role)
  message.channel.sendMessage("**A dead person has been successfully removed**:white_check_mark:");

  return;

  }

});
