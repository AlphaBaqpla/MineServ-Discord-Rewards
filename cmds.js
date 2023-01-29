const conf = require('./config.json')
const {EmbedBuilder,ActionRowBuilder,ButtonBuilder,ButtonStyle} = require('discord.js')
//=====Link=====
function link(client,msg){
    const arggs = msg.content.split(' ').slice(1)
    const nickname = arggs.join(' ')
    for(i in client.db.JSON()){
        if(client.db.get(i) == nickname){
            const embed = new EmbedBuilder()
            .setColor('#00bd6d')
            .setAuthor({
                name: 'MineServ Rewards'
            })
            .setDescription('**Данный ник уже привязан к аккаунту <@'+i+'>!**')
            .setFooter({
                text: conf.footerText
            })
            return msg.channel.send({
                embeds: [embed]
            })
        }
    }
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
            embeds: [embed]
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
                embeds: [embed]
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
                embeds: [embed]
            })
        }
    }
}
function unlink(client,msg){
    if(client.db.get(msg.author.id)){
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
        msg.channel.send({
            embeds: [embed],
        })
    }
    else{
        const embed = new EmbedBuilder()
        .setColor('#00bd6d')
        .setAuthor({
            name: 'MineServ Rewards'
        })
        .setDescription('**Ваш аккаунт не связан с каким-либо ником!**')
        .setFooter({
            text: conf.footerText
        })
        msg.channel.send({
            embeds: [embed],
        })
    }
}
function profile(client,msg){
    const embed = new EmbedBuilder()
    embed.setColor('#00bd6d')
    embed.setAuthor({
        name: 'MineServ Rewards'
    })
    embed.setDescription('**Ваш профиль:**')
    if(client.dbc.get(client.db.get(msg.author.id)) && client.db.get(msg.author.id)){
        embed.addFields([
            { name: '**Ник в Игре**', value: String(client.db.get(msg.author.id)),inline: true},
            { name: '**Баллы**', value: String(client.dbc.get(client.db.get(msg.author.id))),inline: true},
        ])
    }
    else if(!client.db.get(msg.author.id)){
        embed.addFields([
            { name: '**Ник в Игре**', value: 'Ник не привязан',inline: true},
            { name: '**Баллы**', value: '0',inline: true},
        ])
    }
    else if(!client.dbc.get(client.db.get(msg.author.id))){
        client.dbc.set(client.db.get(msg.author.id),0)
        embed.addFields([
            { name: '**Ник в Игре**', value: String(client.db.get(msg.author.id)),inline: true},
            { name: '**Баллы**', value: '0',inline: true},
        ])
    }
    embed.setThumbnail(msg.author.avatarURL())
    embed.setFooter({
        text: conf.footerText
    })
    msg.channel.send({
        embeds: [embed],
        ephemeral: true
    })
}
function buy(client,msg){
    const embed = new EmbedBuilder()
    embed.setColor('#00bd6d')
    embed.setAuthor({
        name: 'MineServ Rewards'
    })
    embed.setDescription('**Покупка ролей за баллы (Ɓ).**\n**Чтобы купить роль нажмите на кнопку ниже!**')
    const row = new ActionRowBuilder()
    if(conf.Rewards.Role1.RoleID !== "null"){
        row.addComponents(
            new ButtonBuilder()
            .setCustomId('r1')
            .setLabel('1 - '+conf.Rewards.Role1.Price+' Ɓ')
            .setStyle(ButtonStyle.Success),
        )
        embed.addFields([{ name: '1.', value: '**<@&'+conf.Rewards.Role1.RoleID+'>**',inline: true}])
    }
    if(conf.Rewards.Role2.RoleID !== "null"){
        row.addComponents(
            new ButtonBuilder()
            .setCustomId('r2')
            .setLabel('2 - '+conf.Rewards.Role2.Price+' Ɓ')
            .setStyle(ButtonStyle.Success),
        )
        embed.addFields([{ name: '2.', value: '**<@&'+conf.Rewards.Role2.RoleID+'>**',inline: true}])
    }
    if(conf.Rewards.Role3.RoleID !== "null"){
        row.addComponents(
            new ButtonBuilder()
            .setCustomId('r3')
            .setLabel('3 - '+conf.Rewards.Role3.Price+' Ɓ')
            .setStyle(ButtonStyle.Success),
        )
        embed.addFields([{ name: '3.', value: '**<@&'+conf.Rewards.Role3.RoleID+'>**',inline: true}])
    }
    if(conf.Rewards.Role4.RoleID !== "null"){
        row.addComponents(
            new ButtonBuilder()
            .setCustomId('r4')
            .setLabel('4 - '+conf.Rewards.Role4.Price+' Ɓ')
            .setStyle(ButtonStyle.Success),
        )
        embed.addFields([{ name: '4.', value: '**<@&'+conf.Rewards.Role4.RoleID+'>**',inline: true}])
    }
    if(conf.Rewards.Role5.RoleID !== "null"){
        row.addComponents(
            new ButtonBuilder()
            .setCustomId('r5')
            .setLabel('5 - '+conf.Rewards.Role5.Price+' Ɓ')
            .setStyle(ButtonStyle.Success),
        )
        embed.addFields([{ name: '5.', value: '**<@&'+conf.Rewards.Role5.RoleID+'>**',inline: true}])
    }
    else if(conf.Rewards.Role1.RoleID == "null"){
        embed.addFields([{ name: '**Админ не добавил роли для продажи за баллы!**', value: ' ',inline: true},])
    }
    embed.setThumbnail(conf.thumbImage)
    embed.setFooter({
        text: conf.footerText
    })
    msg.channel.send({
        embeds: [embed],
        components: [row]
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
        { name: '**Префикс бота:**', value: conf.Discord.prefix},
        {name: '**Команды бота:**', value: ' '},
        { name: '**link**', value: 'Привязать ник в Minecraft к аккаунту Discord.',inline: true},
        { name: '**unlink**', value: 'Отвязать ник в Minecraft от аккаунта Discord.',inline: true},
        { name: '**buy**', value: 'Купить роли за баллы.',inline: true},
        { name: '**profile**', value: 'Посмотреть свой профиль.',inline: true},
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
    about: "посмотреть свой профиль"
},
{
    name: "buy",
    out: buy,
    about: "купить роли за баллы"
},
{
    name: "help",
    out: help,
    about: "помощь по командам бота"
}];

module.exports.comms = comms_list