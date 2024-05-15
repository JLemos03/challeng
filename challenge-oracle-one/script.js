var botonEncriptar = document.querySelector('.btn-encriptar')
var botonDesencriptar = document.querySelector('.btn-desencriptar')
var avatar = document.querySelector('.avatar')
var contenedor = document.querySelector('.contenedor-parrafo')
var resultado = document.querySelector('.text-resultado')
var ocultarBtnCopiar = document.querySelector('.contenedor-copiar')
botonEncriptar.onclick  = encriptar;
botonDesencriptar.onclick  = desencriptar;

function encriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto()
    resultado.textContent = encriptarTexto(cajatexto);
 
}

function desencriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto()
    resultado.textContent = desencriptarTexto(cajatexto);
}

function recuperarTexto(){
    var cajatexto = document.querySelector('.text-box')
    return cajatexto.value
}

function ocultarAdelante(){
    avatar.classList.add("ocultar")
    contenedor.classList.add("ocultar")
}

function anchoPantalla (){
    var anchoDePantalla= window.innerWidth;
    if (anchoDePantalla<= 780){
        ocultarBtnCopiar.classList.add('ocultar')
    }
    else{
        ocultarBtnCopiar.classList.remove('ocultar')

    }
}

function clickBtnE(){
    ocultarBtnCopiar.classList.toggle('ocultar')
    ocultarBtnCopiar.classList.toggle('mostrar')
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;

}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal ='';

    for( var i=0; i < texto.length; i++){
        if(texto[i]=='a'){
            textoFinal =textoFinal + 'a';
            i+=1;
        }
        else if(texto[i]=='e'){
            textoFinal = textoFinal + 'e';
            i+=4;
        }
        else if(texto[i]=='i'){
            textoFinal = textoFinal +'i';
            i+=3;
        }
        else if(texto[i]=='o'){
            textoFinal = textoFinal +'o'
            i+=3
        }
        else if(texto[i]=='u'){
            textoFinal = textoFinal +'u'
            i+=3
        }
        else{
            textoFinal = textoFinal + texto[i];
        }

    }
    return textoFinal;

}

const btnCopiar = document.querySelector(".btn-copiar"); 
    btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".text-resultado").textContent;
    navigator.clipboard.writeText(contenido);
    btnCopiar.value = "copiado"
    console.log("copiado"); 
    setTimeout(()=> btnCopiar.value="Copiar", 2000)

    
})


anchoPantalla()

document.getElementById('encriptar').addEventListener('click', clickBtnE)





