//estou setando os nomes e senhas possíveis para entrar.
let usuarioNome = ["paulo","rodosvaldo","teca jacu"];
let usuarioSenha = ["1234","rodavira","mazza"];

//verifica se o usuario e senha esta correto, se sim redireciona, senão alerta.
function logarConta() {
    let nome = document.getElementById("nome").value;
    let senha = document.getElementById("senha").value;
    usuIndex = usuarioNome.indexOf(nome);
    if (senha === usuarioSenha[usuIndex]) {
        window.location.href = "outra.html";
    } else {
        if (usuIndex === -1) {
            alert("Usuário incorreto.\nDesculpe! bah! tchê!");
        } else {
            alert("Senha incorreta.\nDesculpe! ma que bah!... tchê!");
        }
    }
}

//Diz que usuario acessou e compoe a lista de usuarios existentes
function outra(){
    let i = 0;
    let lista = "";

    for(i = 0; i < usuarioNome.length; i + 1) {
        lista = (lista + usuarioNome[i]);
        lista = (lista + " ");
        lista = (lista + usuarioSenha[i]);
        lista = (lista + ", ");
    }

    document.getElementById('lista').innerHTML = (lista);
    console.log(lista);
}
