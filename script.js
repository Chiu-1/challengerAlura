const matriz = [
    ["a","ai"],
    ["e","enter"],
    ["i","imes"],
    ["o","ober"],
    ["u","ufat"],
];

function btnEncriptars(){
    //const texto = encriptar(textoOriginal.value);
    campoMensaje.value = encriptar(textoOriginal.value);

}

function encriptar(texto){
    console.log(texto);
    for(let i=0; i < matriz.length; i++){
        if (texto.includes(matriz[i][0])){
            texto=texto.replaceAll(
                matriz[i][0],
                matriz[i][1]
            )
        }
        
        
    }

    return texto;
}