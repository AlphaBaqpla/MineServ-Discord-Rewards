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
client.db0 = require("qjson-db")
const qjson = require('qjson-db')
client.db = new qjson('./data/DB.json')
//==================-SERVER-==================
server.createServer((req,res)=>{
    let buf = ''
    req.on("data",(c)=>{
        buf += c.toString()
    })
    req.on("end",()=>{
        var map = parse(buf)
        if(checkSign(map.project,map.username,map.timestamp,map.signature)==true){
            main(map.project,map.username,map.timestamp,map.signature)
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
function main(proj,user,time,sign){
}