
let login = prompt("Insira seu email")
let loginCerto = "lucas@email.com"
let senha = prompt("Insira sua senha")
let senhaCerta = "111"

//Validar se login certo e senha também é
if (login == loginCerto && senha == senhaCerta) {
    alert("Credencial validada.")


    alert("Opção 1: Crédito\n Opção 2: Consignado \n Opção 3: Empréstimo \n Opção 4: Renegociar \n Opção 0: Falar com Atendente.")
    
    

    let opcao = prompt("Escolha a opção:")


    
    switch (opcao) {
        case 1:
            alert("Você selecionou  credito. Redirecionando para o setor responsável")
            break;
        case 2:
            alert("Voce selecionou consignado. Redirecionando para o setor de emprestimo")
            break;
        case 3:
            alert("Você selecionou renegociar. Redirecionando para o setor de renegociação")
            break;
        case 4:
            alert("Você selecionou Falar com Atendente. Redirecionando ao Atendente disponível")
            break;
        case 5:
            alert("Aguarde enquanto localizamos um atendente")
            break;
       
            case 0:
            alert("O usuario não selecionou uma opção válida. redirecioandoao Atendente.")
            break;
       

        default:
            break;
    }
}
//Se o login ou a senha que o  usuario inseriu nao forem iguais temos,-->
// ele não pode fazer login no aplicativo -->

else {   alert("Login ou senha incorretos!")

}