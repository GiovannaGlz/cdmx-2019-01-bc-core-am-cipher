
//name="comenzar" id="start1" onclick="clickStarButton" --> botón comienzo, pantalla de inicio
//function clickStartButton (){
  //  document.getElementById('root').style.display = 'block';
  // document.getElementById('instructions').innerHTML;
// }
//type="button" name="entendido" id="understand" onclick="clickUnderstanButton"--> botón, entendido, pantalla de instrucciones
//textarea name="escribirMensaje" id="mensajeOriginal" rows="6" cols="60" change="string" --> en este se guardará la variable string, que es la que se va a codificar
const string =  document.getElementById ('mensajeOriginal');
const offset =  document.getElementById ('offsetBox');
const botonCifrar = document.getElementById ('opcionEncode');

botonCifrar.addEventListener("click",()=>{
    let mensajeObtenido = string.value.toUpperCase();
    let desplazamiento = offset.value;
    
    window.cipher.encode(desplazamiento,mensajeObtenido);
})

function  clickSendStringButton (){
    if (mensajeOriginal.value);
    console.log (string.value);
}
//type="submit" name="OK" value="OK" onclick="clickOkButton" --> botón ok, para enviar dato de offset
function  clickSendOffset (){
    if (offsetBox.value);
    console.log (offset.value);
}

function encode () {
    window.cipher.encode;
};

function decode () {
    window.cipher.decode;
    ;
};

//type="submit" value="Enviar" name="encode" id="sendEncode" onclick="clickEncodeButton" --> se supone que esto envie un dato a otra función, pero parece que ya es innecesario poque hay una instrucción parecida arriba
//type="button" name="encode" value="CODIFICAR" id="opcionEncode" onclick="clickOpcionEncodeButton" --> botón enconde, pantalla de operación, aquí se guardará cipher.encode
//type="button" name="decode" value="DECODIFICAR" id="opcionDecode" onclick="clickOpcionDecodeButton" -->botón decode, pantala de operación, aquí s guardará cipher.decode
//type="text" name="desplazamiento" id="offset" value="número" --> index para el desplazamiento, aquí guardaremos la variable de offset
// textarea name="mostrarCifrado" id="mensajeCifrado" cols="60" rows="6" readonly></textarea> -- acá se mostrará el resultado, tendremos que guardarlo en una variable que puede ser "stingEncode"
//input type="button" value="Regresar" id="return" onclick="clickButtonReturn" --> este botón nos regresará a... borrar datos
//input type="button" value="Finalizar" id="finish" onclick="clickButtonFinish" --> de aquí vamos a la pantalla de despedida (ya casi acabas)
