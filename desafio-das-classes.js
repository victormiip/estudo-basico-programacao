
class personagem {
    constructor ( nome , idade , classe){
        this.nome = nome
        this.idade = idade
        this.classe = classe
    }
    atacar ( ) {
         if (this.classe === "monge")     return   ("artes marciais")
         if (this.classe === "guerreiro") return   ( "espada")
         if (this.classe === "ninja")     return   ("shuriken") 
         if (this.classe === "mago")      return   ("magia")
         if(this.classe === "bardo")      return   ("poder da música")
         }
}
const player = new personagem ("Jihyo", 28, "bardo")
player.atacar()

console.log(`${player.nome} o ${player.classe} atacou usando ${player.atacar()}`)