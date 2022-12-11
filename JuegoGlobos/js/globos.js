import CuentaAtrasSegundos from "./CuentaAtrasSegundos.js";
let dificultad;
const explotados = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
const HMARGIN = [];
const WMARGIN = [];
let usuario;
let tmax;
let tmin;
let last;
document.addEventListener("DOMContentLoaded", function () {
    HMARGIN.push(...margenesVerticales());
    WMARGIN.push(margenesHorizontales());
    usuario = localStorage.getItem('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
    if (usuario === null);
    back();
    document.getElementById('salir').addEventListener('click', function () { back(); });
    document.getElementById('usuario').textContent = 'Bienvenid@ ' + usuario;
    document.getElementById('start').addEventListener('click', function () { start() });
    document.getElementById('restart').addEventListener('click', function () { restart() });
    selectDifficulty();
    document.getElementById('dificultad').addEventListener('mouseup', function () { selectDifficulty(); });
    for (let i = 1; i < 21; i++)
        document.getElementById(`globo${i}`).addEventListener('mousedown', function () { explode(`globo${i}`) });
    //Por algun motivo click daba fallos de precision;
});
function back() { location.href = '/Home/home.html'; }
function start() {
    tmax = 0;
    tmin = 60000;
    setTimeout(function () { last = new Date(); }, dificultad);
    document.getElementById('selector').style.display = 'none';
    document.getElementById('contador').style.display = 'block';
    atras(new CuentaAtrasSegundos(dificultad / 1000));
    setTimeout(function () { document.getElementById('restart').style.visibility = 'hidden'; }, dificultad + 1000);
    setTimeout(function () { document.getElementById('globos').style.visibility = 'visible'; }, dificultad);
    const globos = document.getElementsByClassName('globo');
    for (let i = 0; i < 20; i++)
        globos.item(i).style.transition = (dificultad / 1000) + 's linear';
    callMovimiento();
    setTimeout(function () { atras(new CuentaAtrasSegundos(60)); }, dificultad);
    setTimeout(function () { if (!check()) lose(); }, dificultad + 60000);
}
function restart() {
    document.getElementById('resultados').style.display = 'none';
    document.getElementById('selector').style.display = 'block';
    document.getElementById('globos').style.visibility = 'hidden';
    for (let i = 1; i < 21; i++)
        regen(`globo${i}`);
}
function regen(id) {
    const element = document.getElementById(id);
    element.children[1].hidden = true;
    element.children[0].style.display = "block";
    setTimeout(function () { element.style.display = "block"; });
    explotados[parseInt(id.replace('globo', '')) - 1] = false;
}
function selectDifficulty() {
    const valor = document.getElementById('dificultad').value;
    document.getElementById('difficultyView').textContent = valor;
    dificultad = (11 - valor) * 1000;
}
function explode(id) {
    tiempoEntrePum();
    const element = document.getElementById(id);
    element.children[1].hidden = false;
    element.children[0].style.display = "none";
    setTimeout(function () { element.style.display = "none"; }, 1000);
    explotados[parseInt(id.replace('globo', '')) - 1] = true;
    if (check())
        win();
}
function tiempoEntrePum() {
    const diferencia = (new Date()).getTime() - last.getTime();
    if (diferencia < tmin)
        tmin = diferencia;
    if (diferencia > tmax)
        tmax = diferencia;
    last = new Date();
}
function callMovimiento() {
    const globos = document.getElementsByClassName('globo');
    for (let i = 0; i < 20; i++)
        movimiento(globos.item(i));
}
function movimiento(element) {
    //Puede que este en pixeles y con tamaños absolutos pero es responsive
    element.style.top = randomHeightMargin() + "px";
    element.style.left = randomWithMargin() + "px";
    if (parseInt(element.style.top));
    setTimeout(function () { movimiento(element); }, dificultad);
}
function randomHeightMargin() {
    let alto = HMARGIN[0] + (Math.random() * (document.body.children.item(1).clientHeight - HMARGIN[1]));
    return alto;
}
function randomWithMargin() {
    let ancho = (Math.random() * (document.body.children.item(1).clientWidth - 48));
    return ancho;
}
function check() {
    let allTrue = true;
    for (let i = 0; i < explotados.length && allTrue; i++)
        if (!explotados[i])
            allTrue = false;
    return allTrue;
};
function margenesVerticales() {
    return [
        document.getElementById('cabecera').clientHeight + document.getElementById('globo1').clientHeight,
        document.getElementById('globo1').clientHeight
    ];
}
function margenesHorizontales() {
    return document.getElementById('globo1').clientWidth;
}
function atras(contador) {
    let segundos = contador.clock();
    if (segundos < 10)
        segundos = `0${segundos.toString()}`;
    document.getElementById('contador').textContent = segundos;
    if (segundos != '00')
        setTimeout(function () { atras(contador); }, 1000);
    else
        document.getElementById('restart').style.visibility = 'visible';
}
function win() {
    const tiempo = 'Has acabado en: ' + (60 - document.getElementById('contador').textContent) + 's';
    const save = true;
    viewPortResult(tiempo, save);
}
function lose() {
    document.getElementById('globos').style.visibility = 'hidden';
    const tiempo = 'FAILED SUCCESFULLY';
    const save = false;
    viewPortResult(tiempo, save);
}
function viewPortResult(tiempo, save) {
    document.getElementById('resultados').style.display = 'block';
    document.getElementById('contador').style.display = 'none';
    document.getElementById('tiempo').textContent = tiempo;
    document.getElementById('tmax').textContent = (tmax / 1000) + 's';
    document.getElementById('tmin').textContent = (tmin / 1000) + 's';
    let lista = listado(tiempo, save);
    const ubicacion = document.getElementById('historico');
    ubicacion.textContent = '';
    for (let i = 0; i < lista.length; i++) {
        const span = document.createElement('p');
        const text = document.createTextNode(`Posición ${i + 1}: ${lista[i]}`);
        span.appendChild(text);
        ubicacion.appendChild(span);
    }
}
function listado(tiempo, save) {
    let lista;
    let index;
    //Reordenado para evitar nesting
    if (localStorage.getItem('lista') == null)
        lista = [];
    else
        lista = JSON.parse(localStorage.getItem('lista'));
    let puntuacion;
    for (let i = 0; i < lista.length; i++)
        if (lista[i][0] == usuario) {
            index = i;
            puntuacion = lista[i][1];
        }
    if (index == undefined) {
        index = lista.length;
        lista.push([usuario, []]);
        puntuacion = [];
    }
    //Inversion para evitar nesting
    if (!save)
        return puntuacion;
    tiempo = tiempo.replace('Has acabado en: ', '').replace('s', '');
    if (puntuacion.length < 10)
        puntuacion.push(tiempo);
    else if (tiempo < Math.min(lista))
        puntuacion.splice(puntuacion.indexOf(Math.min(puntuacion)), 1, tiempo);
    puntuacion.sort(ordenMenorMayor);
    lista[index] = [usuario, puntuacion];
    localStorage.setItem('lista', JSON.stringify(lista));
    console.log(lista);
    return puntuacion;
};
function ordenMenorMayor(a, b) {
    return a - b;
}