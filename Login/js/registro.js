addEventListener('DOMContentLoaded', () => {
    const form1 = document.getElementById("form1");
    const form2 = document.getElementById("form2");
    const form3 = document.getElementById("form3");
    const form4 = document.getElementById("form4");

    const volver = document.getElementById("volver");
    const siguiente1 = document.getElementById("siguiente1");
    const siguiente2 = document.getElementById("siguiente2");
    const siguiente3 = document.getElementById("siguiente3");
    const anterior1 = document.getElementById("anterior1");
    const anterior2 = document.getElementById("anterior2");
    const anterior3 = document.getElementById("anterior3");

    const progreso = document.getElementById("progreso");

    volver.addEventListener("click", () => {
        location.href = "login.html";
    });

    siguiente1.addEventListener("click", () => {
        form1.style.left = "-500px";
        form2.style.left = "50px";
        progreso.style.width = "195px";
    });

    anterior1.addEventListener("click", () => {
        form1.style.left = "50px";
        form2.style.left = "500px";
        progreso.style.width = "90px";
    });

    siguiente2.addEventListener("click", () => {
        form2.style.left = "-500px";
        form3.style.left = "50px";
        progreso.style.width = "300px";
    });

    anterior2.addEventListener("click", () => {
        form2.style.left = "50px";
        form3.style.left = "500px";
        progreso.style.width = "195px";
    });

    siguiente3.addEventListener("click", () => {
        form3.style.left = "-500px";
        form4.style.left = "50px";
        progreso.style.width = "400px";
    });

    anterior3.addEventListener("click", () => {
        form3.style.left = "50px";
        form4.style.left = "500px";
        progreso.style.width = "300px";
    });
});