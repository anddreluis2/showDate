const h1 = document.querySelector('.container h1');
const data = new Date('Tue Jan 25 2022 20:08:00');

let diaSemana = data.getDay();

function getDiaSemanaTexto(diaSemana) { 
   const diasSemana = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira',
'Sexta-Feira', 'Sábado'];
    return diasSemana[diaSemana];
}

function getNomeMes(numeroMes) { 
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 
'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
return meses[numeroMes];
}
function zeroAEsquerda(num){
    return ('0' + num).slice(-2);

}

function criaData(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes);
    console.log(data);
    return (`${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()}` +
    ` ${data.getHours()}:${zeroAEsquerda(data.getMinutes())}`
    )
    
}
h1.innerHTML = criaData(data);