//=========-DiscordRewards BY Alpha-=========
//==================-VAR`S-==================
const config = require('./dconf.json')
const comms = require("./cmds.js")
const fs = require('fs')
const server = require('http')
const { parse } = require('querystring')
var SHA256 = require("crypto-js/sha256")
const { Client,GatewayIntentBits} = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.MessageContent,GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages,GatewayIntentBits.GuildMembers,GatewayIntentBits.GuildIntegrations]})
client.config = config
const db = require('qjson-db')
client.db = new db('./data/DB.json')
client.dbc = new db('./data/DBCoin.json')
//==================-SERVER-==================
server.createServer((req,res)=>{
    let buf = ''
    req.on("data",(c)=>{
        buf += c.toString()
    })
    req.on("end",()=>{
        var map = parse(buf)
        if(checkSign(map.project,map.username,map.timestamp,map.signature)==true){
          reward(map.project,map.username,map.timestamp,map.signature)
          res.end('done')
        }
        else{
          res.statusCode = 500
          res.end('error')
        }
    })
}).listen(config.WebServerPort)
function checkSign(project,username,timestamp,signature){
    var hash = SHA256(project+'.'+config.SecretKey+'.'+timestamp+'.'+username)
    if(hash == signature){
        return true
    }
    else{
        return false
    }
}
//=================-DISCORD-==================
const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'))
for (const file of events){
  const event = require(`./events/${file}`)
  client.on(event.name, (...args) => event.execute(...args, client))
}
client.on('messageCreate', (msg) => {
    if (msg.author.username != client.user.username && msg.author.discriminator != client.user.discriminator) {
      var comm = msg.content.trim() + " "
      var comm_name = comm.slice(0, comm.indexOf(" "));
      for (comm_count in comms.comms) {
        var comm2 = config.prefix + comms.comms[comm_count].name;
        if (comm2 == comm_name) {
          comms.comms[comm_count].out(client, msg);
        }
      }
    }
  }
)
client.login(config.token)
//===================-MAIN-===================
function reward(proj,user,time,sign){
  client.dbc.set(user,config.reward)
  time = new Date()
  console.log('\x1b[1m\x1b[33m'+time+' \x1b[37m| \x1b[32mINFO \x1b[37m| \x1b[36mВыдано \x1b[33m'+config.reward+' \x1b[36mбаллов игроку \x1b[33m"'+user+'".\x1b[0m')
}