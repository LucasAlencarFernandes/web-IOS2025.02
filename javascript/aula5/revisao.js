let dinheiro = 10
let precoSorvete = 7.50
let saborEscolhido = "chocolate"

if (dinheiro >= precoSorverte) {
    // se o cliente tem dinheiro suficiente
    console.log("temos os seguintes sabores: chocolate, morango e céu-azul");
    if (saborEscolhido == "chocolate" || saborEscolhido == "morango" || saborEscolhido == "céu-azul") {
       console.log("aqui está seu sorvete de " + saborEscolhido); 
    
    } 
    else
         console.log("não temos esse sabor, desculpe😭");     
}
else{
    // se o clinte nao tem dinheiro suficinte
    console.log("tá pobrinho, amigo😭");
}