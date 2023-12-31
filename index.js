//Chamando a função  

calcularRankDoJogador(50, 2)

//Função para saber o rank do jogador 

function calcularRankDoJogador(vitorias, derrotas){

//Variavel para calcular o saldo de vitorias e patente do jogador 
    
    let saldoDeVitorias = vitorias - derrotas 
    let patente = [] 
    
//Definindo a patente do jogador com base em suas vitorias e derrotas 
    
    if (saldoDeVitorias <= 10 ){
        patente = "Ferro"
    }

        else if (saldoDeVitorias >= 11 && saldoDeVitorias <= 20) {
         patente = "Bronze"
    }
    
        else if (saldoDeVitorias >= 21 && saldoDeVitorias <= 50) {
        patente = "Prata"
    }
    
        else if (saldoDeVitorias >= 51 && saldoDeVitorias <= 80) {
        patente = "Ouro"
    }
    
        else if (saldoDeVitorias >= 81 && saldoDeVitorias <= 90) {
        patente = "Diamante"
    }

        else if (saldoDeVitorias >= 91 && saldoDeVitorias <= 101) {
        patente = "Lendário"
    }

        else {
        patente = "Imortal"
    }
    
    console.log("O Herói tem o saldo de " +[saldoDeVitorias] + " vitórias e está no nível de " + [patente])
 
}

