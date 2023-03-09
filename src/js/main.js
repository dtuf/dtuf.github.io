window.onload = () =>{

}

function CambioColor(color){
    let interior = document.getElementById('alfombra_interior');
    let borde = document.getElementById('alfombra_borde');
    switch (color){
        case  'interior_A':
            interior.src = "src/images/alf_1_interior_A.png"
            break;
        case 'interior_B':
            interior.src = "src/images/alf_1_interior_B.png"
            break;
        case 'interior_C':
            interior.src = "src/images/alf_1_interior_C.png"
            break;
        case  'borde_A':
            borde.src = "src/images/alf_1_borde_A.png"
            break;
        case  'borde_B':
            borde.src = "src/images/alf_1_borde_B.png"
            break;
        case  'borde_C':
            borde.src = "src/images/alf_1_borde_C.png"
            break;
    }
}