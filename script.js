function solicitarDados() {

    // Solicita o nome completo do usuário
    let nomeCompleto = prompt("Olá, qual o seu nome completo?");

    // Solicita a idade em anos do usuário
    let idadeAnos = prompt("Qual a sua idade?");

    // Solicita um hobbie do usuário
    let hobbie = prompt("Cite algo que você gosta de fazer.")

    // Exibe um comentário
    alert("Olá, " + nomeCompleto + "! Você tem " + idadeAnos + " anos." + " Que bom que você gosta de " + hobbie + ".");
}