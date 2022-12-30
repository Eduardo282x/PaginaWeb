function validar(){
    let user = document.getElementById('user').value;
    let pass = document.getElementById('pass').value;

    if(user == "Kevin" && pass == "1234"){
        alert('Acceso Exitoso');
        window.open("../InicioPerfil/InicioPerfil.html","_self");
    }
    else {
        alert('Acceso Denegado');
    }
}