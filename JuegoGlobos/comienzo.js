let dificultad;
const explotados = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
const HMARGIN = [];
const WMARGIN = [];
let usuario;
document.addEventListener("DOMContentLoaded", function () {
    HMARGIN.push(...margenesVerticales());
    WMARGIN.push(margenesHorizontales());
    usuario = localStorage.getItem('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
    if (usuario === null);//back();
    document.getElementById('salir').addEventListener('click', function () { back(); });
    document.getElementById('usuario').textContent = 'Bienvenid@ ' + usuario;
    document.getElementById('start').addEventListener('click', function () { start() });
    selectDifficulty();
    document.getElementById('dificultad').addEventListener('mouseup', function () { selectDifficulty(); });
});
function back() { location.href = '/FondoSur/Home/home.html'; }
function start() {
    document.getElementById('selector').style.visibility = 'hidden';
    setTimeout(function () { document.getElementById('globos').style.visibility = 'visible'; }, dificultad);
    for (let i = 1; i < 21; i++)
        document.getElementById(`globo${i}`).addEventListener('mousedown', function () { explode(`globo${i}`) });
    //Por algun motivo click daba fallos de precision;
    const globos = document.getElementsByClassName('globo');
    for (let i = 0; i < 20; i++)
        globos.item(i).style.transition = (dificultad / 1000) + 's linear';
    callMovimiento();
}
function selectDifficulty() {
    const valor = document.getElementById('dificultad').value;
    document.getElementById('difficultyView').textContent = valor;
    dificultad = (11 - valor) * 1000;
}
function explode(id) {
    const element = document.getElementById(id);
    element.children[1].hidden = false;
    element.children[0].style.display = "none";
    setTimeout(function () { element.style.display = "none"; }, 1000);
    explotados[parseInt(id.replace('globo', '')) - 1] = true;
    check();
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
    if (allTrue)
        alert('Hizo pum');
};
function margenesVerticales() {
    return [
        document.getElementById('cabecera').clientHeight,
        document.getElementById('globo1').clientHeight
    ];
}
function margenesHorizontales() {
    return document.getElementById('globo1').clientWidth;
}