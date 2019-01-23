
const string =  document.getElementById('mensajeOriginal');
const offset =  document.getElementById('offsetBox');
const botonCifrar = document.getElementById('opcionEncode');
const botonDecifrar = document.getElementById ('opcionDecode');

botonCifrar.addEventListener("click",()=>{
    let mensajeObtenido = string.value;
    let desplazamiento = offset.value;
    let resultadoCifrado = window.cipher.encode(desplazamiento,mensajeObtenido);
    document.getElementById('nuevoMensaje').innerHTML=resultadoCifrado;    
    })

botonDecifrar.addEventListener("click",()=>{
    let mensajeObtenido = string.value;
    let desplazamiento = offset.value;
    let resultadoDecodificado = window.cipher.decode(desplazamiento,mensajeObtenido);
    document.getElementById('nuevoMensaje').innerHTML=resultadoDecodificado;    
    })