const abrir=document.getElementById("abrirTutorial");

const fondo=document.getElementById("fondo");

const cerrar=document.getElementById("cerrar");

const frame=document.getElementById("tutorialFrame");


abrir.onclick=function(){

    frame.src="sent.html";

    fondo.style.display="block";

}


cerrar.onclick=function(){

    fondo.style.display="none";

    frame.src="";

}