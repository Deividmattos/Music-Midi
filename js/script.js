
function pomBt(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const teclasSomBt = document.querySelectorAll('.tecla');

let contador = 0;

while(contador < teclasSomBt.length){
      teclasSomBt[contador].onclick = function(){
            pomBt('#som_tecla_tom');
      };
     
      contador = contador +1;

      console.log(contador);
}



