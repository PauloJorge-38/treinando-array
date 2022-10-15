const primeiroNome = prompt("Informe o primeiro nome do recruta:")
const sobrenome = prompt("Inform o segundo nome:")
const campoDeEstudo = prompt("Qual o campo de estudo do recruta?")
const anoDeNascimento = prompt("Qual o ano de nascimento do recruta?")


alert(
    "Recruta cadastrado com sucesso!" +
    "\nNome Completo: " + primeiroNome + " " + sobrenome +
    "\nCampo de estudo: " + campoDeEstudo +
    "\nIdade: " + (2022 - anoDeNascimento)
)