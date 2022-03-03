
let user = null
//Variable global io => socketio/socketio.js
//document.getElementById('pet').addEventListener('click',unirse())
function unirse(){
    user = document.getElementById('user').value
    if(user === "edward"){
        socket = io()
        user_session = user
        let cont_ingreso = document.getElementById("ingreso")
        let cont_window = document.getElementById("window")
        cont_ingreso.style.display = "none"
        cont_window.style.display = "block"
        let message = document.getElementById("message")
        let output = document.getElementById("output")
        let midi_output = document.getElementById("midi_output")
        let btn = document.getElementById("sender")

        btn.addEventListener('click',function(){
            //console.log("22")
            socket.emit('message',{'user':user_session,'message':message.value})
        })
        socket.on('message',function(data){
            output.innerHTML += data.user+":"+data.message+"<br>"
        })
        socket.on('select_interface',(data)=>{
            let element = document.createElement('div')
            element.setAttribute('class','interface_section')
            element.setAttribute('id',data.name)
            let text = document.createTextNode(data.name);
            let element_int_cont = document.createElement('div')
            element_int_cont.setAttribute('class','interface_container')
            let element_int = document.createElement('div')
            element_int.setAttribute('class','interface_output h5b')
            element_int.setAttribute('id',data.id)
            element.appendChild(text)
            element.appendChild(element_int)
            element_int_cont.appendChild(element)
            midi_output.appendChild(element_int_cont)
        })
        socket.on('send_note',(data)=>{
            let element_out = document.getElementById(data.input)
            //element_out.scrollLeft = ;
            let element_int = document.createElement('div')
            element_int.setAttribute('class','note_output')
            let text = document.createTextNode(data.note+"\n"+Math.trunc(data.time));
            element_int.appendChild(text)
            element_out.appendChild(element_int)
            let sound = document.getElementById(data.note)
            sound.currentTime = 0;
            sound.pause()
            
            sound.play()

        })



    }
}

