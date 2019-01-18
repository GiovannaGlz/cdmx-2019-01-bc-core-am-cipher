
const string =  document.getElementById('mensajeOriginal');
const offset =  document.getElementById('offsetBox');
const botonCifrar = document.getElementById('opcionEncode');
const botonDecifrar = document.getElementById ('opcionDecode');

botonCifrar.addEventListener("click",()=>{
    let mensajeObtenido = string.value.toUpperCase();
    let desplazamiento = offset.value;
    resultadoCifrado = window.cipher.encode(desplazamiento,mensajeObtenido);
    document.getElementById('nuevoMensaje').innerHTML=resultadoCifrado;    
    })

botonDecifrar.addEventListener("click",()=>{
    let mensajeObtenido = string.value.toUpperCase();
    let desplazamiento = offset.value;
    resultadoDecodificado = window.cipher.decode(desplazamiento,mensajeObtenido);
    document.getElementById('nuevoMensaje').innerHTML=resultadoDecodificado;    
    })