let personagem = {
     heroi: "jihyo",
     elo: 9553,
}

const pontosElo = {
    Ferro:     {pontos:1000},
    Bronze:    {pontos:1001},
    Prata:     {pontos:2001},
    Ouro:      {pontos:5001},
    Platina:   {pontos:7001},
    Ascendente:{pontos:8001}, 
    Imortal:   {pontos:9001},
    Radiante:  {pontos:10001},
}    
  

let felino  = ""

if (personagem.elo < pontosElo.Imortal.pontos) {
   felino = "gatinho da ranked"
} else {
    felino = "leão da ranked"
} 

let status = ""

function getElo(valor){
    if (valor < pontosElo.Bronze.pontos) {
        return  "Ferro"
    } else if (valor < pontosElo.Prata.pontos) {
        return  "Bronze"
    } else if (valor < pontosElo.Ouro.pontos) {
        return  "Prata"
    } else if (valor < pontosElo.Platina.pontos) {
        return  "Ouro"
    } else if (valor < pontosElo.Ascendente.pontos) {
        return  "Platina"
    } else if (valor < pontosElo.Imortal.pontos) {
        return  "Ascendente"
    } else if (valor < pontosElo.Radiante.pontos) {
        return  "Imortal"
    } else {
        return  "Radiante"    
    }
}

console.log (`O player com nick de, ${personagem.heroi} , atualmenete está no elo ${getElo(personagem.elo)} digno de um  ${felino} `)