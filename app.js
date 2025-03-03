// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let ListaDeAmigos = []; // Inicializar array vacío
let AgregarAmigos;
let textHTML;

function AsignarTextoElemento(elemento, texto) {//cambia el contenido HTML de un elemento en la página
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
}

function AsignarTextoVertical() {//la lista que esta dentro del array Lista amigo los devuelve dentro de elementos div 
    textHTML=""
    for (let i = 0; i < ListaDeAmigos.length; i++) {
        textHTML+="<li>" + ListaDeAmigos[i] + "</li>";
    }
    return textHTML;
}

function agregarAmigo() {
   let insertarAmigo=document.getElementById("amigo");
   let NombresAmigos=insertarAmigo.value;
   
   if (!NombresAmigos) {//no tego NombreAmigos lo ejecuta
    alert("Debes insertar un nombre!");
    return;
   }
   ListaDeAmigos.push(NombresAmigos);//Si tengo datos en NombreAmigos
   let TextoVertical=AsignarTextoVertical();//actualizar el texto a vertical
   AsignarTextoElemento("#listaAmigos",TextoVertical);//se agregan los datos actualizados//#listaAmigos se usa para actualizar el contenido de la
   //lista de amigos dentro del elemento con su id=listaamigos
   insertarAmigo.value="";
}

function sortearAmigo() {
    //verifica si hay amigos insertados en la lista
    if (ListaDeAmigos.length<=1) {
        alert("Error!,No hay amigos para sortear");
        return;
    }
    let AmigoAleatorio=ListaDeAmigos[Math.floor(Math.random()*ListaDeAmigos.length)];
    let resultado=document.getElementById("resultado");
    resultado.innerHTML=`El amigo Elegido es: ${AmigoAleatorio}`
    LimpiarLista();
}

function LimpiarLista() {//limpia la lista y solo muestra el elemento sorteado
    let limpiar = document.getElementById("listaAmigos");
    limpiar.innerHTML = "";
}




    





