function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
const listaDeTecla = document.querySelectorAll(".tecla");
for(let contador = 0;contador < listaDeTecla.length;contador++){
    const tecla = listaDeTecla[contador];
    const efeito = tecla.classList[1];
    const idAudio = `#som_${efeito}`;
    tecla.onclick = function(){
        tocaSom(idAudio);
    }
    tecla.onkeydown = function(){
        tecla.classList.add('atica');
    }
}
