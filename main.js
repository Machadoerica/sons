function tocaSom(idElementoAudio){
    const elemento = document.querySelector(idElementoAudio);
        if(elemento && elemento.localName === 'audio'){
            elemento.play();
        }else{
        console.log("elemento não encontrado");
        }
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
        if(evento.code === 'Space' || evento.code === 'Enter'){
        tecla.classList.add('ativa');
        }
    }
    tecla.onkeydown = function(){
        tecla.classList.remove('ativa');
    }
}
