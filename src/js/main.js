window.onload = () =>{

}

function CambioColor(color){
    let interior = document.getElementById('alfombra_interior');
    let borde = document.getElementById('alfombra_borde');
    switch (color){
        case  'interior_A':
            interior.style.filter = "invert(82%) sepia(87%) saturate(4508%) hue-rotate(105deg) brightness(100%) contrast(105%)";
            break;
        case 'interior_B':
            interior.style.filter = "invert(85%) sepia(21%) saturate(7014%) hue-rotate(358deg) brightness(101%) contrast(102%)";
            break;
        case 'interior_C':
            interior.style.filter = "invert(82%) sepia(25%) saturate(4967%) hue-rotate(228deg) brightness(81%) contrast(84%)";
            break;
        case  'borde_A':
            borde.style.filter = "invert(97%) sepia(8%) saturate(45%) hue-rotate(130deg) brightness(98%) contrast(92%)";
            break;
        case  'borde_B':
            borde.style.filter = "invert(8%) sepia(68%) saturate(447%) hue-rotate(6deg) brightness(95%) contrast(99%)";
            break;
        case  'borde_C':
            borde.style.filter = "invert(57%) sepia(38%) saturate(517%) hue-rotate(122deg) brightness(95%) contrast(87%)";
            break;
    }
}