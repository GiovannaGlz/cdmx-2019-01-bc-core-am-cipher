window.cipher = {
 encode: (desplazamiento, mensajeObtenido) => { 
     //función para codificar dentro del objeto window
    let resultado = '';
    for (let i=0; i < mensajeObtenido.length; i++){           
        let ascii = mensajeObtenido[i].charCodeAt() 
        //variable que almacena el mensaje en código ascii              
        
        if (ascii >=65 && ascii <= 90){
            let nuevoString = (ascii-65+parseInt(desplazamiento))%26+65;
            //variable que almacena el codigo ascii con el nuevo posicionamiento
            let stringCharCodeAt = String.fromCharCode (nuevoString); 
            //variable que transforma el nuevo codigo ascii a otro string
            resultado=  resultado + stringCharCodeAt;
            //se almacena el resultado de for en cada iteración  
        } else if (ascii >=97 && ascii <= 122) {
            //condicional para minúsculas
            let nuevoString = (ascii-97+parseInt(desplazamiento))%26+97;
            let stringCharCodeAt = String.fromCharCode (nuevoString); 
            resultado=  resultado + stringCharCodeAt;
        } else if ((ascii >=32 && ascii <= 64) || (ascii >= 123 && ascii <= 254)) {
            //condicional para caracteres especiales y espacios
            let stringCharCodeAt = String.fromCharCode (ascii); 
            resultado=  resultado + stringCharCodeAt;
        }   
    };
    //console.log(resultado);
    return resultado;         
 },

 decode: (desplazamiento, mensajeObtenido) => {
    let resultado = '';
    for (let i=0; i < mensajeObtenido.length; i++){
        let ascii = mensajeObtenido[i].charCodeAt()
        
        if (ascii >=65 && ascii <= 90){
            let nuevoString = (ascii+65-parseInt(desplazamiento))%26+65;
            let stringCharCodeAt = String.fromCharCode (nuevoString);
            resultado=  resultado + stringCharCodeAt;
        } else if (ascii >=97 && ascii <= 122) {
            let nuevoString = (ascii-122-parseInt(desplazamiento))%26+122;
            let stringCharCodeAt = String.fromCharCode (nuevoString); 
            resultado=  resultado + stringCharCodeAt;
        } else if ((ascii >=32 && ascii <= 64) || (ascii >= 123 && ascii <= 254)) { 
            let stringCharCodeAt = String.fromCharCode (ascii); 
            resultado=  resultado + stringCharCodeAt;
        }
        
    };
    //console.log(resultado);
    return resultado;
    },
 }
