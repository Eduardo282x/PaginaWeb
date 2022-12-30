let a = 1;

function move(){
    let circle = document.getElementById('chk2');
    let to = document.getElementById('chk')

    if (a == 1){
        circle.style.marginLeft = "-2px";
        to.style.background = "#660000"
        a = 2;
    } else{
        circle.style.marginLeft = "30px";
        to.style.background = "#007910"
        a =1;
    }
}

function move2(){
    let circle = document.getElementById('chk3');
    let to = document.getElementById('chk4')

    if (a == 1){
        circle.style.marginLeft = "-2px";
        to.style.background = "#660000"
        a = 2;
    } else{
        circle.style.marginLeft = "30px";
        to.style.background = "#007910"
        a =1;
    }
}

function ocultar(){
    window.location.href = "../../ProductosPlantas/Producto.html"
}