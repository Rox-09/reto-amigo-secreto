
let amigos=[];

function agregarAmigo(){
    var texto=document.getElementById("amigo").value;
 
    amigos.push(texto)
    document.getElementById("amigo").value="";
    dibujaramigos(texto)
 }
function dibujaramigos(texto){
    let caja=document.getElementById("listaAmigos");
    if (texto==="") {
        alert("Debe existir texto"); return
    }



    caja.innerHTML+=`<li>${texto}</li>`
}
    
function sortearAmigo(){
    let sortear= Math.floor(Math.random() * amigos.length)
    let amigoseleccionado=amigos[sortear]
    let resultado=document.getElementById("resultado")
    resultado.innerHTML=amigoseleccionado
}

