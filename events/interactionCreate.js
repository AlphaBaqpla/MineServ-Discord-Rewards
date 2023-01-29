//============INTEGRATION CREATE EVENT============
module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client){
        const {EmbedBuilder} = require('discord.js')
        const conf = require('../config.json')
        const time = new Date()
        function purge(price){
            if(Number(client.dbc.get(client.db.get(interaction.user.id))) - Number(price) >= 0){
                client.dbc.set(client.db.get(interaction.user.id),Number(client.dbc.get(client.db.get(interaction.user.id))) - Number(price))
                return true
            }
            else{
                return false
            }
        }
        if (!interaction.isButton()){return}
        if (interaction.customId == "r1"){
            if(purge(conf.Rewards.Role1.Price) !== false && !interaction.member.roles.cache.find(role => role.id == conf.Rewards.Role1.RoleID)){
                var role = interaction.guild.roles.cache.find(role => role.id === conf.Rewards.Role1.RoleID)
                var user = interaction.guild.members.cache.get(interaction.user.id)
                user.roles.add(role).then((i)=>{
                    const embed = new EmbedBuilder()
                    .setColor('#00bd6d')
                    .setAuthor({
                        name: 'MineServ Rewards'
                    })
                    .setDescription('**Ты успешно приобрёл роль <@&'+conf.Rewards.Role1.RoleID+'> за '+conf.Rewards.Role1.Price+' баллов!**')
                    .setFooter({
                        text: conf.footerText
                    })
                    interaction.reply({
                        embeds: [embed],
                    })
                    console.log('\x1b[1m\x1b[33m'+time+' \x1b[37m| \x1b[32mINFO \x1b[37m| \x1b[36mУчастнику \x1b[33m'+interaction.user.username+' \x1b[36mвыдана роль \x1b[33m'+i.id+'\x1b[36m.\x1b[0m')
                }).catch((e)=>{
                    const embed = new EmbedBuilder()
                    .setColor('#00bd6d')
                    .setAuthor({
                        name: 'MineServ Rewards'
                    })
                    .setDescription('**Бот не может дать тебе эту роль! Возможно ему не хватает прав. Напиши админам!**')
                    .setFooter({
                        text: conf.footerText
                    })
                    interaction.reply({
                        embeds: [embed],
                    })
                    console.log(e)
                })
            }
            else if(interaction.member.roles.cache.find(role => role.id == conf.Rewards.Role1.RoleID)){
                const embed = new EmbedBuilder()
                .setColor('#00bd6d')
                .setAuthor({
                    name: 'MineServ Rewards'
                })
                .setDescription('**У тебя уже есть данная роль!**')
                .setFooter({
                    text: conf.footerText
                })
                interaction.reply({
                    embeds: [embed],
                })
            }
            else{
                const embed = new EmbedBuilder()
                .setColor('#00bd6d')
                .setAuthor({
                    name: 'MineServ Rewards'
                })
                .setDescription('**У тебя недостаточно баллов для покупки!**')
                .setFooter({
                    text: conf.footerText
                })
                interaction.reply({
                    embeds: [embed],
                })
            }
        }
        if (interaction.customId == "r2"){
            if(purge(conf.Rewards.Role2.Price) !== false && !interaction.member.roles.cache.find(role => role.id == conf.Rewards.Role2.RoleID)){
                var role = interaction.guild.roles.cache.find(role => role.id === conf.Rewards.Role2.RoleID)
                var user = interaction.guild.members.cache.get(interaction.user.id)
                user.roles.add(role).then((i)=>{
                    const embed = new EmbedBuilder()
                    .setColor('#00bd6d')
                    .setAuthor({
                        name: 'MineServ Rewards'
                    })
                    .setDescription('**Ты успешно приобрёл роль <@&'+conf.Rewards.Role2.RoleID+'> за '+conf.Rewards.Role2.Price+' баллов!**')
                    .setFooter({
                        text: conf.footerText
                    })
                    interaction.reply({
                        embeds: [embed],
                    })
                    console.log('\x1b[1m\x1b[33m'+time+' \x1b[37m| \x1b[32mINFO \x1b[37m| \x1b[36mУчастнику \x1b[33m'+interaction.user.username+' \x1b[36mвыдана роль \x1b[33m'+i.id+'\x1b[36m.\x1b[0m')
                }).catch((e)=>{
                    const embed = new EmbedBuilder()
                    .setColor('#00bd6d')
                    .setAuthor({
                        name: 'MineServ Rewards'
                    })
                    .setDescription('**Бот не может дать тебе эту роль! Возможно ему не хватает прав. Напиши админам!**')
                    .setFooter({
                        text: conf.footerText
                    })
                    interaction.reply({
                        embeds: [embed],
                    })
                    console.log(e)
                })
            }
            else if(interaction.member.roles.cache.find(role => role.id == conf.Rewards.Role2.RoleID)){
                const embed = new EmbedBuilder()
                .setColor('#00bd6d')
                .setAuthor({
                    name: 'MineServ Rewards'
                })
                .setDescription('**У тебя уже есть данная роль!**')
                .setFooter({
                    text: conf.footerText
                })
                interaction.reply({
                    embeds: [embed],
                })
            }
            else{
                const embed = new EmbedBuilder()
                .setColor('#00bd6d')
                .setAuthor({
                    name: 'MineServ Rewards'
                })
                .setDescription('**У тебя недостаточно баллов для покупки!**')
                .setFooter({
                    text: conf.footerText
                })
                interaction.reply({
                    embeds: [embed],
                })
            }
        }
        if (interaction.customId == "r3"){
            if(purge(conf.Rewards.Role3.Price) !== false&& !interaction.member.roles.cache.find(role => role.id == conf.Rewards.Role3.RoleID)){
                var role = interaction.guild.roles.cache.find(role => role.id === conf.Rewards.Role3.RoleID)
                var user = interaction.guild.members.cache.get(interaction.user.id)
                user.roles.add(role).then((i)=>{
                    const embed = new EmbedBuilder()
                    .setColor('#00bd6d')
                    .setAuthor({
                        name: 'MineServ Rewards'
                    })
                    .setDescription('**Ты успешно приобрёл роль <@&'+conf.Rewards.Role3.RoleID+'> за '+conf.Rewards.Role3.Price+' баллов!**')
                    .setFooter({
                        text: conf.footerText
                    })
                    interaction.reply({
                        embeds: [embed],
                    })
                    console.log('\x1b[1m\x1b[33m'+time+' \x1b[37m| \x1b[32mINFO \x1b[37m| \x1b[36mУчастнику \x1b[33m'+interaction.user.username+' \x1b[36mвыдана роль \x1b[33m'+i.id+'\x1b[36m.\x1b[0m')
                }).catch((e)=>{
                    const embed = new EmbedBuilder()
                    .setColor('#00bd6d')
                    .setAuthor({
                        name: 'MineServ Rewards'
                    })
                    .setDescription('**Бот не может дать тебе эту роль! Возможно ему не хватает прав. Напиши админам!**')
                    .setFooter({
                        text: conf.footerText
                    })
                    interaction.reply({
                        embeds: [embed],
                    })
                    console.log(e)
                })
            }
            else if(interaction.member.roles.cache.find(role => role.id == conf.Rewards.Role3.RoleID)){
                const embed = new EmbedBuilder()
                .setColor('#00bd6d')
                .setAuthor({
                    name: 'MineServ Rewards'
                })
                .setDescription('**У тебя уже есть данная роль!**')
                .setFooter({
                    text: conf.footerText
                })
                interaction.reply({
                    embeds: [embed],
                })
            }
            else{
                const embed = new EmbedBuilder()
                .setColor('#00bd6d')
                .setAuthor({
                    name: 'MineServ Rewards'
                })
                .setDescription('**У тебя недостаточно баллов для покупки!**')
                .setFooter({
                    text: conf.footerText
                })
                interaction.reply({
                    embeds: [embed],
                })
            }
        }
        if (interaction.customId == "r4"){
            if(purge(conf.Rewards.Role4.Price) !== false&& !interaction.member.roles.cache.find(role => role.id == conf.Rewards.Role4.RoleID)){
                var role = interaction.guild.roles.cache.find(role => role.id === conf.Rewards.Role4.RoleID)
                var user = interaction.guild.members.cache.get(interaction.user.id)
                user.roles.add(role).then((i)=>{
                    const embed = new EmbedBuilder()
                    .setColor('#00bd6d')
                    .setAuthor({
                        name: 'MineServ Rewards'
                    })
                    .setDescription('**Ты успешно приобрёл роль <@&'+conf.Rewards.Role4.RoleID+'> за '+conf.Rewards.Role4.Price+' баллов!**')
                    .setFooter({
                        text: conf.footerText
                    })
                    interaction.reply({
                        embeds: [embed],
                    })
                    console.log('\x1b[1m\x1b[33m'+time+' \x1b[37m| \x1b[32mINFO \x1b[37m| \x1b[36mУчастнику \x1b[33m'+interaction.user.username+' \x1b[36mвыдана роль \x1b[33m'+i.id+'\x1b[36m.\x1b[0m')
                }).catch((e)=>{
                    const embed = new EmbedBuilder()
                    .setColor('#00bd6d')
                    .setAuthor({
                        name: 'MineServ Rewards'
                    })
                    .setDescription('**Бот не может дать тебе эту роль! Возможно ему не хватает прав. Напиши админам!**')
                    .setFooter({
                        text: conf.footerText
                    })
                    interaction.reply({
                        embeds: [embed],
                    })
                    console.log(e)
                })
            }
            else if(interaction.member.roles.cache.find(role => role.id == conf.Rewards.Role4.RoleID)){
                const embed = new EmbedBuilder()
                .setColor('#00bd6d')
                .setAuthor({
                    name: 'MineServ Rewards'
                })
                .setDescription('**У тебя уже есть данная роль!**')
                .setFooter({
                    text: conf.footerText
                })
                interaction.reply({
                    embeds: [embed],
                })
            }
            else{
                const embed = new EmbedBuilder()
                .setColor('#00bd6d')
                .setAuthor({
                    name: 'MineServ Rewards'
                })
                .setDescription('**У тебя недостаточно баллов для покупки!**')
                .setFooter({
                    text: conf.footerText
                })
                interaction.reply({
                    embeds: [embed],
                })
            }
        }
        if (interaction.customId == "r5"){
            if(purge(conf.Rewards.Role5.Price) !== false&& !interaction.member.roles.cache.find(role => role.id == conf.Rewards.Role5.RoleID)){
                var role = interaction.guild.roles.cache.find(role => role.id === conf.Rewards.Role5.RoleID)
                var user = interaction.guild.members.cache.get(interaction.user.id)
                user.roles.add(role).then((i)=>{
                    const embed = new EmbedBuilder()
                    .setColor('#00bd6d')
                    .setAuthor({
                        name: 'MineServ Rewards'
                    })
                    .setDescription('**Ты успешно приобрёл роль <@&'+conf.Rewards.Role5.RoleID+'> за '+conf.Rewards.Role5.Price+' баллов!**')
                    .setFooter({
                        text: conf.footerText
                    })
                    interaction.reply({
                        embeds: [embed],
                    })
                    console.log('\x1b[1m\x1b[33m'+time+' \x1b[37m| \x1b[32mINFO \x1b[37m| \x1b[36mУчастнику \x1b[33m'+interaction.user.username+' \x1b[36mвыдана роль \x1b[33m'+i.id+'\x1b[36m.\x1b[0m')
                }).catch((e)=>{
                    const embed = new EmbedBuilder()
                    .setColor('#00bd6d')
                    .setAuthor({
                        name: 'MineServ Rewards'
                    })
                    .setDescription('**Бот не может дать тебе эту роль! Возможно ему не хватает прав. Напиши админам!**')
                    .setFooter({
                        text: conf.footerText
                    })
                    interaction.reply({
                        embeds: [embed],
                    })
                    console.log(e)
                })
            }
            else if(interaction.member.roles.cache.find(role => role.id == conf.Rewards.Role5.RoleID)){
                const embed = new EmbedBuilder()
                .setColor('#00bd6d')
                .setAuthor({
                    name: 'MineServ Rewards'
                })
                .setDescription('**У тебя уже есть данная роль!**')
                .setFooter({
                    text: conf.footerText
                })
                interaction.reply({
                    embeds: [embed],
                })
            }
            else{
                const embed = new EmbedBuilder()
                .setColor('#00bd6d')
                .setAuthor({
                    name: 'MineServ Rewards'
                })
                .setDescription('**У тебя недостаточно баллов для покупки!**')
                .setFooter({
                    text: conf.footerText
                })
                interaction.reply({
                    embeds: [embed],
                })
            }
        }
    }
}