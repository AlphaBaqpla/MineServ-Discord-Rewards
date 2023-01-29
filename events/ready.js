//===============READY EVENT================
module.exports = {
    name: 'ready',
    async execute(client){
        time = new Date()
        console.log('\x1b[1m\x1b[33m'+time+' \x1b[37m| \x1b[32mINFO \x1b[37m| \x1b[36mБот \x1b[33m'+client.user.username+' \x1b[36mзапустился.\x1b[0m')
    }
}