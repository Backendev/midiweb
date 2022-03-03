
function cargar_lib_sounds(lib_sound){
    Object.entries(lib_sound).forEach(([key, value]) => {
        cargar_sonido(value,key)
      });
}

function cargar_sonido(fuente,id_div) {
    let div_sounds = document.getElementById("sounds")
    let sonido = document.createElement("audio");
    sonido.setAttribute("id", id_div);
    sonido.src = fuente;
    sonido.setAttribute("preload", "auto");
    sonido.setAttribute("controls", "none");
    sonido.style.display = "none";
    div_sounds.appendChild(sonido);
};