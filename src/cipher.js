window.cipher = {
 encode: (desplazamiento, mensajeObtenido) => {
    let resultado = '';
    for (let i=0; i < mensajeObtenido.length; i++){
        let ascii = mensajeObtenido[i].charCodeAt()
        let nuevoString = (ascii-65+parseInt(desplazamiento))%26+65;
        let stringCharCodeAt = String.fromCharCode (nuevoString);
        resultado=  resultado + stringCharCodeAt;  
    };
    console.log(resultado);
    
    // let stringCodeAtt = String.charCodeAtt (var);
    // console.log (stringCodeAtt);
    // let nuevoString = (stringCodeAtt - 65 + offset)%26+65;
    
 },

 decode:
 function decode (string, offset) {

 }
} 
