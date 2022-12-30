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

function ver(){
    let menu = document.getElementById('menu');
    menu.style.display= "block"
}

function ocultar(){
    let menu = document.getElementById('menu');
    menu.style.display= "none"
    window.location.href = "./Planta/Planta.html";
}

function mostrar(){
    let i =  document.getElementById('si');
    i.style.visibility = "visible"
}

function llevar(){
    window.location.href = "../MisCompras/Compras.html"
}