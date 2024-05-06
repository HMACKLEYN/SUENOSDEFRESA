let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill3 = document.getElementById('hill3');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');
let tree = document.getElementById('tree');
let hill6 = document.getElementById('hill6');


window-addEventListener('scroll', () =>{
    let value= window.scrollY;

    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.top = value * 1 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    hill3.style.left = value * 1.5 + 'px';
    hill1.style.top = value * 1 + 'px';
    tree.style.left = value * 1.5 + 'px';
    hill6.style.top = value * 1.5 + 'px';

});

let TABLERO = document.getElementById('TABLERO');
let PROFESOR = document.getElementById('PROFESOR');
let ANDREA = document.getElementById('ANDREA');
let ESCRITORIO = document.getElementById('ESCRITORIO');
let ESCRITORIO2 = document.getElementById('ESCRITORIO2');
let MESAS = document.getElementById('MESAS');
let PUESTOS = document.getElementById('PUESTOS');


window.addEventListener('scroll', () => {
    let scrollY = window.scrollY;
    let windowWidth = 1920;
    let speed = 0.1;

    let initialPosition = -90 ; 

    let newPosition = initialPosition + (scrollY * speed);


    TABLERO.style.left = newPosition * 1.6 + 'px';
    PROFESOR.style.left = newPosition * 1 + 'px';
    ANDREA.style.left = newPosition * -1 + 'px';
    ESCRITORIO.style.left = newPosition * -1 + 'px';
    ESCRITORIO2.style.left = newPosition * 2 + 'px';
    MESAS.style.left = newPosition * 4 + 'px';
    PUESTOS.style.left = newPosition * -3 + 'px';

});

let LAMPARAS = document.getElementById('LAMPARAS');
let COCINA1 = document.getElementById('COCINA1');
let COCINA2 = document.getElementById('COCINA2');
let COCINA3 = document.getElementById('COCINA3');
let CAMPESINA = document.getElementById('CAMPESINA');
let ANDREA2 = document.getElementById('ANDREA2');


window.addEventListener('scroll', () => {
    let scrollY = window.scrollY;
    let windowWidth = 1920;
    let speed = 0.10;

    let initialPosition = -200 ; 

    let newPosition = initialPosition + (scrollY * speed);


    LAMPARAS.style.left = newPosition * 1 + 'px';
    COCINA1.style.left = newPosition * -0.5 + 'px';
    COCINA2.style.left = newPosition * -1 + 'px';
    COCINA3.style.left = newPosition * 0.3 + 'px';
    CAMPESINA.style.left = newPosition * -1 + 'px';
    ANDREA2.style.left = newPosition * 0.5 + 'px';


});

let C50 = document.getElementById('C50');
let C51 = document.getElementById('C51');
let C52 = document.getElementById('C52');
let C53 = document.getElementById('C53');
let C54 = document.getElementById('C54');
let C55 = document.getElementById('C55');
let C56 = document.getElementById('C55');


window.addEventListener('scroll', () => {
    let scrollY = window.scrollY;
    let windowWidth = 1920;
    let speed = 0.10;

    let initialPosition = -500 ; 

    let newPosition = initialPosition + (scrollY * speed);


    C50.style.left = newPosition * + 'px';
    C51.style.left = newPosition * 0.5 + 'px';
    C52.style.left = newPosition * -0.5 + 'px';
    C53.style.left = newPosition * 0.5 + 'px';
    C54.style.left = newPosition * -0.8+ 'px';
    C55.style.left = newPosition * -1 + 'px';
    C56.style.left = newPosition * -0.5 + 'px';


});


    //

    document.addEventListener('mousemove', function(event) {
        let container = document.getElementById('parallax-container2');
        let layers = container.getElementsByClassName('parallax-layer');
    
        // Calcula la posición del cursor relativa al centro del contenedor
        let centerX = container.offsetWidth / 2;
        let centerY = container.offsetHeight / 2;
        let mouseX = event.clientX - centerX;
        let mouseY = event.clientY - centerY;
    
        // Mueve las imágenes en función de la posición del cursor
        for (let i = 0; i < layers.length; i++) {
            let depth = parseFloat(layers[i].getAttribute('data-depth'));
            let translateX = mouseX * depth;
            let translateY = mouseY * depth;
            layers[i].style.transform = `translate(${translateX}px, ${translateY}px)`;
        }
    });
















