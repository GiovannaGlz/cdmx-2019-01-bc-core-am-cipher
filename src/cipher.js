window.cipher = {
 encode: (desplazamiento, mensajeObtenido) => { //función para codificar dentro del objeto window
    let resultado = '';
    for (let i=0; i < mensajeObtenido.length; i++){
        let ascii = mensajeObtenido[i].charCodeAt() //variable que almacena el mensaje en código ascii
        let nuevoString = (ascii-65+parseInt(desplazamiento))%26+65;//variable que almacena el codigo ascii con el nuevo posicionamiento
        let stringCharCodeAt = String.fromCharCode (nuevoString); //variable que transforma el nuevo codigo ascii a otro string
        resultado=  resultado + stringCharCodeAt;//se almacena el resultado de for en cada iteración  
    };
    console.log(resultado);
    return resultado; //devuelve el resultado final
              
 },

 decode: (desplazamiento, mensajeObtenido) => {
    let resultado = '';
    for (let i=0; i < mensajeObtenido.length; i++){
        let ascii = mensajeObtenido[i].charCodeAt()
        let nuevoString = (ascii-65-parseInt(desplazamiento))%26+65;
        //console.log (nuevoString);
        let stringCharCodeAt = String.fromCharCode(nuevoString);
        resultado=  resultado + stringCharCodeAt;
    };
    console.log(resultado);
    return resultado;
    },
 }
