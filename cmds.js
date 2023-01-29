const conf = require('./config.json')
const {EmbedBuilder} = require('discord.js')
const prefix = conf.prefix
//=====Link=====
function link(client,msg){
    const arggs = msg.content.split(' ').slice(1)
    const nickname = arggs.join(' ')
    if (!nickname){
        const embed = new EmbedBuilder()
        .setColor('#00bd6d')
        .setAuthor({
            name: 'MineServ Rewards'
        })
        .setDescription('**Напишите ник!**')
        .setFooter({
            text: conf.footerText
        })

        return msg.channel.send({
            embeds: [embed],
            ephemeral: true
        })
    }
    else{
        if(client.db.get(msg.author.id)){
            const embed = new EmbedBuilder()
            .setColor('#00bd6d')
            .setAuthor({
                name: 'MineServ Rewards'
            })
            .setDescription('**Ваш аккаунт в Discord уже связан с ником "'+client.db.get(msg.author.id)+'"!**')
            .setFooter({
                text: conf.footerText
            })
            
            msg.channel.send({
                embeds: [embed],
                ephemeral: true
            })
        }
        else{
            const embed = new EmbedBuilder()
            .setColor('#00bd6d')
            .setAuthor({
                name: 'MineServ Rewards'
            })
            .setDescription('**Ваш аккаунт в Discord был успешно связан с Minecraft ником "'+nickname+'"!**')
            .setFooter({
                text: conf.footerText
            })

            client.db.set(msg.author.id,nickname)

            msg.channel.send({
                embeds: [embed],
                ephemeral: true
            })
        }
    }
}
function unlink(client,msg){
    const arggs = msg.content.split(' ').slice(1)
    const nickname = arggs.join(' ')
    const embed = new EmbedBuilder()
    .setColor('#00bd6d')
    .setAuthor({
        name: 'MineServ Rewards'
    })
    .setDescription('**Ваш аккаунт в Discord больше не связан с Minecraft ником "'+client.db.get(msg.author.id)+'"!**')
    .setFooter({
        text: conf.footerText
    })
    client.db.delete(msg.author.id)
    return msg.channel.send({
        embeds: [embed],
        ephemeral: true
    })
}
function profile(client,msg){
    const arggs = msg.content.split(' ').slice(1)
    const nickname = arggs.join(' ')
    const embed = new EmbedBuilder()
    .setColor('#00bd6d')
    .setAuthor({
        name: 'MineServ Rewards'
    })
    .setDescription('**Ваш профиль:**')
    .setThumbnail(msg.user.avatarURL())
    .setFooter({
        text: conf.footerText
    })
    return msg.channel.send({
        embeds: [embed],
        ephemeral: true
    })
}
function help(client,msg){
    const embed = new EmbedBuilder()
    .setColor('#00bd6d')
    .setAuthor({
        name: 'MineServ Rewards'
    })
    .setDescription('**Помощь по командам бота**')
    .setThumbnail(conf.thumbImage)
    .addFields([
        { name: '**Префикс бота:**', value: '`'+prefix+'`'},
        {name: '**Команды бота:**', value: ' '},
        { name: '**link**', value: '`Привязать ник в Minecraft к аккаунту Discord.`',inline: true},
        { name: '**unlink**', value: '`Отвязать ник в Minecraft от аккаунта Discord.`',inline: true},
        { name: '**profile**', value: '`Посмотреть свой профиль.`',inline: true},
    ])
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
},
{
    name: "profile",
    out: profile,
    about: "опосмотреть свой профиль"
},
{
    name: "help",
    out: help,
    about: "помощь по командам бота"
}];

module.exports.comms = comms_list