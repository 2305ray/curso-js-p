const h1 = document.querySelector('.container h1');
const data = new Date();
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};

h1.innerHTML = data.toLocaleString('pt-BR', opcoes);

/*

const h1 = document.querySelector('.container h1');
const data = new Date();

function zeroAEsquerda (num) {
return num >= 10 ? num : `0${num}`;
}


function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo'
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda-Feira'
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça-Feira'
            return diaSemanaTexto;  
            
        case 3:
            diaSemanaTexto = 'Quarta-Feira'
            return diaSemanaTexto;    
        case 4:
            diaSemanaTexto = 'Quinta-Feira'
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta-Feira'
            return diaSemanaTexto;

        case 6:
            diaSemanaTexto = 'Sábado'
             return diaSemanaTexto;

    }
    
}

function getMesTexto(diaMes) {
    let diaMesTexto;

    switch (diaMes) {
        case 0:
            diaMesTexto = 'Janeiro'
            return diaMesTexto;
        case 1:
            diaMesTexto = 'Fevereiro'
            return diaMesTexto;
        case 2:
            diaMesTexto = 'Março'
            return diaMesTexto;  
            
        case 3:
            diaMesTexto = 'Abril'
            return diaMesTexto;    
        case 4:
            diaMesTexto = 'Maio'
            return diaMesTexto;
        case 5:
            diaMesTexto = 'Junho'
            return diaMesTexto;

        case 6:
            diaMesTexto= 'Julho'
             return diaMesTexto;

        case 7:
            diaMesTexto = 'Agosto'
            return diaMesTexto;
        case 8:
            diaMesTexto = 'Setembro'
            return diaMesTexto;
        case 9:
            diaMesTexto = 'Outubro'
            return diaMesTexto;  
                
        case 10:
             diaMesTexto = 'Novembro'
            return diaMesTexto;    
        case 11:
            diaMesTexto = 'Dezembro'
            return diaMesTexto;
        

    }

}

h1.innerHTML = `${getDiaSemanaTexto(data.getDay())}, ` + 
`${data.getDate()} de ${getMesTexto(data.getMonth())} de ` + 
`${data.getFullYear()} ás ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`;

*/




const h1 = document.querySelector('.container h1');
const date = new Date();

function getDiaSemanaTexto (diaSemana) {
    const diasSemanas = ['Domingo', 'Segunda', 'terça', 'quarta', 
        'quinta', 'sexta', 'sábado']
        return diasSemanas[diaSemana];
}

function getNomeMes(numeroMes) {
    const meses = ['janeiro', 'fevereiro', 'março' ,'abril', 'maio',
         'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
        return meses[numeroMes];
 }


