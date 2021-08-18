function botaoResponder(){
var escolha = ""
  while (escolha != 1 && escolha != 2) {
    escolha = prompt("Qual é sua escolha? \n 1 - Continuar no churrasco? \n 2 - Voltar ao trabalho?")
    if (escolha == 1) {
      window.location.href = "./fase3c3.html"
    } 

    else if (escolha == 2) {
      window.location.href = "./fase1c2.html"
    }

    else {
      alert('Escolha errada')
    } 
  }
}