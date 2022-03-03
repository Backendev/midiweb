// function iniciar_midi(){
//     midi_l = socket.emit('init_midi')



// }


function iniciar_midi() {

WebMidi
    .enable()
    .then(() => {
        enabled_midi()
        }).catch(err => console.error(err));


}
function enabled_midi(){
    console.log("habilitado")
    // Inputs
    let interfaces = WebMidi.inputs
    console.log(interfaces)
    //WebMidi.inputs.forEach(input => console.log(input.manufacturer, input.name, input.id));
    let div_interfaces = document.getElementById('sel_interfaces')
    interfaces.forEach(item => {
        console.log(item.name)
        let element = document.createElement('div')
        element.setAttribute('class','interface')
        element.setAttribute('onclick','select_interface("'+item.name+'","'+item.id+'")')
        let text = document.createTextNode(item.name+"22");
        element.appendChild(text)
        div_interfaces.appendChild(element)
    });
    }
function select_interface(name,id){
    console.log("interface 1pp: "+interface_session)
    console.log("22")
    if(interface_session == "0"){
        interface_session =  name
        interface_id_session = id
        console.log("interfacep 2: "+interface_session)
        console.log("22"+id)
        input_l = WebMidi.getInputById(id);
        input_l.addListener('noteon',e=>{
            //console.log(e.note.identifier)
            if (e.value > 0){
                console.log(e.value)
                console.log(e)
                console.log(e.target._input._midiInput.id)
                socket.emit('send_note',{
                    'note':e.note.identifier,
                    'time':e.timestamp,
                    'value':e.value,
                    'input':e.target._input._midiInput.id,
                })
            }
        })
        socket.emit('select_interface',{'name':name,'id':id})
        console.log(user_session)
    }

}