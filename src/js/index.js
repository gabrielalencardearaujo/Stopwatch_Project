import { Cronometro } from './modulo.js' 
const cronometro = new Cronometro()

document.addEventListener('click', e => {
    const elementoClicado = e.target 
    
    if (elementoClicado.classList.contains('iniciar')) {
        clearInterval(cronometro.contador)
        cronometro.contadorCronometro()
        cronometro.relogio.style.color = 'black'
    }

    if (elementoClicado.classList.contains('pausar')) {
        clearInterval(cronometro.contador) 
        if (cronometro.relogio.innerText !== '00:00:00') {
            cronometro.relogio.style.color = 'red';
        }
    }

    if (elementoClicado.classList.contains('zerar')) {
        clearInterval(cronometro.contador)
        cronometro.relogio.style.color = 'black'
        cronometro.relogio.innerHTML = '00:00:00'
        cronometro.seg = 0
    }
})

