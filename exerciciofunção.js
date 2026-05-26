let vitoria = 132
let derrota = 50 

function saldo (vitoria, derrota ) {
       //console.log(`O saldo é ${vitoria - derrota}`);
       return vitoria - derrota
}


function verificarVitoria(wins) {

        if (wins >= 101) return "Imortal"
        if (wins >= 91)  return "Lendário"
        if (wins >= 81)  return "Diamante"
        if (wins >= 51)  return "Ouro"
        if (wins >= 21)  return "Prata"
        if (wins >= 11)  return "Bronze"
        return "Ferro"
}


function heroi( nome,vitoria, derrota) {
   
        const x = saldo(vitoria, derrota)
        const elo = verificarVitoria(x)

        return `O Herói ${nome} tem saldo de ${x} vitorias e está no nível de ${elo}`
    
}

const resultado = heroi("jihyo", vitoria, derrota)  
console.log(resultado)                     