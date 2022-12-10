window.addEventListener('DOMContentLoaded', () => {
    const login = document.getElementById("login");
    login.addEventListener("click", () => {
        hacerLogin();
    });
});

function hacerLogin() {
    let usuario = document.getElementById("userI").value;
    let password = document.getElementById("passI").value;
    let array = JSON.parse(localStorage.getItem("datos"));
    let user = array[0];
    let pass = array[1];
    console.log(pass);
    if (usuario == user && password == pass) {
        location.href = "/FondoSur/Home/home.html";
    } else {
        let error = document.getElementById("error")
        error.textContent = "Usuario o contraseña incorrectos";
        error.style.color = "red";
        document.getElementById("passI").value = "";
    }
}

