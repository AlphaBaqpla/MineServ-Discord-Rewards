//=========-DiscordRewards BY Alpha-=========
//==================-VAR`S-==================
const config = require('./config.json')
const fs = require('fs')
const server = require('http')
const { parse } = require('querystring')
var SHA256 = require("crypto-js/sha256")
const { Client } = require('discord.js');
const client = new Client({ intents: 32767 })
client.config = config
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
client.login(config.token)
//===================-MAIN-===================
function main(proj,user,time,sign){
}