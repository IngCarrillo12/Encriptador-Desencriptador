const texto = document.querySelector(".textInput");
const textMensaje = document.querySelector(".textArea-mensaje");
const mensajeAlert = document.querySelector(".mensajesAlert");
const alertCadenaVacia = document.querySelector(".alert");
const mensajeEspera = document.querySelector(".mensaje-espera");


function btnCopiar(){
    navigator.clipboard.writeText(textMensaje.value);
}
function btnEncriptar(){
    if(texto.value.length==0){
        alertCadenaVacia.style.display = "inline-block"
        mensajeEspera.style.display = "none"
    }else{
        const encriptado =Encriptar(texto.value);
        textMensaje.style.backgroundImage = "none"
        mensajeAlert.style.display = "none"
        textMensaje.value= encriptado;
        texto.value = ""
    } 
}

function Encriptar(cadenaEncriptada){
    let matrizEncriptacion = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    cadenaEncriptada=cadenaEncriptada.toLowerCase();
    for (let i = 0; i < matrizEncriptacion.length; i++) {
        if(cadenaEncriptada.includes(matrizEncriptacion[i][0])){
            cadenaEncriptada =cadenaEncriptada.replaceAll(matrizEncriptacion[i][0],matrizEncriptacion[i][1])
        }
    }
    return cadenaEncriptada;
}

function btnDesencriptar(){
    if(texto.value.length==0){
        alertCadenaVacia.style.display = "inline-block"
        mensajeEspera.style.display = "none"
    }else{
        const encriptado =Desencriptar(texto.value);
        textMensaje.style.backgroundImage = "none"
        mensajeAlert.style.display = "none"
        textMensaje.value= encriptado;
        texto.value = ""
    } 
}

function Desencriptar(cadenaEncriptada){
    let matrizEncriptacion = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    cadenaEncriptada=cadenaEncriptada.toLowerCase();
    for (let i = 0; i < matrizEncriptacion.length; i++) {
        if(cadenaEncriptada.includes(matrizEncriptacion[i][1])){
           cadenaEncriptada =cadenaEncriptada.replaceAll(matrizEncriptacion[i][1],matrizEncriptacion[i][0]);
        }
    }
    return cadenaEncriptada;
}