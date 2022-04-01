//alert("Hola Mundo!!!");
//console.log("Este es otro mensaje..!!");

var nombre="Leonel Vargas";
let edad= 2;
//edad= "No quiero decirlo";
let titulo = document.getElementById('titulo')

let mensaje = "Mi nombre es " + nombre+" y mi edad es "+(edad+20);
console.log(mensaje);

titulo.innerHTML= mensaje;
titulo.style.color= '#0000ee';
titulo.style.textTransform='uppercase';

titulo.onclick=function(){
    titulo.innerHTML="****Hola,¿Que tal?****".toLowerCase();
    titulo.style.color= '#00eeee';
    //titulo.innerHTML=titulo.innerHTML.style.toLowerCase();

};