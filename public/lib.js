let conf={
    'color1':'#22577A',
    'color2': '#38A3A5',
    'color3':'#57CC99',
    'color4':'#80ED99',
    'color5':'#00AAD4',
    'color6':'#0088AA',
    'color7':'#55DDFF',
    'color8':'#00D4AA',
    'color9':'#80FFE6',
    'color10':'#008066',
    'color11':'#DBAC68',
    'color12':'#FF9966',
    'color13':'lemonchiffon'

}

function config(){
    let cols = ""
    Object.entries(conf).forEach(([key, value]) => {
        cols += "--"+key+":"+value+";"
      });
    let variables = "html{"+cols+"}"
    document.getElementById("varscss").innerHTML = variables
}
function config_size(){
    let he = window.innerHeight
    let wi = window.innerWidth
    let conf_size={
        'heightMain':he+"px",
        'widthMain':wi+"px"
    }
    let cols = ""
    Object.entries(conf_size).forEach(([key, value]) => {
        cols += "--"+key+":"+value+";"
      });
    let variables = "html{"+cols+"}"
    document.getElementById("varssize").innerHTML = variables
}
function init_config(){
    config()
}