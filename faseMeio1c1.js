function botaoResponder(){
  var escolha = ""
  while (escolha != 1 && escolha != 2) {
    escolha = prompt("Qual é sua escolha? \n 1 - Revisar código? \n 2 - Continuar codando.")
    if (escolha == 1) {
      window.location.href = "./fase1c2.html"
    }

    else if (escolha == 2) {
      window.location.href = "./fase2c1.html"
    }

    else {
      alert('Escolha errada')
    } 
  }
}