//===============READY EVENT================
module.exports = {
    name: 'ready',
    async execute(client){
        time = new Date()
        console.log(time+' | '+client.user.username+' | запустился!')
    }
}