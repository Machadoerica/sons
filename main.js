function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
let contador = 0;
while(contador < listaDeTecla.length){
    const tecla = listaDeTecla[contador];
    const efeito = tecla.classList[1];
    const idAudio = "#som_"+ efeito;
    tecla.onclick = function(){
        tocaSom(idAudio);
    }
    contador = contador + 1;
    console.log(contador);
}
frfr4