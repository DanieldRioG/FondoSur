document.addEventListener('DOMContentLoaded', (event) => {

    const imgGithubJavier = document.getElementById('imgGithubJavier');
    const imgGithubDiego = document.getElementById('imgGithubDiego');
    const imgGithubVictor = document.getElementById('imgGithubVictor');
    const imgGithubDaniel = document.getElementById('imgGithubDaniel');
    const imgGithubAdrian = document.getElementById('imgGithubAdrian');

    const imgGitGrupo = document.getElementById('imgGitGrupo');

    const btnMenu = document.querySelector('btnMenu');
    const nav = document.querySelector('.nav');



    mostrarMenu();
    moverCarrousel();



    btnMenu.addEventListener('click', () => {
        nav.classList.toggle('activo');
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






});




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

    btnMenu.addEventListener('click', () => {
        nav.classList.toggle('activo');
    });
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