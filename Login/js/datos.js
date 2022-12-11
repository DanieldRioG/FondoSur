addEventListener('DOMContentLoaded', () => {
    const submit = document.getElementById("registrar");
    submit.addEventListener("click", () => {
        crear();
    });
});

function crear() {
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;
    let confirm = document.getElementById("confirm").value;

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let fnac = document.getElementById("fnac").value;

    let direccion = document.getElementById("direccion").value;
    let telefono = document.getElementById("telefono").value;
    let tarjeta1 = document.getElementById("numero1").value;
    let tarjeta2 = document.getElementById("numero2").value;
    let tarjeta3 = document.getElementById("numero3").value;
    let tarjeta4 = document.getElementById("numero4").value;

    let correo = document.getElementById("correo").value;
    let linkGit = document.getElementById("linkGit").value;
    let linkLinked = document.getElementById("linkLinked").value;

    if (validarUser(user) && validarPass(pass, confirm) && validarNombre(nombre) && validarApellido(apellido) &&
        validarCorreo(correo) && validarTelefono(telefono) && validarTarjeta(tarjeta1, tarjeta2, tarjeta3, tarjeta4)) {
        let numeroTarjeta = '' + tarjeta1 + tarjeta2 + tarjeta3 + tarjeta4;
        const arrayDatos = [user, pass, nombre, apellido, fnac, direccion, telefono, numeroTarjeta, correo, linkGit, linkLinked];
        localStorage.setItem("datos", JSON.stringify(arrayDatos));
        alert("Registrado Correctamente");
    }
}
function validarUser(user) {
    if (!(user == '' || undefined || null)) {
        if (user.length >= 3) {
            return true;
        }
    } else {
        return false;
    }
}
function validarPass(pass, confirm) {
    if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{5,}$/.test(pass)) {
        if (pass == confirm) {
            return true;
        }
    } else {
        return false;
    }
}
function validarNombre(nombre) {
    if (!(nombre == '' || undefined || null)) {
        if (nombre.length >= 2) {
            return true;
        }
    } else {
        return false;
    }
}
function validarApellido(apellido) {
    if (!(apellido == '' || undefined || null)) {
        if (apellido.length >= 2) {
            return true;
        }
    } else {
        return false;
    }
}
function validarTelefono(telefono) {
    if (/^\d{3}\d{3}\d{3}$/.test(telefono)) {
        return true;
    } else {
        return false;
    }
}
function validarTarjeta(tarjeta1, tarjeta2, tarjeta3, tarjeta4) {
    if (!(isNaN(tarjeta1) && isNaN(tarjeta2) && isNaN(tarjeta3) && isNaN(tarjeta4))) {
        return true;
    } else {
        return false;
    }
}
function validarCorreo(correo) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(correo)) {
        return true;
    } else {
        return false;
    }
}

function volver() {
    location.href = "login.html";
}

