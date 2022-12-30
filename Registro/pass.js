function eyes(){
    let icono = document.getElementById('eye');
    let txt = document.getElementById('txt6');

    if (txt.type =="password"){
        txt.type = "text";
        icono.innerHTML = `<ion-icon name="eye-off"></ion-icon>`;
    } else{
        txt.type ="password"
        icono.innerHTML = `<ion-icon name="eye"></ion-icon>`
    }
}

function valid(){
    let ico = document.getElementById('chk');
    let txtuser = document.getElementById('txt').value;
    txtuser.length != "" ? ico.style.visibility = "visible": ico.style.visibility = "hidden";
}
function valid2(){
    let ico = document.getElementById('chk2');
    let txtuser = document.getElementById('txt2').value;
    txtuser.length != "" ? ico.style.visibility = "visible": ico.style.visibility = "hidden";
}
function valid3(){
    let ico = document.getElementById('chk3');
    let txtuser = document.getElementById('txt3').value;
    txtuser.length != "" ? ico.style.visibility = "visible": ico.style.visibility = "hidden";
}
function valid4(){
    let ico = document.getElementById('chk4');
    let txtuser = document.getElementById('txt').value;
    txtuser.length != "" ? ico.style.visibility = "visible": ico.style.visibility = "hidden";
}
function valid5(){
    let ico = document.getElementById('chk5');
    let txtuser = document.getElementById('txt5').value;
    txtuser.length != "" ? ico.style.visibility = "visible": ico.style.visibility = "hidden";
}
function valid6(){
    let ico = document.getElementById('chk6');
    let txtuser = document.getElementById('txt6').value;
    txtuser.length != "" ? ico.style.visibility = "visible": ico.style.visibility = "hidden";
}

function pagina(){
    let txt = document.getElementById('txt').value;
    let txt2 = document.getElementById('txt2').value;
    let txt3 = document.getElementById('txt3').value;
    let txt4 = document.getElementById('txt4').value;
    let txt5 = document.getElementById('txt5').value;
    let txt6 = document.getElementById('txt6').value;

    if(txt != "" && txt2 != "" && txt3 != "" && txt4 != "" && txt6 != ""){
        window.open("../Inicio.html","_self");
    }

}