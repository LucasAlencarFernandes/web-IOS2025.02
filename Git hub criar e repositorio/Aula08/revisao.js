
let login = prompt("Insira seu email")
let loginCerto = "lucas@email.com"
let senha = prompt("Insira sua senha")
let senhaCerta = "batata111"

//Validar se login certo e senha também é
if (login == loginCerto && seenha == senhaCerta) {
    alert("Credencial validada.")
}
//Se o login ou a senha que o  usuario inseriu nao forem iguais temos,
// ele não pode fazer login no aplicativo

else {
    alert("Login ou senha incorretos!")

}