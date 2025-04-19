//document.write("<h1> Bienvenido a la UP </h1>");
//alert("Registro de Alta");

//["Bienvenido a", "UP"].forEach(alert);

//let numero1 =23;
//let numero2= 34;
//let operacion = numero1 + numero2;
//console.log(operacion)
//alert(operacion);
 //let number1 = 10;
 //let number2 = 5;
//let operacion2 = number1 * number2;
//console.log(operacion2);


let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("edit");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("cmasmas");
        habilidades[3].classList.add("photoshop");
        habilidades[4].classList.add("javascript");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("modales");
        habilidades[8].classList.add("creatividad");
        habilidades[9].classList.add("modales");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades u-u
window.onscroll = function(){
    efectoHabilidades();
}