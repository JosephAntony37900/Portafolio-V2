// Variable para controlar el menú
let menuVisible = false;

// Función que oculta o muestra el menú
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// Función que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        // Technical skills
        habilidades[0].classList.add("golang");
        habilidades[1].classList.add("python");
        habilidades[2].classList.add("javascript");
        habilidades[3].classList.add("java");
        habilidades[4].classList.add("devops");
        habilidades[5].classList.add("hacking");
        // Soft skills
        habilidades[6].classList.add("comunicacion");
        habilidades[7].classList.add("trabajo");
        habilidades[8].classList.add("liderazgo");
        habilidades[9].classList.add("resolucion");
        habilidades[10].classList.add("aprendizaje");
        habilidades[11].classList.add("adaptabilidad");
    }
}

function descargarCV(){
    const link = document.createElement('a');
    link.href = './files/JoseAntonio-CV.pdf';
    link.download = 'JoseAntonio-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function enviarMensaje(){
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;
    const tema = document.getElementById('tema').value;
    const mensaje = document.getElementById('mensaje').value;

    if(nombre && email && mensaje){
        alert('¡Gracias por tu mensaje, ' + nombre + '! Te contactaré pronto.');
        
        document.getElementById('nombre').value = '';
        document.getElementById('telefono').value = '';
        document.getElementById('email').value = '';
        document.getElementById('tema').value = '';
        document.getElementById('mensaje').value = '';
    } else {
        alert('Por favor completa al menos tu nombre, email y mensaje.');
    }
}

window.onscroll = function(){
    efectoHabilidades();
}

document.addEventListener('DOMContentLoaded', function() {
    const btnCV = document.getElementById('btnDescargarCV');
    if(btnCV){
        btnCV.addEventListener('click', descargarCV);
    }
});