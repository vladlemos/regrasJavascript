/*
Criado em 01/2019
Melhorar Regra de negócio 
*/


// Globais
var nomeMeses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro','Novembro', 'Dezembro'];
var nomeDiaSemana = ['Domingo','Segunda', 'Terça', 'Quarta','Quinta', 'Sexta','Sábado'];


var hoje = new Date('2019,09,15');

var numeroDia = hoje.getDate(); // pegar o dia ex. 13
var diaDaSemana = nomeDiaSemana[hoje.getDay()]; // colocar o nome do dia da semana
var numeroMes = hoje.getMonth(); // pegar o nº do mês



function diaUtil(){
    // vi um repo no github 
}


function rotinaEmAndamento(){
 
    if (parseInt(numeroDia) >= 14){
        return true;
    } else {
        return false;
    } 

}

function ultimoMesdoAno(){
// mes 11 = dezembro devido a começar com zero;
    if (numeroMes ==11){
        return true;
    } else{
        return false;
    }
}


function mensagemProximoRepasse(){
    
    if (rotinaEmAndamento() && !ultimoMesdoAno()){
        return "A próxima rotina de XXXXXXXXX será realizada em " + nomeMeses[numeroMes + 1]
    }

    if (!rotinaEmAndamento() && !ultimoMesdoAno()){
        return "A próxima rotina de xxxxxxxxxxxx será realizada em " + nomeMeses[numeroMes]
    }

    if (rotinaEmAndamento() && ultimoMesdoAno()){
        return "A próxima rotina de xxxxxxx será realizada em " + nomeMeses[numeroMes -11]
    }

    if (!rotinaEmAndamento() && ultimoMesdoAno()){
        return "A próxima rotina de xxxxxxxx será realizada em " + nomeMeses[numeroMes]
    }
}


// captura elemento no HTML
var routineDay = document.querySelector("#dia-rotina");

// ação final
routineDay.textContent =  numeroDia +"/" + (numeroMes+1) + " Resultado: " + mensagemProximoRepasse();

