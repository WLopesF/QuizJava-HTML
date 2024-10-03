function questoesHTML() {

    //Nome do usuário
    let nomeCompleto = prompt("Para começo, qual seu nome?");

    if (nomeCompleto === "") {
        alert("Insira seu nome.");


    }

    //Tempo de aprendizado
    let tempoAprendizado = prompt("Há quanto tempo você começou a aprender HTML?");

    if (tempoAprendizado <= 0 || tempoAprendizado === "") {
        alert("Insira um tempo válido");

    }

    if (tempoAprendizado === "") {
        alert("Insira o seu tempo");
    }

    //Questões 
    let tagFechamento = prompt("Qual caractere é utilizado para fechar uma tag?");

    if (tagFechamento === "/") {
        alert("Correto! Parabéns.");
        let acerto = 1;
        const acertos = 1;

    } else {
        alert("Errado! Que pena.");

    }

    let mainEbody = prompt("Qual a diferença entre a tag <main> e <body>?");

    if (mainEbody === "Prioridade" || "Tamanho") {
        mainEbody === ("Body é todo o conteúdo da página, e main é o conteúdo principal")
        alert("Correto! Parabéns");
        let acerto = 1;
        const acertos = +1;

    } else if (mainEbody === "Nenhuma")
        alert("Errado! Que pena.");
   

    let estrutura = prompt("Desafio: Qual a estrutura de prioridade de tags , de <body> até <footer> na criação de um site?");

    if (estrutura === "body, header, nav, main, section, aside e footer") {
        alert("Correto! Parabéns. Essa foi difícil.");
        let acerto = 1;
        const acertos = +1;
           alert("Obrigado por completar o quiz, " + nomeCompleto + ",para " + tempoAprendizado + " você está indo bem! Você acertou " + acertos + ".");
    } else {
        alert("Errado! Que pena.");
    }

}

