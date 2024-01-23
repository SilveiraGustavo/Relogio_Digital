const horas = document.getElementById('hora');
const minutos = document.getElementById('minuto');
const segundos = document.getElementById('segundo');


const Relogio = setInterval(function time() {
    let dateToday = new Date();

    let hora = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();


    if(hora < 10){
        hora = '0' + hora
    }else if(min < 10){
        min = '0' + min
    }else if (sec < 10){
        sec = '0' + sec
    }



    horas.textContent = hora;
    minutos.textContent = min;
    segundos.textContent = sec;
})