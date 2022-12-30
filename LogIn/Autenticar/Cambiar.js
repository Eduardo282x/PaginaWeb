function cambio(){
    let cambio = document.getElementById('cambio');
    let btn = document.getElementById('btn');

    btn.innerHTML = `<button onclick="validar()" style="--clr:#007910">Enviar</button>`
    cambio.innerHTML = `<i><ion-icon name="mail"></ion-icon></i>
    <input id="int" type="text">`
}

function validar(){
    let title = document.querySelector('h2');
    let cambio = document.getElementById('cambio');
    let msg = document.getElementById('msgBox');
    let txt = document.getElementById('int').value;

    if( txt == ""){
        alert('Llene el campo');
    } else{
        msg.style.visibility = "visible";
        title.innerHTML = "Ingrese el codigo que se ha enviado al correo"
        cambio.innerHTML = `
        <input id="int" type="text">`
    }
}
