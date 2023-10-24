function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
document.querySelector('.tecla_pom').onclick = tocaSomPom;
const listaDeTecla = document.querySelectorAll('.tecla')
listaDeTecla[0].onclick = tocaSomPom;
let contador = 0;
while(contador < listaDeTecla.length ){
    const efeito = listaDeTecla[contador].classList[1];
    const idAudio = "#som_"+efeito;
    listaDeTecla[contador].onclick = function(){
        tocaSom(idAudio);
    }
    contador = contador + 1;
    console.log(contador);
}