function zeroAEsquerda(numero){
    return `0${numero}`
}

function date_page(){
    let _pageHora = document.querySelector('#hora')
    let _pageMinutos = document.querySelector('#minuto')
    let _pageSegundos = document.querySelector('#segundo')
    let _pageExtra = document.querySelector('#date_extra')
    

    const _arraySemana =  ["Domingo", "Segunda-Feira", "Terça-Feira", 
    "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];

    const _arrayMes = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto',
     'Setembro', 'Outubro', 'Novembro', 'Dezembro']

    let date = new Date();
    let hora = date.getHours()
    let minutos = date.getMinutes()
    let segundos = date.getSeconds()
    let mes = date.getMonth()
    let semana = date.getDay()
    let ano = date.getFullYear()

    _pageExtra.textContent = `${_arrayMes[mes]}, ${_arraySemana[semana]} ${ano}`


    hora = hora >= 10 ? hora : zeroAEsquerda(hora)
    minutos = minutos >= 10 ? minutos : zeroAEsquerda(minutos)
    segundos = segundos >= 10 ? segundos : zeroAEsquerda(segundos)

    _pageHora.textContent = hora
    _pageMinutos.textContent = minutos
    _pageSegundos.textContent = segundos

}

date_page()
setInterval(date_page, 1000)