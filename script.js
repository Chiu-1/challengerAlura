const matriz = [
    ["a","al"],
    ["e","enter"],
    ["i","imes"],
    ["o","ober"],
    ["u","ufat"],
];

function btnEncriptars(){
    //const texto = encriptar(textoOriginal.value);
    campoMensaje.value = encriptar(textoOriginal.value);
    textoOriginal.value="";
}

function encriptar(texto){
    console.log(texto);
    for(let i=0; i < matriz.length; i++){
        if (texto.includes(matriz[i][0])){
            texto=texto.replaceAll(
                matriz[i][0],
                matriz[i][1]
            );
        }
        
        console.log (i);
  
    }
    
    return texto;
}

function btnDesencriptar(){
    campoMensaje.value = desencriptar(textoOriginal.value);
    textoOriginal = "";
}
function desencriptar(textoDesencriptar){
    
   for(let i=0; i < matriz.length; i++){
        if (textoDesencriptar.includes(matriz[i][1])){
            textoDesencriptar=textoDesencriptar.replaceAll(
                matriz[i][1],
                matriz[i][0]
            );
              
        }
        console.log (i);
        
   }
    return textoDesencriptar; 
}

function btncopiar(){
    let ctrc = campoMensaje.value;
    navigator.clipboard.writeText(campoMensaje.value);
}
