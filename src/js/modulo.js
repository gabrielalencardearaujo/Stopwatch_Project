export class Cronometro{
    constructor() {
        this.relogio = document.querySelector('.relogio') 
        this.seg = 0;
        this.contador;
    }

    contadorCronometro() {
        this.contador = setInterval(() => {
            this.seg++
            this.relogio.innerText = this.criaContadorCronometro(this.seg)
        }, 1000);
    }

    criaContadorCronometro(seg) {
        let data = new Date(this.seg * 1000) 

        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        })
    }
}
