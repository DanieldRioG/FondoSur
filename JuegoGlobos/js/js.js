document.addEventListener('DOMContentLoaded', (event) => {

    const logo = document.querySelectorAll('#logo');
    const imgGithubJavier = document.getElementById('imgGithubJavier');
    const imgGithubDiego = document.getElementById('imgGithubDiego');
    const imgGithubVictor = document.getElementById('imgGithubVictor');
    const imgGithubDaniel = document.getElementById('imgGithubDaniel');
    const imgGithubAdrian = document.getElementById('imgGithubAdrian');

    const imgGitGrupo = document.getElementById('imgGitGrupo');

    const cerrarSesion = document.querySelector('.cerrarSesion');


    mostrarMenu();
    moverCarrousel();

    logo.forEach((e)=>{
        e.addEventListener('click', () => {
            linkHome();
        });
    });
    

    imgGithubJavier.addEventListener('click', () => {
        linkGithubUno();
    });

    imgGithubDiego.addEventListener('click', () => {
        linkGithubdDos();
    });

    imgGithubVictor.addEventListener('click', () => {
        linkGithubTres();
    });

    imgGithubDaniel.addEventListener('click', () => {
        linkGithubCuatro();
    });

    imgGithubAdrian.addEventListener('click', () => {
        linkGithubCinco();
    });

    imgGitGrupo.addEventListener('click', () => {
        linkGithubGrupo();
    });

    cerrarSesion.addEventListener('click',()=>{
        cerrarLaSesion();
    });

});


function linkHome() {
    window.location.href = '../Home/home.html';
}

function linkGithubUno() {
    window.location.href = 'https://github.com/javieralesanco';
}

function linkGithubdDos() {
    window.location.href = 'https://github.com/DiegoBarrientosM';
}

function linkGithubTres() {
    window.location.href = 'https://github.com/VictorS19';
}

function linkGithubCuatro() {
    window.location.href = 'https://github.com/DanieldRioG';
}
function linkGithubCinco() {
    window.location.href = 'https://github.com/adriibanez';
}

function linkGithubGrupo() {
    window.location.href = 'https://github.com/DanieldRioG/FondoSur';
}


function mostrarMenu() {
    const btnMenu = document.querySelector('.btnMenu');
    const nav = document.querySelector('.nav');
    let contadorClicks = 0;

    btnMenu.addEventListener('click', () => {
        contadorClicks ++;
        
        if (contadorClicks === 5) {
            nav.classList.toggle('activo');
            easterEgg();
            nav.classList.toggle('activo');
        }

         nav.classList.toggle('activo');
    });
}

function easterEgg(){
    const menu = document.querySelector('.menu');
    const li = document.createElement('li');
    li.setAttribute('class','menu_item');
    const a = document.createElement('a');
    a.textContent = 'No Hacks';
    a.setAttribute('class','menu_link');
    a.setAttribute('href','home.html');
    li.append(a);
    menu.append(li);
}

function moverCarrousel() {
    const containerImg = document.querySelector('.containerImg');
    const punto = document.querySelectorAll('.punto');

    punto.forEach((e, i) => {
        punto[i].addEventListener('click', () => {

            let posicion = i;
            let desplazamiento = posicion * -50;

            containerImg.style.transform = `translateX(${desplazamiento}%)`;

            punto.forEach((e, i) => {
                punto[i].classList.remove('activo');
            });
            punto[i].classList.add('activo');
        });
    });
}

function cerrarLaSesion(){
    localStorage.removeItem('usuario');
    location.href = '../Login/login.html';

}
