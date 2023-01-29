const conf = require('./config.json')
const {MessageEmbed} = require('discord.js')
const prefix = conf.prefix
//=====Link=====
function link(msg){
    const arggs = msg.content.split(' ').slice(1)
    const nickname = arggs.join(' ')
    if (!nickname) return msg.channel.send({content: '**Укажите ник!**',})
    else{
    }
}
function unlink(msg){
    const arggs = msg.content.split(' ').slice(1)
    const nickname = arggs.join(' ')
    if (!nickname) return msg.channel.send({content: '**Укажите ник!**',})
    else{
    }
}
function wlhelp(r, msg){
    const embed = new MessageEmbed()
    .setColor('#00ffe1')
    .setAuthor({
        name: 'MineServ Rewards'
    })
    .setDescription('**Помощь по командам бота**')
    .setThumbnail(conf.thumbImage)
    .addFields(
        { name: '**Префикс бота:**', value: '`'+prefix+'`'},
        { name: '**wlhelp:**', value: '`Информация о командах бота.`'},
        { name: '**wlcmd:**', value: '`Выполнить на сервере команду.`'},
        { name: '**wladd:**', value: '`Добавить игрока в ВЛ.`'},
        { name: '**wlrem:**', value: '`Удалить игрока из ВЛ.`'},
        { name: '**wlban:**', value: '`Забанить игрока на игровом сервере.`'},
        { name: '**wlunban:**', value: '`Разбанить игрока на игровом сервере.`'},
    )
    .setFooter({
        text: conf.footerText
    })
    msg.channel.send({
        embeds: [embed]
    })
}
var comms_list = [
{
  name: "link",
  out: link,
  about: "привязать ник в Minecraft к аккаунту Discord"
},
{
  name: "unlink",
  out: unlink,
  about: "отвязать ник в Minecraft от аккаунта Discord"
}];

module.exports.comms = comms_list