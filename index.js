const path = require('path')
// const {WebMidi} = require("webmidi");
const express = require('express')
const app = express()

const socketio = require('socket.io')
// let midi_l = null
// WebMidi
//     .enable()
//     .then(() => {
//         midi_l = WebMidi
//         }).catch(err => console.error(err));


let users = []

//settings
app.set('port',process.env.PORT || 3000)

//estaticos
app.use(express.static(path.join(__dirname,'public')))

//app.use(iniciar_midi)
//arrancar server
const server = app.listen(app.get('port'), () =>{
    console.log("server on port",app.get('port'))
})

    const iop = socketio(server)

    //WebSocket
    iop.on('connection',(socket)=>{
        console.log("New connection",socket.id)
        let user_sesion = {'id':socket.id}
        users.push(user_sesion)
        iop.sockets.emit('init',users)
        socket.on('message',(data)=>{
            console.log(data)
            iop.sockets.emit('message',data)

        })
        socket.on('select_interface',(data)=>{
            iop.sockets.emit('select_interface',data)
        })
        socket.on('send_note',(data)=>{
            iop.sockets.emit('send_note',data)
        })
    })



